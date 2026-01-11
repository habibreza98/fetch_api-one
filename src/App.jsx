import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
  }, []);


  return (
    <div className="container">
      <h1>Product Store</h1>

      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <h5>Rating: ⭐ {item.rating.rate}</h5>
            <p className="para">Person rated: {item.rating.count}</p>
            <p>Price: ${item.price}</p>

            <button><a href="#">Buy Now</a></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
