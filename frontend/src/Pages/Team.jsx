// ============================================
// IMPORTS
// ============================================

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
    MoreVertical,
    Mail,
    Phone,
    Activity,
    Users,
    CheckCircle2,
    TrendingUp
}
from "lucide-react"



// ============================================
// TEAM COMPONENT
// ============================================

const Team = () => {

    /*
    ============================================
    NAVIGATION
    ============================================
    */

    const navigate = useNavigate()



    /*
    ============================================
    DARK MODE
    ============================================
    */

    const [darkMode, setDarkMode] = useState(false)



    /*
    ============================================
    TEAM MEMBERS DATA
    ============================================
    */

    const teamMembers = [

        {
            id: 1,
            name: "John Doe",
            role: "UI/UX Designer",
            status: "Online",
            email: "john@example.com",
            phone: "+91 9876543210",
            image: "https://i.pravatar.cc/150?img=12"
        },

        {
            id: 2,
            name: "Sarah Wilson",
            role: "Frontend Developer",
            status: "Busy",
            email: "sarah@example.com",
            phone: "+91 9876543211",
            image: "https://i.pravatar.cc/150?img=22"
        },

        {
            id: 3,
            name: "Michael Lee",
            role: "Backend Developer",
            status: "Online",
            email: "michael@example.com",
            phone: "+91 9876543212",
            image: "https://i.pravatar.cc/150?img=33"
        },

        {
            id: 4,
            name: "Emma Watson",
            role: "Project Manager",
            status: "Offline",
            email: "emma@example.com",
            phone: "+91 9876543213",
            image: "https://i.pravatar.cc/150?img=44"
        }

    ]



    /*
    ============================================
    STATUS COLORS
    ============================================
    */

    const statusColor = (status) => {

        if (status === "Online") {

            return "#22c55e"

        }

        else if (status === "Busy") {

            return "#f59e0b"

        }

        else {

            return "#64748b"

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

                            Team Workspace

                        </h2>

                        <p
                            className="m-0 mt-1"

                            style={{
                                color: "#64748b"
                            }}
                        >

                            Manage your professional team

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

                            placeholder="Search members..."

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

                    minHeight: "260px"

                }}
            >

                {/* BACKGROUND CIRCLE */}

                <div

                    style={{

                        position: "absolute",

                        width: "420px",

                        height: "420px",

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

                    Team Collaboration

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

                    Monitor team performance, manage employees and improve workflow using modern collaboration dashboard.

                </p>

            </div>



            {/* ============================================
            TOP STATS
            ============================================ */}

            <div className="row mb-4">



                {/* CARD 1 */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "30px",

                            background:
                                "linear-gradient(to right,#2563eb,#3b82f6)",

                            color: "white",

                            boxShadow:
                                "0 10px 30px rgba(37,99,235,0.3)"

                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <p>Total Members</p>

                                <h1 className="fw-bold">
                                    24
                                </h1>

                            </div>

                            <Users size={50} />

                        </div>

                    </div>

                </div>



                {/* CARD 2 */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "30px",

                            background:
                                "linear-gradient(to right,#16a34a,#22c55e)",

                            color: "white",

                            boxShadow:
                                "0 10px 30px rgba(34,197,94,0.3)"

                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <p>Active Today</p>

                                <h1 className="fw-bold">
                                    18
                                </h1>

                            </div>

                            <Activity size={50} />

                        </div>

                    </div>

                </div>



                {/* CARD 3 */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "30px",

                            background:
                                "linear-gradient(to right,#7c3aed,#8b5cf6)",

                            color: "white",

                            boxShadow:
                                "0 10px 30px rgba(124,58,237,0.3)"

                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <p>Performance</p>

                                <h1 className="fw-bold">
                                    92%
                                </h1>

                            </div>

                            <TrendingUp size={50} />

                        </div>

                    </div>

                </div>

            </div>



            {/* ============================================
            TEAM MEMBERS
            ============================================ */}

            <div className="row">



                {teamMembers.map((member) => (

                    <div

                        className="col-lg-3 col-md-6 mb-4"

                        key={member.id}
                    >

                        <div

                            className="p-4 h-100"

                            style={{

                                borderRadius: "35px",

                                background:
                                    darkMode
                                        ? "rgba(15,23,42,0.8)"
                                        : "rgba(255,255,255,0.7)",

                                backdropFilter: "blur(12px)",

                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)",

                                transition: "0.3s",

                                cursor: "pointer"

                            }}
                        >



                            {/* TOP */}

                            <div className="d-flex justify-content-between">

                                {/* STATUS */}

                                <div

                                    className="px-3 py-2"

                                    style={{

                                        borderRadius: "14px",

                                        background:
                                            statusColor(member.status),

                                        color: "white",

                                        fontSize: "13px",

                                        fontWeight: "600"

                                    }}
                                >

                                    {member.status}

                                </div>



                                {/* MENU */}

                                <MoreVertical
                                    color="#64748b"
                                />

                            </div>



                            {/* PROFILE IMAGE */}

                            <div className="text-center mt-4">

                                <img

                                    src={member.image}

                                    alt=""

                                    style={{

                                        width: "100px",

                                        height: "100px",

                                        borderRadius: "50%",

                                        border:
                                            "5px solid rgba(255,255,255,0.2)"

                                    }}
                                />

                            </div>



                            {/* NAME */}

                            <div className="text-center mt-4">

                                <h4

                                    className="fw-bold"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    {member.name}

                                </h4>



                                <p
                                    style={{
                                        color: "#64748b"
                                    }}
                                >

                                    {member.role}

                                </p>

                            </div>



                            {/* CONTACT */}

                            <div className="mt-4">



                                {/* EMAIL */}

                                <div className="d-flex align-items-center gap-3 mb-3">

                                    <Mail
                                        size={18}
                                        color="#2563eb"
                                    />

                                    <p

                                        className="m-0"

                                        style={{
                                            color: "#64748b",
                                            fontSize: "14px"
                                        }}
                                    >

                                        {member.email}

                                    </p>

                                </div>



                                {/* PHONE */}

                                <div className="d-flex align-items-center gap-3">

                                    <Phone
                                        size={18}
                                        color="#22c55e"
                                    />

                                    <p

                                        className="m-0"

                                        style={{
                                            color: "#64748b",
                                            fontSize: "14px"
                                        }}
                                    >

                                        {member.phone}

                                    </p>

                                </div>

                            </div>



                            {/* BUTTON */}

                            <button

                                className="btn w-100 mt-4"

                                style={{

                                    borderRadius: "18px",

                                    background:
                                        "linear-gradient(to right,#2563eb,#3b82f6)",

                                    color: "white",

                                    border: "none",

                                    padding: "14px",

                                    fontWeight: "600"

                                }}
                            >

                                <CheckCircle2
                                    size={18}
                                    className="me-2"
                                />

                                View Profile

                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default Team