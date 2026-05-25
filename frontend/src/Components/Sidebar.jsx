/*
========================================
IMPORTS
========================================
*/

// react router
import { useNavigate } from "react-router-dom"

// icons
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut
} from "lucide-react"



/*
========================================
SIDEBAR COMPONENT
========================================
*/

const Sidebar = ({ darkMode }) => {

    /*
    ========================================
    NAVIGATION
    ========================================
    */

    const navigate = useNavigate()



    /*
    ========================================
    LOGOUT FUNCTION
    ========================================
    */

    const handleLogout = async () => {

        try {

            // backend logout api
            await fetch(
                "http://localhost:5000/api/user/logout",
                {

                    method: "POST",

                    credentials: "include"

                }
            )

            // login page redirect
            navigate("/")

        }

        catch (err) {

            console.log(err)

        }

    }



    return (

        /*
        ========================================
        SIDEBAR CONTAINER
        ========================================
        */

        <div
            style={{

                width: "270px",

                minHeight: "100vh",

                background:
                    darkMode
                        ? "#0f172a"
                        : "white",

                position: "fixed",

                left: 0,

                top: 0,

                padding: "25px",

                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)",

                zIndex: 1000

            }}
        >



            {/*
            ========================================
            LOGO
            ========================================
            */}

            <div className="mb-5">

                <h2
                    className="fw-bold"

                    style={{

                        color:
                            darkMode
                                ? "white"
                                : "#0f172a"

                    }}
                >

                    Smart CRM

                </h2>

                <p
                    style={{

                        color:
                            darkMode
                                ? "#94a3b8"
                                : "#64748b"

                    }}
                >

                    Modern CRM System

                </p>

            </div>



            {/*
            ========================================
            MENU ITEMS
            ========================================
            */}

            <div className="d-flex flex-column gap-3">



                {/* DASHBOARD */}
                <button
                    onClick={() =>
                        navigate("/dashboard")
                    }

                    className="btn text-start p-3"

                    style={{

                        borderRadius: "18px",

                        background:
                            "linear-gradient(to right,#2563eb,#3b82f6)",

                        color: "white",

                        fontWeight: "600"

                    }}
                >

                    <LayoutDashboard
                        size={18}
                        className="me-2"
                    />

                    Dashboard

                </button>



                {/* CUSTOMERS */}
                <button
                    onClick={() =>
                        navigate("/customers")
                    }

                    className="btn text-start p-3"

                    style={{

                        borderRadius: "18px",

                        background:
                            darkMode
                                ? "#1e293b"
                                : "#f1f5f9",

                        color:
                            darkMode
                                ? "white"
                                : "#0f172a",

                        fontWeight: "600"

                    }}
                >

                    <Users
                        size={18}
                        className="me-2"
                    />

                    Customers

                </button>



                {/* SETTINGS */}
                <button
                    className="btn text-start p-3"

                    style={{

                        borderRadius: "18px",

                        background:
                            darkMode
                                ? "#1e293b"
                                : "#f1f5f9",

                        color:
                            darkMode
                                ? "white"
                                : "#0f172a",

                        fontWeight: "600"

                    }}
                >

                    <Settings
                        size={18}
                        className="me-2"
                    />

                    Settings

                </button>

            </div>



            {/*
            ========================================
            LOGOUT BUTTON
            ========================================
            */}

            <button
                onClick={handleLogout}

                className="btn w-100 mt-5"

                style={{

                    borderRadius: "18px",

                    background:
                        "linear-gradient(to right,#dc2626,#ef4444)",

                    color: "white",

                    padding: "14px",

                    border: "none",

                    fontWeight: "600"

                }}
            >

                <LogOut
                    size={18}
                    className="me-2"
                />

                Logout

            </button>

        </div>

    )

}

export default Sidebar