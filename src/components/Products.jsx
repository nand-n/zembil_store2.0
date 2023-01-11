import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import { render } from 'react-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      //   const url = 'http://fakestoreapi.com/products';
      //   const url = 'https://api.storerestapi.com/products';
      const url = 'http://localhost:5000/products';

      const response = await fetch(url);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div>Loading......</div>
      //   <div>
      //     <div className="col-md-3">
      //       <Skeleton />
      //     </div>
      //     <div className="col-md-3">
      //       <Skeleton />
      //     </div>
      //     <div className="col-md-3">
      //       <Skeleton />
      //     </div>
      //     <div className="col-md-3">
      //       <Skeleton />
      //     </div>
      //   </div>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.catagory.name === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            ALL
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Wemen's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct('jewlery')}
          >
            Jewlery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct('Electronics')}
          >
            Electronics
          </button>
        </div>
        {console.log('Fatched products:', filter)}
        <div className="row">
          {filter.map((product) => (
            // <div className="row">
            <div className="col-md-3 mb-3">
              <div
                className="card h-100 w-60% text-center p-3"
                key={product._id}
              >
                <img
                  src={product.image}
                  // className="card-img-top"
                  className=" card-img-top "
                  height="240px"
                  width="15px"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.name.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">
                    Price : {product.price} ETB
                  </p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark mb-0"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  //

  return (
    // <div>
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>

      <div className="row ">{loading ? <Loading /> : <ShowProducts />}</div>
      <div className="d-flex justify-content-center my-5">
        <NavLink to={'/productupload'} className="btn btn-outline-dark mb-0  ">
          Upload Product
        </NavLink>
      </div>
    </div>
  );
};

export default Products;
