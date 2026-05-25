// IMPORTS

// react hooks
import { useState } from "react"

// route navigation
import { useNavigate } from "react-router-dom"

// dark mode component
import DarkModeToggle from "../components/DarkModeToggle"

// icons
import {
    LayoutDashboard,
    Users,
    FolderKanban,
    Clock3,
    TrendingUp,
    Bell,
    Activity,
    Search,
    Settings,
    LogOut,
    ArrowUpRight,
    CheckCircle2
}
from "lucide-react"



// DASHBOARD COMPONENT

const Dashboard = () => {

    /*
    =========================================
    NAVIGATION
    =========================================
    */

    const navigate = useNavigate()



    /*
    =========================================
    DARK MODE STATE
    =========================================
    */

    const [darkMode, setDarkMode] = useState(false)



    /*
    =========================================
    LOGOUT FUNCTION
    =========================================
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
        =========================================
        MAIN CONTAINER
        =========================================
        */

        <div
            className="d-flex"

            style={{

                minHeight: "100vh",

                background:
                    darkMode
                        ? "#020617"
                        : "#f1f5f9"

            }}
        >



            {/*
            =========================================
            SIDEBAR
            =========================================
            */}

            <div
                style={{

                    width: "280px",

                    minHeight: "100vh",

                    background:
                        darkMode
                            ? "#0f172a"
                            : "white",

                    padding: "25px",

                    borderRight:
                        darkMode
                            ? "1px solid #1e293b"
                            : "1px solid #e2e8f0",

                    position: "sticky",

                    top: "0"

                }}
            >

                {/* LOGO SECTION */}

                <div className="d-flex align-items-center gap-3 mb-5">

                    <div
                        className="d-flex justify-content-center align-items-center"

                        style={{

                            width: "60px",

                            height: "60px",

                            borderRadius: "20px",

                            background:
                                "linear-gradient(to right,#2563eb,#3b82f6)",

                            boxShadow:
                                "0 10px 25px rgba(37,99,235,0.4)"

                        }}
                    >

                        <LayoutDashboard
                            color="white"
                            size={30}
                        />

                    </div>



                    <div>

                        <h3
                            className="fw-bold m-0"

                            style={{
                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"
                            }}
                        >

                            Smart CRM

                        </h3>

                        <p
                            className="m-0"

                            style={{
                                color: "#64748b"
                            }}
                        >

                            Business Dashboard

                        </p>

                    </div>

                </div>



                {/* MENU TITLE */}

                <p
                    className="fw-bold text-uppercase"

                    style={{

                        color: "#64748b",

                        fontSize: "13px",

                        letterSpacing: "1px"

                    }}
                >

                    Main Menu

                </p>



                {/* MENU ITEMS */}

                <div className="d-flex flex-column gap-3 mt-3">

                    {/* DASHBOARD */}

                    <button
                        className="btn text-start d-flex align-items-center justify-content-between"

                        style={{

                            background:
                                "linear-gradient(to right,#2563eb,#3b82f6)",

                            color: "white",

                            padding: "16px",

                            borderRadius: "20px",

                            border: "none",

                            fontWeight: "600",

                            boxShadow:
                                "0 10px 25px rgba(37,99,235,0.3)"

                        }}
                    >

                        <div className="d-flex align-items-center gap-3">

                            <LayoutDashboard size={20} />

                            Dashboard

                        </div>

                        <ArrowUpRight size={18} />

                    </button>



                    {/* CUSTOMERS */}

                    <button
                        onClick={() => navigate("/customers")}

                        className="btn text-start d-flex align-items-center justify-content-between"

                        style={{

                            background:
                                darkMode
                                    ? "#1e293b"
                                    : "#f8fafc",

                            color:
                                darkMode
                                    ? "white"
                                    : "#0f172a",

                            padding: "16px",

                            borderRadius: "20px",

                            border: "none",

                            fontWeight: "600"

                        }}
                    >

                        <div className="d-flex align-items-center gap-3">

                            <Users size={20} />

                            Customers

                        </div>

                        <span
                            style={{

                                background:
                                    "linear-gradient(to right,#22c55e,#16a34a)",

                                color: "white",

                                padding: "4px 10px",

                                borderRadius: "20px",

                                fontSize: "12px"

                            }}
                        >

                            120

                        </span>

                    </button>



                  {/* PROJECTS */}

<button

    onClick={() => navigate("/projects")}

    className="btn text-start d-flex align-items-center gap-3"

    style={{

        background:
            darkMode
                ? "#1e293b"
                : "#f8fafc",

        color:
            darkMode
                ? "white"
                : "#0f172a",

        padding: "16px",

        borderRadius: "20px",

        border: "none",

        fontWeight: "600"

    }}
>

    <FolderKanban size={20} />

    Projects

</button>


{/* ANALYTICS */}

<button

    onClick={() => navigate("/analytics")}

    className="btn text-start d-flex align-items-center gap-3"

    style={{

        background:
            darkMode
                ? "#1e293b"
                : "#f8fafc",

        color:
            darkMode
                ? "white"
                : "#0f172a",

        padding: "16px",

        borderRadius: "20px",

        border: "none",

        fontWeight: "600"

    }}
>

    <TrendingUp size={20} />

    Analytics

</button>


{/* TASKS */}

<button

    onClick={() => navigate("/tasks")}

    className="btn text-start d-flex align-items-center gap-3"

    style={{

        background:
            darkMode
                ? "#1e293b"
                : "#f8fafc",

        color:
            darkMode
                ? "white"
                : "#0f172a",

        padding: "16px",

        borderRadius: "20px",

        border: "none",

        fontWeight: "600"

    }}
>

    <Clock3 size={20} />

    Tasks

</button>


{/* KANBAN */}

<button

    onClick={() => navigate("/kanban")}

    className="btn text-start d-flex align-items-center gap-3"

    style={{

        background:
            darkMode
                ? "#1e293b"
                : "#f8fafc",

        color:
            darkMode
                ? "white"
                : "#0f172a",

        padding: "16px",

        borderRadius: "20px",

        border: "none",

        fontWeight: "600"

    }}
>

    <FolderKanban size={20} />

    Kanban

</button>


{/* TEAM CHAT */}

<button

    onClick={() => navigate("/chat")}

    className="btn text-start d-flex align-items-center gap-3"

    style={{

        background:
            darkMode
                ? "#1e293b"
                : "#f8fafc",

        color:
            darkMode
                ? "white"
                : "#0f172a",

        padding: "16px",

        borderRadius: "20px",

        border: "none",

        fontWeight: "600"

    }}
>

    <Users size={20} />

    Team Chat

</button>
                 

              {/* SETTINGS */}
{/* SETTINGS */}
<button

    onClick={() => navigate("/settings")}

    className="btn text-start d-flex align-items-center gap-3"

    style={{

        background:
            darkMode
                ? "#1e293b"
                : "#f8fafc",

        color:
            darkMode
                ? "white"
                : "#0f172a",

        padding: "15px",

        borderRadius: "18px",

        border: "none",

        fontWeight: "600"

    }}

>

    <Settings size={20} />

    Settings

</button>
                </div>



                {/* ANALYTICS CARD */}

                <div
                    className="mt-5 p-4"

                    style={{

                        borderRadius: "30px",

                        background:
                            "linear-gradient(to right,#0f172a,#1e293b)",

                        position: "relative",

                        overflow: "hidden"

                    }}
                >

                    {/* BACKGROUND CIRCLE */}

                    <div
                        style={{

                            position: "absolute",

                            width: "150px",

                            height: "150px",

                            borderRadius: "50%",

                            background:
                                "rgba(255,255,255,0.05)",

                            top: "-50px",

                            right: "-50px"

                        }}
                    />



                    <h5
                        className="fw-bold position-relative"

                        style={{
                            color: "white"
                        }}
                    >

                        Premium Analytics 🚀

                    </h5>



                    <p
                        className="position-relative"

                        style={{

                            color: "#cbd5e1",

                            fontSize: "14px",

                            lineHeight: "25px"

                        }}
                    >

                        Unlock advanced CRM reports,
                        customer insights and business analytics.

                    </p>



                    <button
                        className="btn w-100 mt-3"

                        style={{

                            background: "white",

                            color: "#0f172a",

                            borderRadius: "16px",

                            fontWeight: "700",

                            border: "none",

                            height: "50px"

                        }}
                    >

                        Upgrade Now

                    </button>

                </div>



                {/* PROFILE SECTION */}

                <div
                    className="mt-4 p-3 d-flex align-items-center gap-3"

                    style={{

                        borderRadius: "22px",

                        background:
                            darkMode
                                ? "#1e293b"
                                : "#f8fafc"

                    }}
                >

                    <img
                        src="https://i.pravatar.cc/150?img=12"

                        alt="profile"

                        style={{

                            width: "55px",

                            height: "55px",

                            borderRadius: "50%"

                        }}
                    />



                    <div>

                        <h6
                            className="fw-bold m-0"

                            style={{

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            Admin User

                        </h6>

                        <p
                            className="m-0"

                            style={{

                                color: "#64748b",

                                fontSize: "13px"

                            }}
                        >

                            Super Administrator

                        </p>

                    </div>

                </div>

            </div>



            {/* RIGHT CONTENT */}

            <div className="flex-grow-1 p-4">

                {/* TOP NAVBAR */}

                <div className="d-flex justify-content-between align-items-center mb-4">

                    {/* SEARCH BAR */}

                    <div
                        className="position-relative"

                        style={{ width: "350px" }}
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

                            placeholder="Search..."

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



                    {/* RIGHT SIDE */}

                    <div className="d-flex align-items-center gap-3">

                        {/* DARK MODE */}

                        <DarkModeToggle
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />



                        {/* NOTIFICATION */}

                        <div
                            className="d-flex justify-content-center align-items-center"

                            style={{

                                width: "50px",

                                height: "50px",

                                borderRadius: "16px",

                                background:
                                    darkMode
                                        ? "#0f172a"
                                        : "white",

                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"

                            }}
                        >

                            <Bell
                                size={20}
                                color={
                                    darkMode
                                        ? "white"
                                        : "#0f172a"
                                }
                            />

                        </div>



                        {/* LOGOUT */}

                        <button
                            onClick={handleLogout}

                            className="btn"

                            style={{

                                width: "50px",

                                height: "50px",

                                borderRadius: "16px",

                                background:
                                    "linear-gradient(to right,#dc2626,#ef4444)",

                                color: "white",

                                border: "none"

                            }}
                        >

                            <LogOut size={20} />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Dashboard