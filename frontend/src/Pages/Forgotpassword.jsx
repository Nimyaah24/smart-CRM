import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";


const ForgotPassword = () => {

      const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // API call ivide add cheyyam

      toast.success("Password Updated Successfully");

    } catch (err) {
      console.log(err);
      toast.error("Failed to Update Password");
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        overflow: "hidden"
      }}
    >
      <div className="row min-vh-100">

        {/* LEFT SIDE */}
        <div
          className="col-lg-6 d-none d-lg-flex flex-column justify-content-center px-5"
          style={{
            background:
              "linear-gradient(to right,#0f172a,#1e293b)",
            color: "white",
            position: "relative", overflow: "hidden" 
          }}
        >

            {/* outline square */}
<div
  style={{
    position: "absolute",
    top: "37%",
    left: "31.2%",
    width: "100px",
    height: "100px",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    transform: "rotate(25deg)",
    zIndex: "1"
  }}
></div>

          <h1
            className="fw-bold display-4 mb-4"
            style={{ zIndex: 2 }}
          >
            Smart CRM
          </h1>

          <p
            className="fs-5 text-light mt-4"
            style={{
              maxWidth: "600px",
              zIndex: 2
            }}
          >
           Forgot your password? No worries. Enter your email address and create a new password to continue using Smart CRM.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg p-5"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "20px"
            }}
          >

            <div className="text-center mb-4">

              <h2
                className="fw-bold"
                style={{ color: "#0f172a" }}
              >
                Forgot Password
              </h2>

              <p className="text-secondary">
                Enter your email and new password
              </p>

            </div>

            {/* EMAIL */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            {/* NEW PASSWORD */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                New Password
              </label>

  <div className="position-relative">

            <input
  type={showPassword ? "text" : "password"}
  className="form-control form-control-lg"
  placeholder="Enter new password"
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
/>

 <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      style={{
        position: "absolute",
        right: "15px",
        top: "50%",
        transform: "translateY(-50%)",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color:" #7e7e7f"
      }}
    >
      {showPassword ? (
        <EyeOff size={20} />
      ) : (
        <Eye size={20} />
      )}
    </button>

</div>
            </div>

            <button
              type="submit"
              className="btn btn-dark w-100 py-2 fs-5 fw-bold"
              style={{
                borderRadius: "10px"
              }}
            >
              Update Password
            </button>

            <p className="text-center mt-4 text-secondary">

              Remember your password?

              <Link
                to="/"
                className="ms-2 fw-bold text-decoration-none"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;