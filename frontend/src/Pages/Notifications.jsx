// ============================================
// IMPORTS
// ============================================

// react hooks
import { useState } from "react"

// router
import { useNavigate } from "react-router-dom"

// dark mode component
import DarkModeToggle from "../components/DarkModeToggle"

// icons
import {
    ArrowLeft,
    Bell,
    Search,
    CheckCircle2,
    AlertTriangle,
    MessageCircle,
    Clock3,
    Trash2
}
from "lucide-react"



// ============================================
// NOTIFICATIONS COMPONENT
// ============================================

const Notifications = () => {

    /*
    ============================================
    NAVIGATION
    ============================================
    */

    const navigate = useNavigate()



    /*
    ============================================
    DARK MODE STATE
    ============================================
    */

    const [darkMode, setDarkMode] = useState(false)



    /*
    ============================================
    NOTIFICATION DATA
    ============================================
    */

    const [notifications] = useState([

        {
            id: 1,
            title: "New Customer Added",
            message: "John added a new customer into CRM system.",
            time: "2 min ago",
            type: "success",
            unread: true
        },

        {
            id: 2,
            title: "Project Deadline Warning",
            message: "Dashboard redesign project deadline tomorrow.",
            time: "10 min ago",
            type: "warning",
            unread: true
        },

        {
            id: 3,
            title: "New Team Message",
            message: "Alex sent new message in team chat.",
            time: "25 min ago",
            type: "message",
            unread: false
        },

        {
            id: 4,
            title: "Task Completed",
            message: "Analytics module completed successfully.",
            time: "1 hour ago",
            type: "success",
            unread: false
        },

        {
            id: 5,
            title: "Server Activity",
            message: "System backup completed automatically.",
            time: "2 hours ago",
            type: "activity",
            unread: false
        }

    ])



    /*
    ============================================
    ICON FUNCTION
    ============================================
    */

    const notificationIcon = (type) => {

        if (type === "success") {

            return <CheckCircle2 color="#22c55e" />

        }

        else if (type === "warning") {

            return <AlertTriangle color="#f59e0b" />

        }

        else if (type === "message") {

            return <MessageCircle color="#2563eb" />

        }

        else {

            return <Clock3 color="#8b5cf6" />

        }

    }



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

                            Notifications Center

                        </h2>

                        <p
                            className="m-0 mt-1"

                            style={{
                                color: "#64748b"
                            }}
                        >

                            Realtime activity updates

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

                            placeholder="Search notifications..."

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

                </div>

            </div>



            {/* ============================================
            HERO CARD
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

                    Activity Feed

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

                    Track realtime activities, system updates and important alerts inside your CRM platform.

                </p>



                {/* BADGE */}

                <div

                    className="mt-4 d-inline-flex align-items-center gap-2 px-4 py-3"

                    style={{

                        borderRadius: "18px",

                        background:
                            "rgba(255,255,255,0.08)",

                        color: "white",

                        position: "relative"

                    }}
                >

                    <Bell size={18} />

                    2 Unread Notifications

                </div>

            </div>



            {/* ============================================
            NOTIFICATION LIST
            ============================================ */}

            <div>

                {

                    notifications.map((item) => (

                        <div

                            key={item.id}

                            className="p-4 mb-4 d-flex justify-content-between align-items-center"

                            style={{

                                borderRadius: "30px",

                                background:
                                    darkMode
                                        ? "rgba(15,23,42,0.8)"
                                        : "rgba(255,255,255,0.7)",

                                backdropFilter: "blur(10px)",

                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)",

                                transition: "0.3s",

                                border:
                                    item.unread
                                        ? "1px solid #2563eb"
                                        : "1px solid transparent"

                            }}
                        >



                            {/* LEFT */}

                            <div className="d-flex align-items-center gap-4">



                                {/* ICON */}

                                <div

                                    className="d-flex justify-content-center align-items-center"

                                    style={{

                                        width: "65px",

                                        height: "65px",

                                        borderRadius: "20px",

                                        background:
                                            darkMode
                                                ? "#1e293b"
                                                : "#f8fafc"

                                    }}
                                >

                                    {notificationIcon(item.type)}

                                </div>



                                {/* CONTENT */}

                                <div>

                                    <div className="d-flex align-items-center gap-2">

                                        <h5

                                            className="fw-bold m-0"

                                            style={{

                                                color:
                                                    darkMode
                                                        ? "white"
                                                        : "#0f172a"

                                            }}
                                        >

                                            {item.title}

                                        </h5>



                                        {/* UNREAD BADGE */}

                                        {

                                            item.unread && (

                                                <span

                                                    className="px-2 py-1"

                                                    style={{

                                                        borderRadius: "10px",

                                                        background: "#2563eb",

                                                        color: "white",

                                                        fontSize: "12px",

                                                        fontWeight: "600"

                                                    }}
                                                >

                                                    NEW

                                                </span>

                                            )

                                        }

                                    </div>



                                    <p

                                        className="mt-2 mb-2"

                                        style={{

                                            color: "#64748b",

                                            maxWidth: "700px"

                                        }}
                                    >

                                        {item.message}

                                    </p>



                                    {/* TIME */}

                                    <p

                                        className="m-0"

                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "14px"
                                        }}
                                    >

                                        {item.time}

                                    </p>

                                </div>

                            </div>



                            {/* RIGHT */}

                            <button

                                className="btn"

                                style={{

                                    width: "50px",

                                    height: "50px",

                                    borderRadius: "16px",

                                    background:
                                        darkMode
                                            ? "#1e293b"
                                            : "#f8fafc",

                                    border: "none"

                                }}
                            >

                                <Trash2 color="#ef4444" />

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default Notifications