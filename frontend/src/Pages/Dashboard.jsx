// IMPORTS

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import DarkModeToggle from "../components/DarkModeToggle"
import Sidebar from "../Components/Sidebar"

import {
    Bell,
    Search,
    LogOut
} from "lucide-react"

const Dashboard = () => {

    const navigate = useNavigate()

    const [darkMode, setDarkMode] = useState(false)

    const handleLogout = async () => {

        try {

            await fetch(
                "http://localhost:5000/api/user/logout",
                {
                    method: "POST",
                    credentials: "include"
                }
            )

            navigate("/")

        }

        catch (err) {

            console.log(err)

        }

    }

    return (

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

            {/* SIDEBAR COMPONENT */}
            <Sidebar darkMode={darkMode} />

            {/* RIGHT CONTENT */}
            <div
                className="flex-grow-1 p-4"
                style={{
                    marginLeft: "315px"
                }}
            >

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
                                        ? "#e9edf7"
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

                        <DarkModeToggle
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />

                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "16px",
                                background:
                                    darkMode
                                        ? "#dae1f3"
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

                       

                    </div>

                </div>

                {/* NINTE DASHBOARD CONTENT IVIDE VEKKUKA */}
{/* DASHBOARD CONTENT */}

<div className="row g-4">

    {/* TOTAL CUSTOMERS */}

    <div className="col-md-3">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h6 style={{ color: "#64748b" }}>
                Total Customers
            </h6>

            <h2 className="fw-bold">
                1,245
            </h2>

        </div>

    </div>

    {/* PROJECTS */}

    <div className="col-md-3">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h6 style={{ color: "#64748b" }}>
                Projects
            </h6>

            <h2 className="fw-bold">
                84
            </h2>

        </div>

    </div>

    {/* TASKS */}

    <div className="col-md-3">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h6 style={{ color: "#64748b" }}>
                Tasks
            </h6>

            <h2 className="fw-bold">
                231
            </h2>

        </div>

    </div>

    {/* REVENUE */}

    <div className="col-md-3">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h6 style={{ color: "#64748b" }}>
                Revenue
            </h6>

            <h2 className="fw-bold">
                ₹2.4L
            </h2>

        </div>

    </div>

{/* MODERN DASHBOARD SECTION */}

<div className="row g-4 mt-2">

    {/* RECENT ACTIVITY */}

    <div className="col-lg-6">

        <div
            className="p-4"
            style={{

                background: "white",

                borderRadius: "30px",

                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)"

            }}
        >

            <h5 className="fw-bold mb-4">
                Recent Activity
            </h5>

            <div className="d-flex flex-column gap-3">

                <div
                    className="p-3 d-flex justify-content-between"
                    style={{
                        background: "#f8fafc",
                        borderRadius: "18px"
                    }}
                >
                    <span>🎉 New Customer Added</span>
                    <span>2 min ago</span>
                </div>

                <div
                    className="p-3 d-flex justify-content-between"
                    style={{
                        background: "#f8fafc",
                        borderRadius: "18px"
                    }}
                >
                    <span>📁 Project Created</span>
                    <span>10 min ago</span>
                </div>

                <div
                    className="p-3 d-flex justify-content-between"
                    style={{
                        background: "#f8fafc",
                        borderRadius: "18px"
                    }}
                >
                    <span>✅ Task Completed</span>
                    <span>1 hour ago</span>
                </div>

            </div>

        </div>

    </div>



    {/* TEAM PERFORMANCE */}

    <div className="col-lg-6 ">

        <div
            className="p-4"
            style={{

                background:
                    "linear-gradient(to right,#2563eb,#3b82f6)",

                borderRadius: "30px",

                color: "white",

                minHeight: "100%"

            }}
        >

            <h5 className="fw-bold">
                Team Performance 🚀
            </h5>

            <h1
                className="fw-bold mt-4"
                style={{
                    fontSize: "55px"
                }}
            >
                94%
            </h1>

            <p>
                Productivity increased this month
            </p>

            <button
                className="btn mt-3"
                style={{

                    background: "white",

                    color: "#2563eb",

                    borderRadius: "15px",

                    fontWeight: "600"

                }}
            >
                View Report
            </button>

        </div>

    </div>

{/* PROJECT STATUS SECTION */}

<div className="row g-4 mt-1 ">

    <div className="col-lg-4">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h5 className="fw-bold mb-4">
                Ongoing Projects
            </h5>

            <h1
                className="fw-bold"
                style={{
                    color: "#2563eb",
                    fontSize: "55px"
                }}
            >
                24
            </h1>

            <p style={{ color: "#64748b" }}>
                Active projects running now
            </p>

        </div>

    </div>



    <div className="col-lg-4">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h5 className="fw-bold mb-4">
                Completed
            </h5>

            <h1
                className="fw-bold"
                style={{
                    color: "#22c55e",
                    fontSize: "55px"
                }}
            >
                118
            </h1>

            <p style={{ color: "#64748b" }}>
                Successfully completed
            </p>

        </div>

    </div>



    <div className="col-lg-4">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h5 className="fw-bold mb-4">
                Pending Tasks
            </h5>

            <h1
                className="fw-bold"
                style={{
                    color: "#f59e0b",
                    fontSize: "55px"
                }}
            >
                36
            </h1>

            <p style={{ color: "#64748b" }}>
                Waiting for completion
            </p>

        </div>

    </div>

</div>


{/* REVENUE + TEAM + NOTIFICATIONS */}

<div className="row g-4 mt-2">

    {/* REVENUE CARD */}

    <div className="col-lg-4">

        <div
            className="p-4"
            style={{
                background: "linear-gradient(to right,#22c55e,#16a34a)",
                borderRadius: "30px",
                color: "white"
            }}
        >

            <h5 className="fw-bold">
                Monthly Revenue 💰
            </h5>

            <h1
                className="fw-bold mt-3"
                style={{
                    fontSize: "50px"
                }}
            >
                ₹4.8L
            </h1>

            <p>
                +18% growth this month
            </p>

        </div>

    </div>

    {/* TEAM MEMBERS */}

    <div className="col-lg-4">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "30px",
                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h5 className="fw-bold mb-4">
                Team Members 👨‍💻
            </h5>

            <div className="d-flex align-items-center gap-3 mb-3">

                <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt=""
                    style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%"
                    }}
                />

                <div>
                    <h6 className="m-0 fw-bold">
                        John
                    </h6>
                    <small>Frontend Dev</small>
                </div>

            </div>

            <div className="d-flex align-items-center gap-3 mb-3">

                <img
                    src="https://i.pravatar.cc/100?img=2"
                    alt=""
                    style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%"
                    }}
                />

                <div>
                    <h6 className="m-0 fw-bold">
                        Sarah
                    </h6>
                    <small>UI Designer</small>
                </div>

            </div>

            <div className="d-flex align-items-center gap-3">

                <img
                    src="https://i.pravatar.cc/100?img=3"
                    alt=""
                    style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%"
                    }}
                />

                <div>
                    <h6 className="m-0 fw-bold">
                        David
                    </h6>
                    <small>Backend Dev</small>
                </div>

            </div>

        </div>

    </div>

    {/* NOTIFICATIONS */}

    <div className="col-lg-4">

        <div
            className="p-4"
            style={{
                background: "white",
                borderRadius: "30px",
                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)"
            }}
        >

            <h5 className="fw-bold mb-4">
                Notifications 🔔
            </h5>

            <div
                className="p-3 mb-3"
                style={{
                    background: "#f8fafc",
                    borderRadius: "15px"
                }}
            >
                New project assigned
            </div>

            <div
                className="p-3 mb-3"
                style={{
                    background: "#f8fafc",
                    borderRadius: "15px"
                }}
            >
                Customer meeting today
            </div>

            <div
                className="p-3"
                style={{
                    background: "#f8fafc",
                    borderRadius: "15px"
                }}
            >
                Revenue target achieved
            </div>

        </div>

    </div>

</div>



{/* UPCOMING MEETINGS */}

<div className="mt-4">

    <div
        className="p-4"
        style={{
            background: "white",
            borderRadius: "30px",
            boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)"
        }}
    >

        <h5 className="fw-bold mb-4">
            Upcoming Meetings 📅
        </h5>

        <div className="row g-3">

            <div className="col-md-4">

                <div
                    className="p-3"
                    style={{
                        background: "#f8fafc",
                        borderRadius: "20px"
                    }}
                >

                    <h6 className="fw-bold">
                        Client Meeting
                    </h6>

                    <p className="m-0">
                        Today - 11:00 AM
                    </p>

                </div>

            </div>

            <div className="col-md-4">

                <div
                    className="p-3"
                    style={{
                        background: "#f8fafc",
                        borderRadius: "20px"
                    }}
                >

                    <h6 className="fw-bold">
                        Team Standup
                    </h6>

                    <p className="m-0">
                        Tomorrow - 10:00 AM
                    </p>

                </div>

            </div>

            <div className="col-md-4">

                <div
                    className="p-3"
                    style={{
                        background: "#f8fafc",
                        borderRadius: "20px"
                    }}
                >

                    <h6 className="fw-bold">
                        Project Review
                    </h6>

                    <p className="m-0">
                        Friday - 3:00 PM
                    </p>

                </div>

            </div>

        </div>

    </div>

</div>

</div>

</div>

            </div>

        </div>

    )

}

export default Dashboard