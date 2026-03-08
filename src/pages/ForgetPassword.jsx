import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-items-center justify-content-center p-2 p-md-4">
        <div className="col-12 col-md-7 col-lg-5 col-xl-4">
          <div className="card mt-5 shadow">
            <div className="card-header px-4 py-4 bg-success">
              <h3 className="h2 text-center text-white fw-light">
                Forget Password
              </h3>
            </div>
            <form className="p-4 px-4 needs-validation" novalidate>
              {error && (
                <div className="bg-red-100 p-3 mb-4 text-red-700 rounded">
                  {error}
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter the Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-success mb-4 w-100"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <div className="text-gray-500 ">
                Password Remembered?{" "}
                <a href="/" className="text-success">
                  Click here to login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
