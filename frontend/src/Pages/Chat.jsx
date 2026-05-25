// ============================================
// IMPORTS
// ============================================

// react hook
import { useState } from "react"

// router
import { useNavigate } from "react-router-dom"

// dark mode component
import DarkModeToggle from "../components/DarkModeToggle"

// icons
import {
    ArrowLeft,
    Send,
    Search,
    Bell,
    Phone,
    Video
}
from "lucide-react"



// ============================================
// CHAT COMPONENT
// ============================================

const Chat = () => {

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
    MESSAGE STATE
    ============================================
    */

    const [message, setMessage] = useState("")



    /*
    ============================================
    CHAT DATA
    ============================================
    */

    const [messages, setMessages] = useState([

        {
            id: 1,
            text: "Hey team 👋",
            sender: "other"
        },

        {
            id: 2,
            text: "Dashboard completed successfully 🚀",
            sender: "me"
        },

        {
            id: 3,
            text: "Awesome UI design 🔥",
            sender: "other"
        }

    ])



    /*
    ============================================
    SEND MESSAGE
    ============================================
    */

    const sendMessage = () => {

        // empty check
        if (!message.trim()) return



        // new message add
        setMessages([

            ...messages,

            {
                id: Date.now(),
                text: message,
                sender: "me"
            }

        ])



        // clear input
        setMessage("")

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

                padding: "30px"

            }}
        >



            {/* ============================================
            TOP NAVBAR
            ============================================ */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                {/* LEFT */}

                <div className="d-flex align-items-center gap-3">

                    {/* BACK */}

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

                            Team Chat

                        </h2>

                        <p
                            className="m-0 mt-1"
                            style={{
                                color: "#64748b"
                            }}
                        >

                            Internal communication

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

                            placeholder="Search chat..."

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
            CHAT BOX
            ============================================ */}

            <div

                className="row"

                style={{
                    height: "80vh"
                }}
            >



                {/* LEFT USERS */}

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

                        <h4

                            className="fw-bold mb-4"

                            style={{

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            Online Team

                        </h4>



                        {/* USER */}

                        <div className="d-flex align-items-center gap-3 p-3 rounded-4 mb-3"

                            style={{

                                background:
                                    darkMode
                                        ? "#1e293b"
                                        : "#f8fafc"

                            }}
                        >

                            <img
                                src="https://i.pravatar.cc/100?img=12"
                                alt=""
                                style={{

                                    width: "55px",

                                    height: "55px",

                                    borderRadius: "50%"

                                }}
                            />



                            <div className="flex-grow-1">

                                <h6
                                    className="fw-bold m-0"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    John Doe

                                </h6>

                                <p
                                    className="m-0"

                                    style={{
                                        color: "#22c55e"
                                    }}
                                >

                                    Online

                                </p>

                            </div>

                        </div>

                    </div>

                </div>



                {/* RIGHT CHAT */}

                <div className="col-lg-8 mb-4">

                    <div

                        className="p-4 d-flex flex-column h-100"

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



                        {/* TOP */}

                        <div className="d-flex justify-content-between align-items-center border-bottom pb-3">

                            <div className="d-flex align-items-center gap-3">

                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt=""
                                    style={{
                                        width: "55px",
                                        height: "55px",
                                        borderRadius: "50%"
                                    }}
                                />



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

                                        John Doe

                                    </h5>

                                    <p
                                        className="m-0"

                                        style={{
                                            color: "#22c55e"
                                        }}
                                    >

                                        Active Now

                                    </p>

                                </div>

                            </div>



                            {/* ACTIONS */}

                            <div className="d-flex gap-3">

                                <Phone color="#2563eb" />

                                <Video color="#2563eb" />

                            </div>

                        </div>



                        {/* MESSAGES */}

                        <div

                            className="flex-grow-1 py-4"

                            style={{
                                overflowY: "auto"
                            }}
                        >

                            {messages.map((item) => (

                                <div

                                    key={item.id}

                                    className={`d-flex mb-4 ${
                                        item.sender === "me"
                                            ? "justify-content-end"
                                            : "justify-content-start"
                                    }`}
                                >

                                    <div

                                        style={{

                                            maxWidth: "400px",

                                            padding: "16px 20px",

                                            borderRadius: "22px",

                                            background:
                                                item.sender === "me"
                                                    ? "linear-gradient(to right,#2563eb,#3b82f6)"
                                                    : darkMode
                                                        ? "#1e293b"
                                                        : "#f1f5f9",

                                            color:
                                                item.sender === "me"
                                                    ? "white"
                                                    : darkMode
                                                        ? "white"
                                                        : "#0f172a"

                                        }}
                                    >

                                        {item.text}

                                    </div>

                                </div>

                            ))}

                        </div>



                        {/* INPUT */}

                        <div className="d-flex gap-3">

                            <input

                                type="text"

                                placeholder="Type message..."

                                className="form-control border-0"

                                value={message}

                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }

                                style={{

                                    height: "60px",

                                    borderRadius: "18px",

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



                            <button

                                onClick={sendMessage}

                                className="btn"

                                style={{

                                    width: "60px",

                                    borderRadius: "18px",

                                    background:
                                        "linear-gradient(to right,#2563eb,#3b82f6)",

                                    color: "white",

                                    border: "none"

                                }}
                            >

                                <Send size={20} />

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Chat