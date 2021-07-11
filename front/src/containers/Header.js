import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deliveryActions } from "../redux/actions";

import { Header as BaseHeader } from "../components";

const Header = () => {
    const dispatch = useDispatch();

    const headerRef = React.useRef(null);

    const categories = useSelector((state) => state.delivery.products);
    const delivery = useSelector((state) => state.delivery.delivery);
    const cart = useSelector((state) => state.delivery.cart);

    const [sticky, setSticky] = React.useState({ isSticky: false, offset: 0 });
    const [street, setStreet] = React.useState('');
    const [building, setBuilding] = React.useState('');
    const [tooltipVisible, setTooltipVisible] = React.useState(false);
    const [active, setActive] = React.useState("0");

    const openTab = (e) => setActive(+e.target.dataset.index);

    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > elTopOffset + elHeight) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    const onDelivery = () => {
        dispatch(deliveryActions.setDelivery(true));
    };

    const onSelfDelivery = () => {
        dispatch(deliveryActions.setDelivery(false));
    };

    const onSendCart = () => {
        if(!delivery) {
            dispatch(deliveryActions.sendData(cart));
        } else if(street === '' || building === '') {
            setTooltipVisible(true);
        } else {
            dispatch(deliveryActions.addAdress({
                street: street,
                building: building,
            }));
            dispatch(deliveryActions.sendData(cart));
            setBuilding('');
            setStreet('') ;
        }
    }

    React.useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    return (
        <BaseHeader
            onDelivery={onDelivery}
            onSelfDelivery={onSelfDelivery}
            categories={categories}
            headerRef={headerRef}
            sticky={sticky}
            onSendCart={onSendCart}
            setTooltipVisible={setTooltipVisible}
            tooltipVisible={tooltipVisible}
            setBuilding={setBuilding}
            building={building}
            setStreet={setStreet}
            street={street}
            openTab={openTab}
            active={active}
        />
    );
};

export default Header;
