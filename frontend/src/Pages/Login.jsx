// import react hook
// input values store cheyan vndit
import { useState } from "react"

// link page refresh illand page change cheyan pattum
// useNavigate code use chyth route change cheyan
import { Link, useNavigate } from "react-router-dom"

// backend login api call cheyan


// toast
import { toast } from "react-toastify"
import { loginUser } from "../Api/userApi"

// create react component
const Login = () => {

    // password visible icon
    const [showPassword, setShowPassword] = useState(false)

    // remember me state
    const [rememberMe, setRememberMe] = useState(false)

    // login success aayan dashboardilki navigate cheyan
    const navigate = useNavigate()

    // email state
    // const [email, setEmail] = useState("")

    // // password state
    // const [password, setPassword] = useState("")

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    // form submit handle cheyan
    const handleSubmit = async (e) => {

        // page refresh prevent cheyunnu
        e.preventDefault()

        //   error handling
        try {
            console.log(form);

            // email, password indon nokunu
            const res = await loginUser(form)
            if (res.success) {
                toast.success("Login Success", { autoClose: 1000, style: { background: "white", border: "2px solid green", color: "#111827" } })
                navigate("/dashboard")
            }
            // success



        }
        //   error
        catch (err) {
            console.log(err)
            toast.error("Login Failed", { autoClose: 2000, style: { background: "white", color: "#111827", border: "2px solid red" } })
        }
    }


    return (

        // main container
        <div className="container-fluid" style={{ minHeight: "100vh", backgroundColor: "#f4f7fb", position: "relative", overflow: "hidden" }}>

            {/* outline square */}
            <div style={{ position: "absolute", top: "278px", left: "315px", width: "100px", height: "100px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", transform: "rotate(25deg)", zIndex: "1" }} ></div>

            {/* row */}
            <div className="row min-vh-100">

                {/* left side */}
                <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center px-5" style={{ background: "linear-gradient(to right,#0f172a,#1e293b)", color: "white", position: "relative" }} >

                    <h1 className="fw-bold display-4 mb-4" style={{ zIndex: "2" }} >  Smart CRM</h1>

                    <p className="fs-5 text-light" style={{ zIndex: "2", maxWidth: "500px" }} > Manage customers, track activities, organize workflow and improve productivity with a modern CRM</p>

                </div>

                {/* login form side */}
                <div className="col-lg-6 d-flex justify-content-center align-items-center">

                    <form autoComplete="off" onSubmit={handleSubmit} className="bg-white shadow-lg p-5" style={{ width: "100%", maxWidth: "430px", borderRadius: "20px" }}>

                        {/* heading */}
                        <div className="text-center mb-4">

                            <h2 className="fw-bold" style={{ color: "#0f172a" }}> Welcome Back</h2>

                            <p className="text-secondary">Login to continue</p>

                        </div>

                        {/* email */}
                        <div className="mb-3">

                            <label className="form-label fw-semibold"> Email Address</label>

                            <input autoComplete="off" type="email" className="form-control form-control-lg" placeholder="Enter your email" value={form.email} onChange={handlechange} name="email" />

                        </div>


                        {/* password */}
                        <div className="mb-3 ">

                            <label className="form-label fw-semibold"> Password  </label>

                            <input autoComplete="new-password" type="password" className="form-control form-control-lg " placeholder="Enter your password" value={form.password} onChange={handlechange} name="password" />

                        </div>

                        {/* remember + forgot */}
                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div className="d-flex align-items-center">

                                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} style={{ width: "16px", height: "16px", cursor: "pointer" }} />

                                <span className="ms-2 text-secondary"> Remember me </span>

                            </div>

                            <Link
                                to="/forgotpassword"
                                className="text-decoration-none"
                            >
                                Forgot Password?
                            </Link>

                        </div>

                        {/* button */}
                        <button type="submit" className="btn btn-dark w-100 py-2 fs-5 fw-bold" style={{ borderRadius: "10px" }} >Login </button>

                        {/* register */}
                        <p className="text-center mt-4 text-secondary">Don't have an account?
                            <Link to="/register" className="ms-2 fw-bold text-decoration-none" >  Register </Link>
                        </p>

                    </form>

                </div>

            </div>

        </div>

    )

}

export default Login