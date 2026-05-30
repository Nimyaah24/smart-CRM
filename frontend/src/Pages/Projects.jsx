// IMPORTS

// react hooks
import { useState } from "react"

// route navigation
import { useNavigate } from "react-router-dom"

// dark mode component
import DarkModeToggle from "../components/DarkModeToggle"

// icons
import {
    FolderKanban,
    CalendarDays,
    CircleDollarSign,
    Pencil,
    Trash2,
    Plus,
    Search,
    ArrowLeft
}
from "lucide-react"



// PROJECTS COMPONENT

const Projects = () => {

    /*
    =====================================
    NAVIGATION
    =====================================
    */

    const navigate = useNavigate()



    /*
    =====================================
    DARK MODE STATE
    =====================================
    */

    const [darkMode, setDarkMode] = useState(false)



    /*
    =====================================
    SEARCH STATE
    =====================================
    */

    const [search, setSearch] = useState("")



    /*
    =====================================
    PROJECT STATE
    =====================================
    */

    const [projects, setProjects] = useState([

        {
            id: 1,
            title: "CRM Dashboard",
            budget: "$4,500",
            deadline: "25 May 2026",
            progress: 80,
            status: "In Progress"
        },

        {
            id: 2,
            title: "Ecommerce Website",
            budget: "$7,200",
            deadline: "12 June 2026",
            progress: 45,
            status: "Pending"
        },

        {
            id: 3,
            title: "School Management",
            budget: "$2,000",
            deadline: "03 July 2026",
            progress: 100,
            status: "Completed"
        }

    ])



    /*
    =====================================
    FILTER PROJECTS
    =====================================
    */

    const filteredProjects = projects.filter((item) =>

        item.title
            .toLowerCase()
            .includes(search.toLowerCase())

    )



    return (

        /*
        =====================================
        MAIN CONTAINER
        =====================================
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



            {/* TOP NAVBAR */}

            <div
                className="d-flex justify-content-between align-items-center mb-4 p-4"

                style={{

                    borderRadius: "28px",

                    background:
                        darkMode
                            ? "#0f172a"
                            : "white",

                    boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)"

                }}
            >

                {/* LEFT */}

                <div className="d-flex align-items-center gap-3">

                    {/* BACK BUTTON */}

                    <button
                        onClick={() => navigate("/dashboard")}

                        className="btn"

                        style={{

                            width: "50px",

                            height: "50px",

                            borderRadius: "15px",

                            background:
                                darkMode
                                    ? "#1e293b"
                                    : "#e2e8f0"

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

                            Projects

                        </h2>

                        <p
                            className="m-0 mt-1"

                            style={{
                                color: "#64748b"
                            }}
                        >

                            Manage all projects

                        </p>

                    </div>

                </div>



                {/* RIGHT */}

                <DarkModeToggle
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

            </div>



            {/* SEARCH + BUTTON */}

            <div className="row mb-4">

                {/* SEARCH */}

                <div className="col-lg-9 mb-3">

                    <div
                        className="d-flex align-items-center px-4"

                        style={{

                            height: "70px",

                            borderRadius: "22px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "white",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        <Search color="#64748b" />



                        <input
                            type="text"

                            placeholder="Search project..."

                            className="form-control border-0 shadow-none ms-3"

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                            style={{

                                background: "transparent",

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        />

                    </div>

                </div>



                {/* ADD BUTTON */}

                <div className="col-lg-3 mb-3">

                    <button
                        className="btn w-100 h-100"

                        style={{

                            borderRadius: "22px",

                            background:
                                "linear-gradient(to right,#2563eb,#3b82f6)",

                            color: "white",

                            border: "none",

                            fontWeight: "600"

                        }}
                    >

                        <Plus size={20} className="me-2" />

                        Add Project

                    </button>

                </div>

            </div>



            {/* PROJECT CARDS */}

            <div className="row">

                {filteredProjects.map((item) => (

                    <div
                        className="col-lg-4 mb-4"
                        key={item.id}
                    >

                        <div
                            className="p-4"

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

                            {/* TOP */}

                            <div className="d-flex justify-content-between align-items-center">

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

                                    <FolderKanban
                                        color="white"
                                        size={30}
                                    />

                                </div>



                                <div className="d-flex gap-2">

                                    {/* EDIT */}

                                    <button
                                        className="btn"

                                        style={{

                                            width: "45px",

                                            height: "45px",

                                            borderRadius: "14px",

                                            background: "#22c55e",

                                            color: "white"

                                        }}
                                    >

                                        <Pencil size={18} />

                                    </button>



                                    {/* DELETE */}

                                    <button
                                        className="btn"

                                        style={{

                                            width: "45px",

                                            height: "45px",

                                            borderRadius: "14px",

                                            background: "#ef4444",

                                            color: "white"

                                        }}
                                    >

                                        <Trash2 size={18} />

                                    </button>

                                </div>

                            </div>



                            {/* TITLE */}

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



                            {/* BUDGET */}

                            <div className="d-flex align-items-center gap-2 mt-3">

                                <CircleDollarSign
                                    size={18}
                                    color="#64748b"
                                />

                                <p
                                    className="m-0"

                                    style={{
                                        color: "#64748b"
                                    }}
                                >

                                    {item.budget}

                                </p>

                            </div>



                            {/* DEADLINE */}

                            <div className="d-flex align-items-center gap-2 mt-3">

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

                                    {item.deadline}

                                </p>

                            </div>



                            {/* PROGRESS */}

                            <div className="mt-4">

                                <div className="d-flex justify-content-between">

                                    <p
                                        style={{
                                            color: "#64748b"
                                        }}
                                    >

                                        Progress

                                    </p>

                                    <p
                                        style={{
                                            color: "#64748b"
                                        }}
                                    >

                                        {item.progress}%

                                    </p>

                                </div>



                                {/* BAR */}

                                <div
                                    style={{

                                        width: "100%",

                                        height: "10px",

                                        borderRadius: "20px",

                                        background:
                                            darkMode
                                                ? "#1e293b"
                                                : "#e2e8f0"

                                    }}
                                >

                                    <div
                                        style={{

                                            width:
                                                `${item.progress}%`,

                                            height: "100%",

                                            borderRadius: "20px",

                                            background:
                                                "linear-gradient(to right,#2563eb,#3b82f6)"

                                        }}
                                    />

                                </div>

                            </div>



                            {/* STATUS */}

                            <div className="mt-4">

                                <span
                                    style={{

                                        background:
                                            item.status === "Completed"
                                                ? "#22c55e"
                                                : item.status === "Pending"
                                                    ? "#f59e0b"
                                                    : "#2563eb",

                                        color: "white",

                                        padding: "8px 16px",

                                        borderRadius: "20px",

                                        fontSize: "13px"

                                    }}
                                >

                                    {item.status}

                                </span>

                            </div>


<div className="row mb-4">

    <div className="col-lg-3">
        <div className="p-4 bg-white rounded-5 shadow-sm">
            <h6>Total Projects</h6>
            <h2 className="fw-bold">84</h2>
        </div>
    </div>

    <div className="col-lg-3">
        <div className="p-4 bg-white rounded-5 shadow-sm">
            <h6>Completed</h6>
            <h2 className="fw-bold text-success">42</h2>
        </div>
    </div>

    <div className="col-lg-3">
        <div className="p-4 bg-white rounded-5 shadow-sm">
            <h6>Pending</h6>
            <h2 className="fw-bold text-warning">18</h2>
        </div>
    </div>

    <div className="col-lg-3">
        <div className="p-4 bg-white rounded-5 shadow-sm">
            <h6>Revenue</h6>
            <h2 className="fw-bold text-primary">$25K</h2>
        </div>
    </div>

</div>

                        </div>

                    </div>

                ))}

            </div>


{/* TEAM WORKING SECTION */}

<div className="mt-4">

    <div
        className="p-4"
        style={{
            background:
                "linear-gradient(to right,#2563eb,#3b82f6)",
            borderRadius: "30px",
            color: "white"
        }}
    >

        <h4 className="fw-bold">
            Team Working On Projects 👨‍💻
        </h4>

        <p>
            12 Developers currently active
        </p>

        <h1
            className="fw-bold"
            style={{
                fontSize: "60px"
            }}
        >
            92%
        </h1>

        <p>
            Overall productivity this month
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
            View Team Report
        </button>

    </div>

</div>

{/* RECENT ACTIVITY */}

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

        <h4 className="fw-bold mb-4">
            Recent Activity
        </h4>

        <div className="d-flex flex-column gap-3">

            <div
                className="p-3"
                style={{
                    background: "#f8fafc",
                    borderRadius: "18px"
                }}
            >
                🚀 Ecommerce Website deployed
            </div>

            <div
                className="p-3"
                style={{
                    background: "#f8fafc",
                    borderRadius: "18px"
                }}
            >
                📁 CRM Dashboard updated
            </div>

            <div
                className="p-3"
                style={{
                    background: "#f8fafc",
                    borderRadius: "18px"
                }}
            >
                ✅ School Management completed
            </div>

        </div>

    </div>

</div>

        </div>

    )

}

export default Projects