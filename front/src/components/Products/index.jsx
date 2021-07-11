import React from "react";
import { useSelector } from "react-redux";

import { ProductCard } from "..";

import "./products.scss";

const Products = ({
    categories,
    onAdd,
    active,
    onPlus,
    onMinus,
    count,
    cart,
    setCount,
    manualEffect,
}) => {
    const isDelivery = useSelector((state) => state.delivery.delivery);
    return (
        <div className="products-block">
            {categories &&
                categories.map((category) => (
                    <div
                        key={category.id}
                        id={category.name}
                        className={
                            category.id % 2 === 0
                                ? "products-block__category products-block__category--even"
                                : "products-block__category"
                        }>
                        <div className="products-block__category-name">
                            <h2>{category.name}</h2>
                        </div>

                        {isDelivery
                            ? category.products
                                  .filter(
                                      (product) => product.delivery === true,
                                  )
                                  .map((filtred) => (
                                      <ProductCard
                                          key={filtred.id}
                                          {...filtred}
                                          onAdd={onAdd}
                                          onPlus={onPlus}
                                          onMinus={onMinus}
                                          count={count}
                                          cart={cart}
                                          manualEffect={manualEffect}
                                          setCount={setCount}
                                      />
                                  ))
                            : category.products.map((product) => (
                                  <ProductCard
                                      key={product.id}
                                      {...product}
                                      active={active}
                                      onAdd={onAdd}
                                      onPlus={onPlus}
                                      onMinus={onMinus}
                                      count={count}
                                      cart={cart}
                                      manualEffect={manualEffect}
                                      setCount={setCount}
                                  />
                              ))}
                    </div>
                ))}
        </div>
    );
};

export default Products;
