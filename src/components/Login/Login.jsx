import React from 'react';
import { useState } from 'react';

import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    await e.preventDefault();
    try {
      const url = 'http://localhost:5000/users/login';

      const { data: res } = await axios.post(url, data).then((res) => {
        localStorage.setItem('user :', res.data.user);
        localStorage.setItem('token', res.data.token);

        navigate('/homepage');
        // console.log(res.data.user);
      });
      // console.log(res.message);

      if (res.data) {
        alert('Login Successfull');
      }

      // setData({ dataa });
      // console.log(data.user);
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
                    <div className=" form-group my-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                      />
                    </div>
                    <div className=" form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-primary btn-block ">
                    Log in
                  </button>
                </div>
              </form>
            </article>
            <div className="border-top card-body text-center">
              Don't Have an account? <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
