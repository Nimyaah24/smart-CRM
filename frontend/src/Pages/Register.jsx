import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../Api/userApi"
import { toast } from "react-toastify"

const Register = () => {

    // page navigate cheyan
    const navigate = useNavigate()

    // input states
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const [securityPin, setSecurityPin] = useState("")
const [showPassword, setShowPassword] = useState(false)
const [showPin, setShowPin] = useState(false)

    // REGISTER FUNCTION
    const handleSubmit = async (e) => {

        // page refresh prevent cheyunnu
        e.preventDefault()

        // frontend data object
       const data = {
  name,
  email,
  password,
  securityPin
}

        try {
            // backend api call
            const res = await registerUser(data)

            // success message
            console.log("SUCCESS:", res.data)

            toast.success("Register Success", {
                autoClose: 1000,
                style: {
                    background: "white",
                    color: "#111827",
                    border: "2px solid green"
                }
            })
            // login page redirect
            navigate("/")

        }
        // error
        catch (err) {
            console.log(err)
            toast.error("Register Failed", {
                autoClose: 2000,
                style: {
                    background: "white",
                    color: "#111827",
                    border: "2px solid red"
                }
            })
        }
    }

    return (

        // main container
        <div className="container-fluid d-flex justify-content-center align-items-center position-relative overflow-hidden" style={{ width: "100vw", margin: 0,
    padding: 0,
    height: "100vh",  background: "#f4f7fb" }}>

            {/* background blur circle */}
            <div style={{ position: "absolute", width: "300px", height: "300px", background: "#0f172a10", borderRadius: "50%", top: "-100px", left: "-100px", filter: "blur(60px)" }}></div>

            {/* second blur circle */}
            <div style={{ position: "absolute", width: "250px", height: "250px", background: "#1e293b15", borderRadius: "50%", bottom: "-80px", right: "-80px", filter: "blur(60px)" }} ></div>

            {/* register card */}
            <div className="row shadow-lg overflow-hidden position-relative" style={{ width: "950px", borderRadius: "32px", background: "white" }} >

                {/* LEFT SIDE */}
                <div className="col-lg-6 p-0 d-none d-lg-block" data-aos="fade-right">

                    <div style={{ height: "100%", background: "linear-gradient(to right,#0f172a,#1e293b)", padding: "60px", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>

                        {/* square animation */}
                        <div style={{ position: "absolute", top: "170px", right: "40px", width: "100px", height: "100px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", transform: "rotate(25deg)" }}></div>

                        {/* title */}
                        <h1 className="fw-bold" style={{ fontSize: "58px", lineHeight: "70px" }}>Smart CRM</h1>

                        {/* subtitle */}
                        <p className="mt-4" style={{ fontSize: "18px", color: "#d1d5db", lineHeight: "32px" }}>  Create your account and start managing customers, tasks and business operations with Smart CRM.</p>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-in" >

                    <div className="w-100 p-5">

                        {/* heading */}
                        <div className="mb-5 text-center">

                            <h2 className="fw-bold" style={{ fontSize: "38px", color: "#0f172a" }}>Create Account</h2>

                            <p className="text-secondary">Register to continue </p>

                        </div>

                        {/* form */}
                        <form onSubmit={handleSubmit} autoComplete="off">

                            {/* name input */}
                            <div className="mb-4">

                                <input type="text" autoComplete="off" className="form-control form-control-lg border-0 shadow-sm" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={{ background: "#f8fafc", borderRadius: "16px", padding: "16px" }} />

                            </div>

                            {/* email input */}
                            <div className="mb-4">

                                <input type="email" autoComplete="off" className="form-control form-control-lg border-0 shadow-sm" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ background: "#f8fafc", borderRadius: "16px", padding: "16px" }} />

                            </div>

                            {/* password input */}
                          <div className="mb-4 position-relative">

  <input
    type={showPassword ? "text" : "password"}
    autoComplete="new-password"
    className="form-control form-control-lg border-0 shadow-sm"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{
      background: "#f8fafc",
      borderRadius: "16px",
      padding: "16px",
      paddingRight: "50px"
    }}
  />

  <span
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: "absolute",
      right: "18px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#64748b"
    }}
  >
    {showPassword ? (
      <EyeOff size={20} />
    ) : (
      <Eye size={20} />
    )}
  </span>

</div>

{/* Security PIN */}
<div className="mb-4 position-relative">

  <input
    type={showPin ? "text" : "password"}
    maxLength={4}
    autoComplete="off"
    className="form-control form-control-lg border-0 shadow-sm"
    placeholder="4 Digit Security PIN"
    value={securityPin}
    onChange={(e) => setSecurityPin(e.target.value)}
    style={{
      background: "#f8fafc",
      borderRadius: "16px",
      padding: "16px",
      paddingRight: "50px"
    }}
  />

  <span
    onClick={() => setShowPin(!showPin)}
    style={{
      position: "absolute",
      right: "18px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#64748b"
    }}
  >
    {showPin ? (
      <EyeOff size={20} />
    ) : (
      <Eye size={20} />
    )}
  </span>

</div>


                            {/* submit button */}
                            <button type="submit" className="btn w-100 text-white fw-bold py-3" style={{ background: "linear-gradient(to right,#0f172a,#1e293b)", borderRadius: "16px", fontSize: "18px", border: "none", boxShadow: "0 10px 20px rgba(15,23,42,0.2)" }} > Create Account </button>

                            {/* login link */}
                            <p className="text-center mt-4 text-secondary">Already have an account?
                                <Link to="/" className="ms-2 fw-bold text-decoration-none">Login </Link>
                            </p>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Register