import axios from 'axios';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
const token = localStorage.getItem('token');

function ProductUpload() {
  const [image, setImage] = useState();

  const [data, setData] = useState({
    name: '',
    description: '',
    richDescription: '',
    // file: '',
    image: '',
    brand: '',
    price: '',
    catagory: '',
    rating: '',
    numReviews: '',
    isFeatured: '',
  });
  // const [image, setImage] = useState({ preview: '', data: '' });
  // const [status, setStatus] = useState('');

  // const [error, setError] = useState('');
  // const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // const handleFileChange = (e) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setImage(img);
  // };

  const handleSubmit = async (e) => {
    await e.preventDefault();
    // let formData = new FormData();
    // formData.append('file', image.data);
    const formData = new FormData();
    formData.append('image', data);

    const url = 'http://localhost:5000/products';

    const { data: res } = await axios.post(url, formData, data);
    if (res) {
      console.log('Successfully uploaded');
    }

    console.log(res);
  };
  const handleChangeUplad = (e) => {
    setData(e.target.files[0]);
  };

  return (
    <div className="container">
      {/* name: req.body.name,
    description: req.body.description,
    richDescription: req.body.richDescription,
    image: `${basePath}${fileName}`,
    brand: req.body.brand,
    price: req.body.price,
    catagory: req.body.catagory,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReview,
    isFeatured: req.body.isFeatured, */}

      {/* <div className="card">
        <input
          id="input-b1"
          name="input-b1"
          type="file"
          className="file-upload"
          data-browse-on-zone-click="true"
        />
      </div> */}

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-4 ">
            <header className="card-header">
              <h4 className="card-title mt-2 d-flex justify-content-center">
                Add Product
              </h4>
            </header>
            <article className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="row">
                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                      />
                    </div>
                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                        value={data.description}
                      />
                    </div>
                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rich Description"
                        name="richDescription"
                        onChange={handleChange}
                        value={data.richDescription}
                      />
                    </div>
                    <div className=" form-group my-1">
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        onChange={handleChange}
                        value={data.image}
                      />
                    </div>

                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Brand Name"
                        name="brand"
                        onChange={handleChange}
                        value={data.brand}
                      />
                    </div>
                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                        value={data.price}
                      />
                    </div>
                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Catagory"
                        name="catagory"
                        onChange={handleChange}
                        value={data.catagory}
                      />
                    </div>
                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Count In Stock"
                        name="countInStock"
                        onChange={handleChange}
                        value={data.countInStock}
                      />
                    </div>

                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rating"
                        name="rating"
                        onChange={handleChange}
                        value={data.rating}
                      />
                    </div>
                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Number of Reviews"
                        name="numReview"
                        onChange={handleChange}
                        value={data.numReview}
                      />
                    </div>
                    <div className=" form-group my-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Is Featured"
                        name="isFeatured"
                        onChange={handleChange}
                        value={data.isFeatured}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-primary btn-block ">
                    Upload
                  </button>
                </div>
              </form>
            </article>
            <div className="border-top card-body text-center">
              Cancel? go to Homepage <NavLink to="/homepage">Homepage</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUpload;
