import React from "react";
import { Link } from "react-scroll";

import "./categories.scss";

const Categories = ({
    categories,
    headerRef,
    sticky,
    openTab,
    active,
}) => {
    return (
        <div
            className={`categories${
                sticky.isSticky ? " categories--sticky" : ""
            }`}
            ref={headerRef}>
            <div className="categories__tabs" >
                <ul>
                    {categories &&
                        categories.map((item, i) => (
                            <li key={item.id} onClick={openTab}>
                                <Link
                                    activeClass={i === active ? "active" : ""}
                                    to={item.name}
                                    spy={true}
                                    smooth={true}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;
