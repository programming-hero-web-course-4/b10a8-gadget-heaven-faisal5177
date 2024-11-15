import { useParams, useLoaderData } from 'react-router-dom';
import { addToStoredCart } from '../../utility/addToDb';

const ListedCategory = () => {
  const { product_id } = useParams(); 
  const data = useLoaderData();
  const id = parseInt(product_id, 10);

  const category = data.find(categoryItem => categoryItem.product_id === id);

  if (!category) {
    return <p>Product not found.</p>; 
  }

  const { product_title, price, description, product_image } = category;

  const handleCart = (id) => {
    addToStoredCart(id); 
    alert('Product added to the cart!');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <img className="w-36 mr-6" src={product_image} alt={product_title} />
        <div>
          <button onClick={() => handleCart(category.product_id)} className="btn btn-outline mr-6 btn-accent">
            Add to Cart
          </button>
          <button className="btn btn-accent">Wishlist</button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">{product_title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          <small>{description}</small>
        </p>
        <p className="text-xl font-bold">{price}</p>
      </div>
    </div>
  );
};

export default ListedCategory;
