// ============================================
// IMPORTS
// ============================================

// react hooks
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
    Plus,
    MoreVertical,
    CalendarDays,
    FolderKanban
}
from "lucide-react"



// ============================================
// KANBAN COMPONENT
// ============================================

const Kanban = () => {

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
    TASK DATA
    ============================================
    */

    const [todo] = useState([

        {
            id: 1,
            title: "Create Landing Page",
            priority: "High",
            date: "12 May"
        },

        {
            id: 2,
            title: "Fix Navbar UI",
            priority: "Medium",
            date: "14 May"
        }

    ])



    const [progress] = useState([

        {
            id: 3,
            title: "Analytics Dashboard",
            priority: "High",
            date: "18 May"
        },

        {
            id: 4,
            title: "Customer API",
            priority: "Low",
            date: "20 May"
        }

    ])



    const [completed] = useState([

        {
            id: 5,
            title: "Authentication System",
            priority: "Completed",
            date: "10 May"
        }

    ])



    /*
    ============================================
    PRIORITY COLORS
    ============================================
    */

    const priorityColor = (priority) => {

        if (priority === "High") {

            return "#ef4444"

        }

        else if (priority === "Medium") {

            return "#f59e0b"

        }

        else if (priority === "Low") {

            return "#22c55e"

        }

        else {

            return "#2563eb"

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

                            Kanban Workspace

                        </h2>

                        <p
                            className="m-0 mt-1"
                            style={{
                                color: "#64748b"
                            }}
                        >

                            Team productivity workflow

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

                            placeholder="Search task..."

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
            HERO CARD
            ============================================ */}

            <div className="p-5 mb-4 position-relative overflow-hidden"

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

                    Team Board

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

                    Manage project workflow, assign tasks and monitor progress using modern Kanban productivity system.

                </p>



                {/* BUTTON */}

                <button

                    className="btn mt-3 px-4 py-3"

                    style={{

                        borderRadius: "18px",

                        background: "white",

                        color: "#0f172a",

                        fontWeight: "700",

                        border: "none",

                        position: "relative"

                    }}
                >

                    <Plus size={18} className="me-2" />

                    Create Task

                </button>

            </div>



            {/* ============================================
            KANBAN BOARD
            ============================================ */}

            <div className="row">



                {/* TODO COLUMN */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(10px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        {/* TOP */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div className="d-flex align-items-center gap-2">

                                <div

                                    style={{

                                        width: "14px",

                                        height: "14px",

                                        borderRadius: "50%",

                                        background: "#ef4444"

                                    }}
                                />

                                <h4

                                    className="fw-bold m-0"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    Todo

                                </h4>

                            </div>



                            <span

                                className="px-3 py-2"

                                style={{

                                    borderRadius: "14px",

                                    background: "#ef4444",

                                    color: "white",

                                    fontWeight: "600"

                                }}
                            >

                                {todo.length}

                            </span>

                        </div>



                        {/* TASKS */}

                        {todo.map((item) => (

                            <div

                                key={item.id}

                                className="p-4 mb-3"

                                style={{

                                    borderRadius: "25px",

                                    background:
                                        darkMode
                                            ? "#1e293b"
                                            : "white",

                                    boxShadow:
                                        "0 10px 20px rgba(0,0,0,0.05)"

                                }}
                            >

                                {/* TOP */}

                                <div className="d-flex justify-content-between">

                                    <span

                                        className="px-3 py-2"

                                        style={{

                                            borderRadius: "14px",

                                            background:
                                                priorityColor(item.priority),

                                            color: "white",

                                            fontSize: "13px",

                                            fontWeight: "600"

                                        }}
                                    >

                                        {item.priority}

                                    </span>



                                    <MoreVertical
                                        color="#64748b"
                                    />

                                </div>



                                {/* TITLE */}

                                <h5

                                    className="fw-bold mt-4"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    {item.title}

                                </h5>



                                {/* FOOTER */}

                                <div className="d-flex justify-content-between align-items-center mt-4">

                                    <div className="d-flex align-items-center gap-2">

                                        <CalendarDays
                                            size={18}
                                            color="#64748b"
                                        />

                                        <p
                                            className="m-0"
                                            style={{
                                                color: "#64748b"
                                            }}
                                        >

                                            {item.date}

                                        </p>

                                    </div>



                                    {/* AVATARS */}

                                    <div className="d-flex">

                                        <img
                                            src="https://i.pravatar.cc/40?img=12"
                                            alt=""
                                            style={{
                                                width: "35px",
                                                height: "35px",
                                                borderRadius: "50%",
                                                border: "2px solid white"
                                            }}
                                        />

                                        <img
                                            src="https://i.pravatar.cc/40?img=22"
                                            alt=""
                                            style={{
                                                width: "35px",
                                                height: "35px",
                                                borderRadius: "50%",
                                                marginLeft: "-10px",
                                                border: "2px solid white"
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>



                {/* IN PROGRESS */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(10px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        {/* TOP */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div className="d-flex align-items-center gap-2">

                                <div

                                    style={{

                                        width: "14px",

                                        height: "14px",

                                        borderRadius: "50%",

                                        background: "#2563eb"

                                    }}
                                />

                                <h4

                                    className="fw-bold m-0"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    In Progress

                                </h4>

                            </div>



                            <span

                                className="px-3 py-2"

                                style={{

                                    borderRadius: "14px",

                                    background: "#2563eb",

                                    color: "white",

                                    fontWeight: "600"

                                }}
                            >

                                {progress.length}

                            </span>

                        </div>



                        {/* TASKS */}

                        {progress.map((item) => (

                            <div

                                key={item.id}

                                className="p-4 mb-3"

                                style={{

                                    borderRadius: "25px",

                                    background:
                                        darkMode
                                            ? "#1e293b"
                                            : "white",

                                    boxShadow:
                                        "0 10px 20px rgba(0,0,0,0.05)"

                                }}
                            >

                                <div className="d-flex justify-content-between">

                                    <span

                                        className="px-3 py-2"

                                        style={{

                                            borderRadius: "14px",

                                            background:
                                                priorityColor(item.priority),

                                            color: "white",

                                            fontSize: "13px",

                                            fontWeight: "600"

                                        }}
                                    >

                                        {item.priority}

                                    </span>



                                    <MoreVertical
                                        color="#64748b"
                                    />

                                </div>



                                <h5

                                    className="fw-bold mt-4"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    {item.title}

                                </h5>



                                <div className="d-flex justify-content-between align-items-center mt-4">

                                    <div className="d-flex align-items-center gap-2">

                                        <CalendarDays
                                            size={18}
                                            color="#64748b"
                                        />

                                        <p
                                            className="m-0"
                                            style={{
                                                color: "#64748b"
                                            }}
                                        >

                                            {item.date}

                                        </p>

                                    </div>



                                    <img
                                        src="https://i.pravatar.cc/40?img=18"
                                        alt=""
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                            borderRadius: "50%"
                                        }}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>



                {/* COMPLETED */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(10px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        {/* TOP */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div className="d-flex align-items-center gap-2">

                                <div

                                    style={{

                                        width: "14px",

                                        height: "14px",

                                        borderRadius: "50%",

                                        background: "#22c55e"

                                    }}
                                />

                                <h4

                                    className="fw-bold m-0"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    Completed

                                </h4>

                            </div>



                            <span

                                className="px-3 py-2"

                                style={{

                                    borderRadius: "14px",

                                    background: "#22c55e",

                                    color: "white",

                                    fontWeight: "600"

                                }}
                            >

                                {completed.length}

                            </span>

                        </div>



                        {/* TASK */}

                        {completed.map((item) => (

                            <div

                                key={item.id}

                                className="p-4"

                                style={{

                                    borderRadius: "25px",

                                    background:
                                        darkMode
                                            ? "#1e293b"
                                            : "white",

                                    boxShadow:
                                        "0 10px 20px rgba(0,0,0,0.05)"

                                }}
                            >

                                <div className="d-flex justify-content-between">

                                    <span

                                        className="px-3 py-2"

                                        style={{

                                            borderRadius: "14px",

                                            background: "#22c55e",

                                            color: "white",

                                            fontSize: "13px",

                                            fontWeight: "600"

                                        }}
                                    >

                                        Completed

                                    </span>



                                    <MoreVertical
                                        color="#64748b"
                                    />

                                </div>



                                <h5

                                    className="fw-bold mt-4"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    {item.title}

                                </h5>



                                <div className="d-flex justify-content-between align-items-center mt-4">

                                    <div className="d-flex align-items-center gap-2">

                                        <CalendarDays
                                            size={18}
                                            color="#64748b"
                                        />

                                        <p
                                            className="m-0"
                                            style={{
                                                color: "#64748b"
                                            }}
                                        >

                                            {item.date}

                                        </p>

                                    </div>



                                    <img
                                        src="https://i.pravatar.cc/40?img=30"
                                        alt=""
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                            borderRadius: "50%"
                                        }}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Kanban