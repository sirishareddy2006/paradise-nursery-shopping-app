
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './redux/CartSlice';
import './ProductList.css';

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying Plants',
    price: 299,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Air Purifying Plants',
    price: 399,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 3,
    name: 'Spider Plant',
    category: 'Air Purifying Plants',
    price: 249,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400'
  },
  {
    id: 4,
    name: 'Areca Palm',
    category: 'Air Purifying Plants',
    price: 499,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400'
  },
  {
    id: 5,
    name: 'Rubber Plant',
    category: 'Air Purifying Plants',
    price: 449,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 6,
    name: 'Boston Fern',
    category: 'Air Purifying Plants',
    price: 349,
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9b?w=400'
  },

  // Succulents
  {
    id: 7,
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 199,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 8,
    name: 'Echeveria',
    category: 'Succulents',
    price: 179,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 9,
    name: 'Jade Plant',
    category: 'Succulents',
    price: 229,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 10,
    name: 'Haworthia',
    category: 'Succulents',
    price: 189,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 11,
    name: 'String of Pearls',
    category: 'Succulents',
    price: 279,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 12,
    name: 'Zebra Plant',
    category: 'Succulents',
    price: 219,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },

  // Indoor Decorative Plants
  {
    id: 13,
    name: 'Monstera Deliciosa',
    category: 'Indoor Decorative Plants',
    price: 599,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
  },
  {
    id: 14,
    name: 'Pothos',
    category: 'Indoor Decorative Plants',
    price: 249,
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
  },
  {
    id: 15,
    name: 'Calathea',
    category: 'Indoor Decorative Plants',
    price: 399,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 16,
    name: 'Philodendron',
    category: 'Indoor Decorative Plants',
    price: 449,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 17,
    name: 'ZZ Plant',
    category: 'Indoor Decorative Plants',
    price: 499,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 18,
    name: 'Fiddle Leaf Fig',
    category: 'Indoor Decorative Plants',
    price: 699,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    'Air Purifying Plants',
    'Succulents',
    'Indoor Decorative Plants'
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="brand">Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </nav>

      {/* Page Heading */}
      <header className="product-header">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Discover beautiful plants for your home!</p>
      </header>

      {/* Plant Categories */}
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p className="plant-price">
                      ₹{plant.price}
                    </p>

                    <button
                      className="add-cart-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
