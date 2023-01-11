import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    // if (!token) {
    //   navigate('/login');
    // }
  });

  //  else {
  //   navigate('/login');
  // }
  const [data, setData] = useState({
    name: '',
    apartment: '',
    zip: '',
    streat: '',
    country: '',
    city: '',
    email: '',
    password: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:5000/users/register';

      const { data: res } = await axios
        .post(url, data)
        .then(() => {
          console.log('signed up but i dont know');

          navigate('/login');
        })
        .catch((error) => {
          console.log(error);
        });

      // navigate('/login');
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-4 ">
            <header className="card-header">
              <h4 className="card-title mt-2 d-flex justify-content-center">
                Sign up
              </h4>
            </header>
            <article className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="row">
                    <div className="col form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                      />
                    </div>
                    <div className="col form-group">
                      <input
                        type="string"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        onChange={handleChange}
                        value={data.phone}
                      />
                    </div>
                  </div>

                  <div className="form-group my-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={data.password}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      placeholder="Country"
                      onChange={handleChange}
                      value={data.country}
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="string"
                      className="form-control"
                      name="city"
                      placeholder="City"
                      onChange={handleChange}
                      value={data.city}
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip"
                      name="zip"
                      onChange={handleChange}
                      value={data.zip}
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="string"
                      className="form-control"
                      name="address"
                      placeholder="Address"
                      onChange={handleChange}
                      value={data.address}
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street "
                      name="streat"
                      onChange={handleChange}
                      value={data.streat}
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="string"
                      className="form-control"
                      name="apartment"
                      placeholder="Apartment"
                      onChange={handleChange}
                      value={data.apartment}
                    />
                  </div>
                </div>

                <div className="form-group d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-primary btn-block ">
                    Sign up
                  </button>
                </div>
              </form>
            </article>
            <div className="border-top card-body text-center">
              Already Have an account? <NavLink to="/login">Log In</NavLink>
              {/* <a href="/lgonin">Log In</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
