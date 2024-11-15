const WishlistItem = ({ product_id }) => {
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      fetch('/ProductsData.json')
        .then((res) => res.json())
        .then((data) => {
          const productDetails = data.products?.find((product) => product.product_id === product_id);
          if (productDetails) {
            setProduct(productDetails);
          } else {
            console.error('Product not found!');
          }
        })
        .catch((err) => console.error('Error loading product data:', err));
    }, [product_id]);
  
    if (!product) return <div>Loading...</div>;
  
    return (
      <div>
        <h2 className="text-2xl font-bold">Wishlist</h2>
        <div className="flex items-center justify-between p-2">
        <img className="w-16 h-16" src={product.product_image} alt={product.product_title} />
        <div>{product.product_title}</div>
        <div>${product.price}</div>
      </div>
      </div>
    );
  };
  
  export default WishlistItem;