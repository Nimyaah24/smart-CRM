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
    CheckCircle2,
    Clock3,
    Circle,
    Trash2,
    Pencil,
    FolderKanban
}
from "lucide-react"



// ============================================
// TASK COMPONENT
// ============================================

const Tasks = () => {

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
    TASK STATE
    ============================================
    */

    const [tasks, setTasks] = useState([

        {
            id: 1,
            title: "Design CRM Dashboard",
            priority: "High",
            status: "Pending"
        },

        {
            id: 2,
            title: "Fix Authentication",
            priority: "Medium",
            status: "Completed"
        },

        {
            id: 3,
            title: "Create Analytics Page",
            priority: "High",
            status: "Running"
        }

    ])



    /*
    ============================================
    INPUT STATE
    ============================================
    */

    const [taskInput, setTaskInput] = useState("")



    /*
    ============================================
    ADD TASK
    ============================================
    */

    const addTask = () => {

        // empty validation
        if (!taskInput) return



        // new task object
        const newTask = {

            id: Date.now(),

            title: taskInput,

            priority: "Low",

            status: "Pending"

        }



        // add new task
        setTasks([...tasks, newTask])



        // clear input
        setTaskInput("")

    }



    /*
    ============================================
    DELETE TASK
    ============================================
    */

    const deleteTask = (id) => {

        // remove selected task
        const filtered = tasks.filter(
            (item) => item.id !== id
        )

        // update state
        setTasks(filtered)

    }



    /*
    ============================================
    STATUS COLORS
    ============================================
    */

    const statusColor = (status) => {

        if (status === "Completed") {

            return "#22c55e"

        }

        else if (status === "Running") {

            return "#3b82f6"

        }

        else {

            return "#f59e0b"

        }

    }



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

        else {

            return "#22c55e"

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

                {/* LEFT SIDE */}

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

                            Task Manager

                        </h2>

                        <p
                            className="m-0 mt-1"
                            style={{
                                color: "#64748b"
                            }}
                        >

                            Manage daily workflow

                        </p>

                    </div>

                </div>



                {/* RIGHT SIDE */}

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

            <div className="row mb-4">

                <div className="col-lg-8 mb-4">

                    <div

                        className="p-5 position-relative overflow-hidden"

                        style={{

                            borderRadius: "35px",

                            background:
                                "linear-gradient(to right,#0f172a,#1e293b)",

                            minHeight: "250px"

                        }}
                    >

                        {/* BACKGROUND */}

                        <div

                            style={{

                                position: "absolute",

                                width: "350px",

                                height: "350px",

                                borderRadius: "50%",

                                background:
                                    "rgba(255,255,255,0.05)",

                                top: "-100px",

                                right: "-80px"

                            }}
                        />



                        {/* TITLE */}

                        <h1

                            className="fw-bold"

                            style={{

                                color: "white",

                                fontSize: "55px",

                                position: "relative"

                            }}
                        >

                            Productivity Tasks

                        </h1>



                        {/* DESCRIPTION */}

                        <p

                            className="mt-4"

                            style={{

                                color: "#cbd5e1",

                                fontSize: "18px",

                                lineHeight: "34px",

                                maxWidth: "650px",

                                position: "relative"

                            }}
                        >

                            Organize tasks, track project progress and improve workflow using modern productivity dashboard.

                        </p>

                    </div>

                </div>



                {/* RIGHT CARD */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4 h-100"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "white",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center">

                            <h5

                                className="fw-bold"

                                style={{

                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a"

                                }}
                            >

                                Task Progress

                            </h5>



                            <FolderKanban color="#2563eb" />

                        </div>



                        <div className="mt-5 text-center">

                            <h1

                                className="fw-bold"

                                style={{

                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a",

                                    fontSize: "60px"

                                }}
                            >

                                78%

                            </h1>

                            <p style={{ color: "#64748b" }}>
                                Completed Tasks
                            </p>

                        </div>

                    </div>

                </div>

            </div>



            {/* ============================================
            ADD TASK SECTION
            ============================================ */}

            <div

                className="p-4 mb-4"

                style={{

                    borderRadius: "30px",

                    background:
                        darkMode
                            ? "#0f172a"
                            : "white",

                    boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)"

                }}
            >

                <div className="row align-items-center">

                    {/* INPUT */}

                    <div className="col-lg-10 mb-3">

                        <input

                            type="text"

                            placeholder="Enter new task..."

                            className="form-control"

                            value={taskInput}

                            onChange={(e) =>
                                setTaskInput(e.target.value)
                            }

                            style={{

                                height: "60px",

                                borderRadius: "18px"

                            }}
                        />

                    </div>



                    {/* BUTTON */}

                    <div className="col-lg-2 mb-3">

                        <button

                            onClick={addTask}

                            className="btn w-100 h-100"

                            style={{

                                height: "60px",

                                borderRadius: "18px",

                                background:
                                    "linear-gradient(to right,#2563eb,#3b82f6)",

                                color: "white",

                                border: "none",

                                fontWeight: "600"

                            }}
                        >

                            <Plus size={18} className="me-2" />

                            Add

                        </button>

                    </div>

                </div>

            </div>



            {/* ============================================
            TASK CARDS
            ============================================ */}

            <div className="row">

                {tasks.map((item) => (

                    <div
                        className="col-lg-4 mb-4"
                        key={item.id}
                    >

                        <div

                            className="p-4 h-100"

                            style={{

                                borderRadius: "30px",

                                background:
                                    darkMode
                                        ? "#0f172a"
                                        : "rgba(255,255,255,0.8)",

                                backdropFilter: "blur(10px)",

                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"

                            }}
                        >

                            {/* TOP */}

                            <div className="d-flex justify-content-between align-items-center">

                                {/* STATUS */}

                                <div

                                    className="px-3 py-2"

                                    style={{

                                        borderRadius: "14px",

                                        background:
                                            statusColor(item.status),

                                        color: "white",

                                        fontWeight: "600",

                                        fontSize: "14px"

                                    }}
                                >

                                    {item.status}

                                </div>



                                {/* ACTIONS */}

                                <div className="d-flex gap-2">

                                    <button

                                        className="btn"

                                        style={{

                                            width: "42px",

                                            height: "42px",

                                            borderRadius: "14px",

                                            background: "#22c55e",

                                            color: "white"

                                        }}
                                    >

                                        <Pencil size={18} />

                                    </button>



                                    <button

                                        onClick={() =>
                                            deleteTask(item.id)
                                        }

                                        className="btn"

                                        style={{

                                            width: "42px",

                                            height: "42px",

                                            borderRadius: "14px",

                                            background: "#ef4444",

                                            color: "white"

                                        }}
                                    >

                                        <Trash2 size={18} />

                                    </button>

                                </div>

                            </div>



                            {/* TASK TITLE */}

                            <h3

                                className="fw-bold mt-4"

                                style={{

                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a"

                                }}
                            >

                                {item.title}

                            </h3>



                            {/* PRIORITY */}

                            <div className="mt-4 d-flex align-items-center gap-2">

                                <Circle
                                    size={12}
                                    fill={priorityColor(item.priority)}
                                    color={priorityColor(item.priority)}
                                />

                                <p

                                    className="m-0"

                                    style={{

                                        color:
                                            darkMode
                                                ? "#cbd5e1"
                                                : "#334155"

                                    }}
                                >

                                    {item.priority} Priority

                                </p>

                            </div>



                            {/* FOOTER */}

                            <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">

                                <div className="d-flex align-items-center gap-2">

                                    <Clock3
                                        size={18}
                                        color="#64748b"
                                    />

                                    <p
                                        className="m-0"
                                        style={{
                                            color: "#64748b"
                                        }}
                                    >

                                        Today

                                    </p>

                                </div>



                                <CheckCircle2
                                    color="#22c55e"
                                />

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default Tasks