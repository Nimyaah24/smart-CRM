
// IMPORTS


// react hook
import { useState } from "react"

// react router
import { useNavigate } from "react-router-dom"

// dark mode component
import DarkModeToggle from "../components/DarkModeToggle"

// icons
import {
    ArrowLeft,
    Bell,
    Search,
    ShieldCheck,
    Lock,
    User,
    Mail,
    KeyRound,
    Moon,
    Globe,
    Save
}
from "lucide-react"




// SETTINGS COMPONENT

const Settings = () => {

    /* NAVIGATION */

    const navigate = useNavigate()



    /*DARK MODE STATE */

    const [darkMode, setDarkMode] = useState(false)



    /*
    ============================================
    FORM STATES
    ============================================
    */

    const [name, setName] = useState("Admin User")

    const [email, setEmail] = useState("admin@gmail.com")

    const [password, setPassword] = useState("123456")



    return (

        /*
        ============================================
        MAIN CONTAINER
        ============================================
        */

        <div

            className="container-fluid"

            style={{

                minHeight: "100vh",

                background:
                    darkMode
                        ? "#020617"
                        : "#f1f5f9",

                padding: "30px",

                transition: "0.3s"

            }}
        >



            {/* ============================================
            TOP NAVBAR
            ============================================ */}

            <div className="d-flex justify-content-between align-items-center mb-4">



                {/* LEFT */}

                <div className="d-flex align-items-center gap-3">



                    {/* BACK BUTTON */}

                    <button

                        onClick={() => navigate("/dashboard")}

                        className="btn"

                        style={{

                            width: "55px",

                            height: "55px",

                            borderRadius: "18px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "white",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        <ArrowLeft
                            color={
                                darkMode
                                    ? "white"
                                    : "#0f172a"
                            }
                        />

                    </button>



                    {/* TITLE */}

                    <div>

                        <h2

                            className="fw-bold m-0"

                            style={{

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            Settings Panel

                        </h2>

                        <p
                            className="m-0 mt-1"

                            style={{
                                color: "#64748b"
                            }}
                        >

                            Manage application preferences

                        </p>

                    </div>

                </div>



                {/* RIGHT */}

                <div className="d-flex align-items-center gap-3">



                    {/* SEARCH */}

                    <div

                        className="position-relative"

                        style={{
                            width: "300px"
                        }}
                    >

                        <Search

                            size={18}

                            style={{

                                position: "absolute",

                                top: "16px",

                                left: "15px",

                                color: "#64748b"

                            }}
                        />



                        <input

                            type="text"

                            placeholder="Search settings..."

                            className="form-control border-0"

                            style={{

                                background:
                                    darkMode
                                        ? "#0f172a"
                                        : "white",

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a",

                                borderRadius: "18px",

                                padding:
                                    "14px 14px 14px 45px",

                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"

                            }}
                        />

                    </div>



                    {/* DARK MODE */}

                    <DarkModeToggle
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />



                    {/* NOTIFICATION */}

                    <div

                        className="d-flex justify-content-center align-items-center"

                        style={{

                            width: "55px",

                            height: "55px",

                            borderRadius: "18px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "white",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        <Bell
                            color={
                                darkMode
                                    ? "white"
                                    : "#0f172a"
                            }
                        />

                    </div>

                </div>

            </div>



            {/* ============================================
            HERO SECTION
            ============================================ */}

            <div

                className="p-5 mb-4 position-relative overflow-hidden"

                style={{

                    borderRadius: "35px",

                    background:
                        "linear-gradient(to right,#0f172a,#1e293b)",

                    minHeight: "240px"

                }}
            >

                {/* BACKGROUND */}

                <div

                    style={{

                        position: "absolute",

                        width: "400px",

                        height: "400px",

                        borderRadius: "50%",

                        background:
                            "rgba(255,255,255,0.05)",

                        top: "-120px",

                        right: "-100px"

                    }}
                />



                {/* TITLE */}

                <h1

                    className="fw-bold"

                    style={{

                        color: "white",

                        fontSize: "58px",

                        position: "relative"

                    }}
                >

                    Account Settings

                </h1>



                {/* DESCRIPTION */}

                <p

                    className="mt-4"

                    style={{

                        color: "#cbd5e1",

                        fontSize: "18px",

                        lineHeight: "34px",

                        maxWidth: "700px",

                        position: "relative"

                    }}
                >

                    Customize your profile, security and application settings with modern SaaS dashboard experience.

                </p>

            </div>



            {/* ============================================
            SETTINGS CONTENT
            ============================================ */}

            <div className="row">



                {/* LEFT SIDEBAR */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "rgba(15,23,42,0.8)"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(12px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        {/* MENU 1 */}

                        <div

                            className="d-flex align-items-center gap-3 p-3 mb-3"

                            style={{

                                borderRadius: "20px",

                                background:
                                    "linear-gradient(to right,#2563eb,#3b82f6)",

                                color: "white"

                            }}
                        >

                            <User size={20} />

                            Profile Settings

                        </div>



                        {/* MENU 2 */}

                        <div

                            className="d-flex align-items-center gap-3 p-3 mb-3"

                            style={{

                                borderRadius: "20px",

                                background:
                                    darkMode
                                        ? "#1e293b"
                                        : "#f8fafc",

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            <ShieldCheck size={20} />

                            Security

                        </div>



                        {/* MENU 3 */}

                        <div

                            className="d-flex align-items-center gap-3 p-3 mb-3"

                            style={{

                                borderRadius: "20px",

                                background:
                                    darkMode
                                        ? "#1e293b"
                                        : "#f8fafc",

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            <Moon size={20} />

                            Appearance

                        </div>



                        {/* MENU 4 */}

                        <div

                            className="d-flex align-items-center gap-3 p-3"

                            style={{

                                borderRadius: "20px",

                                background:
                                    darkMode
                                        ? "#1e293b"
                                        : "#f8fafc",

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            <Globe size={20} />

                            Language

                        </div>

                    </div>

                </div>



                {/* RIGHT CONTENT */}

                <div className="col-lg-8 mb-4">

                    <div

                        className="p-5"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "rgba(15,23,42,0.8)"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(12px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >



                        {/* TITLE */}

                        <h3

                            className="fw-bold mb-4"

                            style={{

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            Profile Information

                        </h3>



                        {/* NAME */}

                        <div className="mb-4">

                            <label

                                className="mb-2 fw-semibold"

                                style={{
                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a"
                                }}
                            >

                                Full Name

                            </label>



                            <div className="position-relative">

                                <User

                                    size={18}

                                    style={{

                                        position: "absolute",

                                        top: "20px",

                                        left: "15px",

                                        color: "#64748b"

                                    }}
                                />



                                <input

                                    type="text"

                                    value={name}

                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }

                                    className="form-control border-0"

                                    style={{

                                        height: "60px",

                                        borderRadius: "18px",

                                        paddingLeft: "45px",

                                        background:
                                            darkMode
                                                ? "#1e293b"
                                                : "#f8fafc",

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                />

                            </div>

                        </div>



                        {/* EMAIL */}

                        <div className="mb-4">

                            <label

                                className="mb-2 fw-semibold"

                                style={{
                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a"
                                }}
                            >

                                Email Address

                            </label>



                            <div className="position-relative">

                                <Mail

                                    size={18}

                                    style={{

                                        position: "absolute",

                                        top: "20px",

                                        left: "15px",

                                        color: "#64748b"

                                    }}
                                />



                                <input

                                    type="email"

                                    value={email}

                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }

                                    className="form-control border-0"

                                    style={{

                                        height: "60px",

                                        borderRadius: "18px",

                                        paddingLeft: "45px",

                                        background:
                                            darkMode
                                                ? "#1e293b"
                                                : "#f8fafc",

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                />

                            </div>

                        </div>



                        {/* PASSWORD */}

                        <div className="mb-4">

                            <label

                                className="mb-2 fw-semibold"

                                style={{
                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a"
                                }}
                            >

                                Password

                            </label>



                            <div className="position-relative">

                                <KeyRound

                                    size={18}

                                    style={{

                                        position: "absolute",

                                        top: "20px",

                                        left: "15px",

                                        color: "#64748b"

                                    }}
                                />



                                <input

                                    type="password"

                                    value={password}

                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }

                                    className="form-control border-0"

                                    style={{

                                        height: "60px",

                                        borderRadius: "18px",

                                        paddingLeft: "45px",

                                        background:
                                            darkMode
                                                ? "#1e293b"
                                                : "#f8fafc",

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                />

                            </div>

                        </div>



                        {/* SECURITY BOX */}

                        <div

                            className="p-4 mt-4"

                            style={{

                                borderRadius: "25px",

                                background:
                                    darkMode
                                        ? "#1e293b"
                                        : "#f8fafc"

                            }}
                        >

                            <div className="d-flex align-items-center gap-3">

                                <Lock color="#22c55e" />

                                <div>

                                    <h5

                                        className="fw-bold m-0"

                                        style={{
                                            color:
                                                darkMode
                                                    ? "white"
                                                    : "#0f172a"
                                        }}
                                    >

                                        Security Status

                                    </h5>

                                    <p
                                        className="m-0 mt-1"

                                        style={{
                                            color: "#64748b"
                                        }}
                                    >

                                        Your account is fully protected.

                                    </p>

                                </div>

                            </div>

                        </div>



                        {/* SAVE BUTTON */}

                        <button

                            className="btn mt-4 px-5 py-3"

                            style={{

                                borderRadius: "18px",

                                background:
                                    "linear-gradient(to right,#2563eb,#3b82f6)",

                                color: "white",

                                border: "none",

                                fontWeight: "600"

                            }}
                        >

                            <Save
                                size={18}
                                className="me-2"
                            />

                            Save Changes

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Settings