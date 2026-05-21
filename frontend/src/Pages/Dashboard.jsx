/*
========================================
IMPORTS
========================================
*/

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
} from "lucide-react"



/*
========================================
DASHBOARD COMPONENT
========================================
*/

const Dashboard = () => {

    /*
    ========================================
    NAVIGATION
    ========================================
    */

    const navigate = useNavigate()



    /*
    ========================================
    DARK MODE STATE
    ========================================
    */

    const [darkMode, setDarkMode] = useState(false)



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
        MAIN CONTAINER
        ========================================
        */

        <div
            className="d-flex"
            style={{
                minHeight: "100vh",
                background: darkMode
                    ? "#020617"
                    : "#f1f5f9"
            }}
        >



            {/*
            ========================================
            SIDEBAR
            ========================================
            */}

            <div
                style={{
                    width: "280px",
                    background: darkMode
                        ? "#0f172a"
                        : "white",
                    padding: "30px",
                    borderRight: darkMode
                        ? "1px solid #1e293b"
                        : "1px solid #e2e8f0"
                }}
            >



                {/* LOGO */}

                <div className="d-flex align-items-center gap-3 mb-5">

                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            width: "55px",
                            height: "55px",
                            borderRadius: "18px",
                            background:
                                "linear-gradient(to right,#2563eb,#3b82f6)"
                        }}
                    >

                        <LayoutDashboard
                            color="white"
                            size={28}
                        />

                    </div>

                    <div>

                        <h3
                            className="fw-bold m-0"
                            style={{
                                color: darkMode
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

                            Admin Panel

                        </p>

                    </div>

                </div>



                {/* MENU */}

                <div className="d-flex flex-column gap-3">



                    {/* DASHBOARD */}

                    <button
                        className="btn text-start d-flex align-items-center gap-3"
                        style={{
                            background:
                                "linear-gradient(to right,#2563eb,#3b82f6)",
                            color: "white",
                            padding: "15px",
                            borderRadius: "18px",
                            border: "none",
                            fontWeight: "600"
                        }}
                    >

                        <LayoutDashboard size={20} />

                        Dashboard

                    </button>



                    {/* CUSTOMERS */}

                    <button
                        onClick={() => navigate("/customers")}
                        className="btn text-start d-flex align-items-center gap-3"
                        style={{
                            background: darkMode
                                ? "#1e293b"
                                : "#f8fafc",
                            color: darkMode
                                ? "white"
                                : "#0f172a",
                            padding: "15px",
                            borderRadius: "18px",
                            border: "none",
                            fontWeight: "600"
                        }}
                    >

                        <Users size={20} />

                        Customers

                    </button>



                    {/* SETTINGS */}

                    <button
                        className="btn text-start d-flex align-items-center gap-3"
                        style={{
                            background: darkMode
                                ? "#1e293b"
                                : "#f8fafc",
                            color: darkMode
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



                {/* BOTTOM CARD */}

                <div
                    className="mt-5 p-4"
                    style={{
                        borderRadius: "25px",
                        background:
                            "linear-gradient(to right,#0f172a,#1e293b)"
                    }}
                >

                    <h5
                        className="fw-bold"
                        style={{
                            color: "white"
                        }}
                    >

                        Upgrade Plan 🚀

                    </h5>

                    <p
                        style={{
                            color: "#cbd5e1",
                            fontSize: "14px"
                        }}
                    >

                        Unlock premium features and analytics dashboard.

                    </p>

                    <button
                        className="btn w-100 mt-2"
                        style={{
                            background: "white",
                            color: "#0f172a",
                            borderRadius: "14px",
                            fontWeight: "600"
                        }}
                    >

                        Upgrade

                    </button>

                </div>

            </div>





            {/*
            ========================================
            RIGHT CONTENT
            ========================================
            */}

            <div
                className="flex-grow-1 p-4"
            >



                {/*
                ========================================
                TOP NAVBAR
                ========================================
                */}

                <div
                    className="d-flex justify-content-between align-items-center mb-4"
                >



                    {/* SEARCH BAR */}

                    <div
                        className="position-relative"
                        style={{
                            width: "350px"
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
                            placeholder="Search..."
                            className="form-control border-0"
                            style={{
                                background: darkMode
                                    ? "#0f172a"
                                    : "white",
                                color: darkMode
                                    ? "white"
                                    : "#0f172a",
                                borderRadius: "18px",
                                padding: "14px 14px 14px 45px",
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
                                background: darkMode
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



                        {/* PROFILE */}

                        <div
                            className="d-flex align-items-center gap-3 px-3 py-2"
                            style={{
                                background: darkMode
                                    ? "#0f172a"
                                    : "white",
                                borderRadius: "18px",
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"
                            }}
                        >

                            <img
                                src="https://i.pravatar.cc/150?img=12"
                                alt=""
                                style={{
                                    width: "45px",
                                    height: "45px",
                                    borderRadius: "50%"
                                }}
                            />

                            <div>

                                <h6
                                    className="fw-bold m-0"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "#0f172a"
                                    }}
                                >

                                    Admin

                                </h6>

                                <p
                                    className="m-0"
                                    style={{
                                        color: "#64748b",
                                        fontSize: "13px"
                                    }}
                                >

                                    Administrator

                                </p>

                            </div>

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





                {/*
                ========================================
                HERO SECTION
                ========================================
                */}

                <div className="row mb-4">



                    {/* LEFT HERO */}

                    <div className="col-lg-8 mb-4">

                        <div
                            className="p-5 position-relative overflow-hidden"
                            style={{
                                borderRadius: "35px",
                                background:
                                    "linear-gradient(to right,#0f172a,#1e293b)",
                                minHeight: "300px"
                            }}
                        >



                            {/* CIRCLE */}

                            <div
                                style={{
                                    position: "absolute",
                                    width: "350px",
                                    height: "350px",
                                    borderRadius: "50%",
                                    background:
                                        "rgba(255,255,255,0.05)",
                                    top: "-100px",
                                    right: "-100px"
                                }}
                            ></div>



                            <h1
                                className="fw-bold"
                                style={{
                                    color: "white",
                                    fontSize: "60px",
                                    position: "relative"
                                }}
                            >

                                CRM Dashboard

                            </h1>



                            <p
                                className="mt-4"
                                style={{
                                    color: "#cbd5e1",
                                    maxWidth: "650px",
                                    lineHeight: "35px",
                                    fontSize: "18px",
                                    position: "relative"
                                }}
                            >

                                Manage customers, monitor projects,
                                track productivity and improve your
                                business workflow with modern CRM
                                analytics dashboard.

                            </p>



                            <button
                                onClick={() => navigate("/customers")}
                                className="btn mt-4 px-4 py-3"
                                style={{
                                    borderRadius: "18px",
                                    background: "white",
                                    color: "#0f172a",
                                    fontWeight: "700",
                                    border: "none",
                                    position: "relative"
                                }}
                            >

                                Open Customers

                            </button>

                        </div>

                    </div>



                    {/* RIGHT ANALYTICS */}

                    <div className="col-lg-4 mb-4">

                        <div
                            className="p-4 h-100"
                            style={{
                                borderRadius: "35px",
                                background: darkMode
                                    ? "#0f172a"
                                    : "white",
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"
                            }}
                        >

                            <div className="d-flex justify-content-between">

                                <h5
                                    className="fw-bold"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "#0f172a"
                                    }}
                                >

                                    Revenue

                                </h5>

                                <ArrowUpRight
                                    color="#22c55e"
                                />

                            </div>



                            <div className="mt-5 text-center">

                                <TrendingUp
                                    size={75}
                                    color="#22c55e"
                                />

                                <h1
                                    className="fw-bold mt-3"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "#0f172a"
                                    }}
                                >

                                    +28%

                                </h1>

                                <p
                                    style={{
                                        color: "#64748b"
                                    }}
                                >

                                    Increased productivity

                                </p>

                            </div>

                        </div>

                    </div>

                </div>





                {/*
                ========================================
                STATS SECTION
                ========================================
                */}

                <div className="row">



                    {/* CARD 1 */}

                    <div className="col-md-4 mb-4">

                        <div
                            className="p-4"
                            style={{
                                borderRadius: "28px",
                                background: darkMode
                                    ? "#0f172a"
                                    : "white",
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"
                            }}
                        >

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        style={{
                                            color: "#64748b"
                                        }}
                                    >

                                        Total Customers

                                    </p>

                                    <h1
                                        className="fw-bold"
                                        style={{
                                            color: darkMode
                                                ? "white"
                                                : "#0f172a"
                                        }}
                                    >

                                        1,240

                                    </h1>

                                </div>

                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "20px",
                                        background:
                                            "linear-gradient(to right,#2563eb,#3b82f6)"
                                    }}
                                >

                                    <Users
                                        color="white"
                                        size={30}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* CARD 2 */}

                    <div className="col-md-4 mb-4">

                        <div
                            className="p-4"
                            style={{
                                borderRadius: "28px",
                                background: darkMode
                                    ? "#0f172a"
                                    : "white",
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"
                            }}
                        >

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        style={{
                                            color: "#64748b"
                                        }}
                                    >

                                        Active Projects

                                    </p>

                                    <h1
                                        className="fw-bold"
                                        style={{
                                            color: darkMode
                                                ? "white"
                                                : "#0f172a"
                                        }}
                                    >

                                        18

                                    </h1>

                                </div>

                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "20px",
                                        background:
                                            "linear-gradient(to right,#16a34a,#22c55e)"
                                    }}
                                >

                                    <FolderKanban
                                        color="white"
                                        size={30}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* CARD 3 */}

                    <div className="col-md-4 mb-4">

                        <div
                            className="p-4"
                            style={{
                                borderRadius: "28px",
                                background: darkMode
                                    ? "#0f172a"
                                    : "white",
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"
                            }}
                        >

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        style={{
                                            color: "#64748b"
                                        }}
                                    >

                                        Pending Tasks

                                    </p>

                                    <h1
                                        className="fw-bold"
                                        style={{
                                            color: darkMode
                                                ? "white"
                                                : "#0f172a"
                                        }}
                                    >

                                        08

                                    </h1>

                                </div>

                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "20px",
                                        background:
                                            "linear-gradient(to right,#f59e0b,#facc15)"
                                    }}
                                >

                                    <Clock3
                                        color="white"
                                        size={30}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>





                {/*
                ========================================
                ACTIVITY SECTION
                ========================================
                */}

                <div
                    className="p-4 mt-2"
                    style={{
                        borderRadius: "35px",
                        background: darkMode
                            ? "#0f172a"
                            : "white",
                        boxShadow:
                            "0 10px 30px rgba(0,0,0,0.08)"
                    }}
                >

                    <div className="d-flex align-items-center gap-3 mb-4">

                        <Activity color="#3b82f6" />

                        <h4
                            className="fw-bold m-0"
                            style={{
                                color: darkMode
                                    ? "white"
                                    : "#0f172a"
                            }}
                        >

                            Recent Activity

                        </h4>

                    </div>



                    {/* ACTIVITY 1 */}

                    <div
                        className="d-flex justify-content-between align-items-center py-3 border-bottom"
                        style={{
                            borderColor: darkMode
                                ? "#1e293b"
                                : "#e2e8f0"
                        }}
                    >

                        <div className="d-flex align-items-center gap-3">

                            <CheckCircle2
                                color="#22c55e"
                            />

                            <div>

                                <h6
                                    className="fw-bold m-0"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "#0f172a"
                                    }}
                                >

                                    New customer added

                                </h6>

                                <p
                                    className="m-0"
                                    style={{
                                        color: "#64748b"
                                    }}
                                >

                                    Today at 10:30 AM

                                </p>

                            </div>

                        </div>

                    </div>



                    {/* ACTIVITY 2 */}

                    <div
                        className="d-flex justify-content-between align-items-center py-3 border-bottom"
                        style={{
                            borderColor: darkMode
                                ? "#1e293b"
                                : "#e2e8f0"
                        }}
                    >

                        <div className="d-flex align-items-center gap-3">

                            <CheckCircle2
                                color="#3b82f6"
                            />

                            <div>

                                <h6
                                    className="fw-bold m-0"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "#0f172a"
                                    }}
                                >

                                    Project updated

                                </h6>

                                <p
                                    className="m-0"
                                    style={{
                                        color: "#64748b"
                                    }}
                                >

                                    Today at 12:45 PM

                                </p>

                            </div>

                        </div>

                    </div>



                    {/* ACTIVITY 3 */}

                    <div
                        className="d-flex justify-content-between align-items-center py-3"
                    >

                        <div className="d-flex align-items-center gap-3">

                            <CheckCircle2
                                color="#f59e0b"
                            />

                            <div>

                                <h6
                                    className="fw-bold m-0"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "#0f172a"
                                    }}
                                >

                                    Pending task reminder

                                </h6>

                                <p
                                    className="m-0"
                                    style={{
                                        color: "#64748b"
                                    }}
                                >

                                    Tomorrow at 09:00 AM

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Dashboard