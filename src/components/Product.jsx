import React, { useState, useEffect } from 'react';
// import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [filter, setFilter] = useState(product);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const url = 'http://localhost:5000/products';

      const response = await fetch(`${url}/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const dispach = useDispatch();
  const addProduct = (product) => {
    dispach(addCart(product));
  };

  const Loading = () => {
    return <div>Loading ......</div>;
  };

  const ShowProduct = () => {
    return (
      <div className="row py-4">
        {console.log('The file goes to redux', product)}

        <div className="col-md-6 ">
          <img
            src={product.image}
            alt={product.name}
            height="400px "
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.name}</h4>
          <h1 className="display-5 fw-bolder"> {product.name}</h1>
          <p className="lead fw-bold">
            Rating : {product.rating}
            <i className="fa fa-star" />
          </p>
          <h3 className="lead fw-bold my-4">Price: {product.price} ETB</h3>
          <p className="lead">{product.description}</p>
          <p className="lead"> {product.richDescription}</p>
          <button
            // onClick={() => addProduct(product)}
            className="btn btn-outline-dark px-2 py-2"
            onClick={() => addProduct(product)}
          >
            Add To Cart
          </button>

          <NavLink to="/cart" className="btn btn-dark ms-2 px-2">
            Go To Cart
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}

export default Product;
