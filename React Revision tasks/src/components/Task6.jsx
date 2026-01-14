import React from 'react';

const Task6 = () => {
  const ProductCard = ({ title, price, image, stockStatus, onBuy }) => {
    const isOutOfStock = stockStatus === 'out_of_stock';
    
    const handleBuy = () => {
      if (!isOutOfStock && onBuy) {
        onBuy(title);
      }
    };

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
          <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-semibold ${isOutOfStock ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
            {isOutOfStock ? 'Out of Stock' : 'In Stock'}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 line-clamp-2 min-h-14">{title}</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold text-blue-600">${price}</span>
            <button
              onClick={handleBuy}
              disabled={isOutOfStock}
              className={`px-4 py-2 rounded-lg transition-colors ${isOutOfStock ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              {isOutOfStock ? 'Out of Stock' : 'Buy Now'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      stockStatus: "in_stock"
    },
    {
      id: 2,
      title: "Smart Watch Series 5 with GPS",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      stockStatus: "in_stock"
    },
    {
      id: 3,
      title: "Mechanical Gaming Keyboard RGB",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      stockStatus: "out_of_stock"
    },
    {
      id: 4,
      title: "Portable Bluetooth Speaker Waterproof",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      stockStatus: "in_stock"
    }
  ];
  
  const handleBuy = (productTitle) => {
    alert(`"${productTitle}" has been added to your cart!`);
  };

  return (
    <div className="p-6 border rounded-lg bg-linear-to-r from-cyan-50/50 to-teal-50/50">
      <h2 className="text-2xl font-bold mb-4 text-teal-800">Task 6: Product Card Generator</h2>
      <p className="mb-6 text-center text-zinc-600">Reusable ProductCard component with props and conditional rendering</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            stockStatus={product.stockStatus}
            onBuy={handleBuy}
          />
        ))}
      </div>
    </div>
  );
};

export default Task6;