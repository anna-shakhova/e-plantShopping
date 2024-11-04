import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './ProductList.css'
import { addItem } from './CartSlice';

const ProductCard = memo(({ plant }) => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector(state => state.cart.items);

  const addedToCart = useMemo(() => itemsInCart.find((item) => item.name === plant.name), [plant.name, itemsInCart]);

  const handleAddToCard = () => {
    dispatch(addItem({
      ...plant,
      quantity: 1,
    }));
  };

  return (
    <div className="product-card">
      <div className="product-title">{plant.name}</div>
      <img src={plant.image} alt={plant.name} className="product-image" />
      <div className="product-price">{plant.cost}</div>
      <div>{plant.description}</div>
      <button className={`product-button ${addedToCart  ? 'added-to-cart' : ''}`} onClick={handleAddToCard}>
        {addedToCart  ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
});

export default ProductCard;
