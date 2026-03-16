import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/auth/reset-password/${id}/${token}`, {
        password, 
      });
      toast.success(response.data.message);
      setError(null);
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Unable to reset password";
      setError(errorMessage);
      toast.error(errorMessage);
    }
    setPassword("");
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-items-center justify-content-center p-2 p-md-4">
        <div className="col-12 col-md-7 col-lg-5 col-xl-4">
          <div className="card mt-5 shadow">
            <div className="card-header px-4 py-4 bg-success">
              <h3 className="h2 text-center text-white fw-light">
                Reset Password
              </h3>
            </div>
            <form className="p-4 px-4 needs-validation" novalidate>
              {error && (
                <div className="bg-red-100 p-3 mb-4 text-red-700 rounded">
                  {error}
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  New Password
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
                    placeholder="Enter New Password"
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
                className="btn btn-success mb-4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
