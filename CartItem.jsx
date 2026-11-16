
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './redux/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        backgroundColor: '#2e7d32',
        color: 'white'
      }}>
        <h2>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: 'white' }}>Home</Link>
          <Link to="/plants" style={{ color: 'white' }}>Plants</Link>
          <Link to="/cart" style={{ color: 'white' }}>
            Cart ({totalItems})
          </Link>
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <h2>Your cart is empty!</h2>
          <p>Explore our plants and add your favorites to the cart.</p>
          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '15px',
                padding: '15px',
                marginBottom: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px'
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover'
                }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>Price: ${Number(item.price).toFixed(2)}</p>
              </div>

              <div>
                <label htmlFor={`quantity-${item.id}`}>
                  Quantity:
                </label>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  style={{ width: '55px', marginLeft: '8px' }}
                />
              </div>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total Items: {totalItems}</h2>
          <h2>Total Amount: ${totalPrice.toFixed(2)}</h2>

          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>

          <button onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
