import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      toast.success(response.data.message);
      setError(null);
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-items-center justify-content-center p-2 p-md-4">
        <div className="col-12 col-md-7 col-lg-5 col-xl-4">
          <div className="card mt-5 shadow">
            <div className="card-header px-4 py-4 bg-success">
              <h3 className="h2 text-center text-white fw-light">Register</h3>
            </div>
            <form className="p-4 px-4 needs-validation" novalidate>
              {error && (
                <div className="alert alert-danger fade show">{error}</div>
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter the Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="d-flex gap-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control"
                    id="password"
                    placeholder="Enter the Password"
                  />
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-xl" />
                    ) : (
                      <FiEye className="text-xl" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success mb-4 w-100"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <div className=" text-gray-500 ">
                Already have an account?{" "}
                <a href="/" className="text-success">
                  Login 
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
