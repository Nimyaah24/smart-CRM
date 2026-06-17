// ============================================
// IMPORTS
// ============================================

// react hooks
import { useState, useEffect } from "react"

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

const [search, setSearch] = useState("")

    /*
    ============================================
    DARK MODE STATE
    ============================================
    */

  const [darkMode, setDarkMode] = useState(
  JSON.parse(localStorage.getItem("darkMode")) || false
);

useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);




useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);


    /*
    ============================================
    NOTIFICATION DATA
    ============================================
    */

   const [notifications, setNotifications] =
  useState(() => {
    return (
      JSON.parse(
        localStorage.getItem("notifications")
      ) || []
    );
  });

console.log(
  "Notifications State:",
  notifications
);


  useEffect(() => {
  localStorage.setItem(
    "notifications",
    JSON.stringify(notifications)
  );
}, [notifications]);





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

                          value={search}
  onChange={(e) => setSearch(e.target.value)}

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
                
{/* <h3 style={{ color: "red" }}>
  Notifications: {notifications.length}
</h3> */}



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

                   {
  notifications.filter(
    (item) => item.unread
  ).length
} Unread Notifications

<div className="d-flex gap-2">



</div>
<button
className="btn btn-outline-light"
onClick={() =>
setNotifications(
notifications.map(n => ({
...n,
unread:false
}))
)
}
>
✓ Read All
</button>

<button
className="btn btn-danger"
onClick={() => {
if(window.confirm("Clear all notifications?")){
setNotifications([])
}
}}
>
🗑 Clear
</button>
                </div>

            </div>



            {/* ============================================
            NOTIFICATION LIST
            ============================================ */}

            <div>
{console.log("Rendering", notifications)}
{/* <h2 style={{ color: "red" }}>
  List Count: {notifications.length}
</h2> */}
                {

                    notifications
.filter(
  (item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    item.message
      .toLowerCase()
      .includes(search.toLowerCase())
)
.map((item) => (

                        <div

                            key={item.id}
onClick={() => {
  setNotifications(
    notifications.map((n) =>
      n.id === item.id
        ? {
            ...n,
            unread: false,
          }
        : n
    )
  )
}}
                            className="p-4 mb-4 d-flex justify-content-between align-items-center"

                          style={{
borderRadius:"24px",
background:
darkMode
? "#0f172a"
: "#ffffff",
boxShadow:
"0 10px 30px rgba(0,0,0,0.08)",
cursor:"pointer",
borderLeft:
item.unread
? "5px solid #2563eb"
: "5px solid transparent",
transition:"0.3s"
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
  onClick={(e) => {

    e.stopPropagation();

    if (
      window.confirm(
        "Delete this notification?"
      )
    ) {
      setNotifications(
        notifications.filter(
          (n) => n.id !== item.id
        )
      );
    }
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