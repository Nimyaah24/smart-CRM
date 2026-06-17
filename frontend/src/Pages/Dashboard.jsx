import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import DarkModeToggle from "../components/DarkModeToggle";

import {
  Bell,
  Search
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

const [notifications, setNotifications] =
useState([]);

const [customers, setCustomers] =
useState([]);

const [projects, setProjects] =
useState([]);

const [tasks, setTasks] =
useState([]);
const [todo, setTodo] = useState([]);
const [progress, setProgress] = useState([]);
const [completed, setCompleted] = useState([]);
  const [darkMode, setDarkMode] =
useState(
JSON.parse(
localStorage.getItem("darkMode")
) || false
);

useEffect(() => {
localStorage.setItem(
"darkMode",
JSON.stringify(darkMode)
);
}, [darkMode]);

  const handleLogout = async () => {
    try {
      await fetch(
        "https://smart-crm-pcys.onrender.com/api/user/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

useEffect(() => {

const savedNotifications =
JSON.parse(
localStorage.getItem(
"notifications"
)
) || [];

setNotifications(
savedNotifications
);

setTodo(
JSON.parse(localStorage.getItem("todo")) || []
);

setProgress(
JSON.parse(localStorage.getItem("progress")) || []
);

setCompleted(
JSON.parse(localStorage.getItem("completed")) || []
);



fetch(
"https://smart-crm-pcys.onrender.com/api/customer/all"
)
.then(res => res.json())
.then(data =>
setCustomers(
data.customers || []
)
);

fetch(
"https://smart-crm-pcys.onrender.com/api/project/all"
)
.then(res => res.json())
.then(data =>
setProjects(
data.projects || []
)
);


}, []);


const totalTasks =
todo.length +
progress.length +
completed.length;

const completedPercentage =
totalTasks === 0
? 0
: Math.round(
(completed.length / totalTasks) * 100
);

const cardStyle = {
background: darkMode
? "#0f172a"
: "white",

color: darkMode
? "white"
: "#0f172a",

borderRadius: "25px",

boxShadow:
"0 10px 30px rgba(0,0,0,0.08)"
};
  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        background: darkMode ? "#020617" : "#f1f5f9",
      }}
    >
      <Sidebar darkMode={darkMode} />

      <div
        className="flex-grow-1 p-4"
        style={{
          marginLeft:
            window.innerWidth > 768 ? "315px" : "0px",
        }}
      >
        {/* TOP NAVBAR */}

        <div className="d-flex justify-content-between align-items-center mb-4">
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
                color: "#64748b",
              }}
            />

            <input
              type="text"
              placeholder="Search..."
              className="form-control border-0"
              style={{
                background: darkMode
                  ? "#1e293b"
                  : "white",
                color: darkMode
                  ? "white"
                  : "#0f172a",
                borderRadius: "18px",
                padding: "14px 14px 14px 45px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)",
              }}
            />
          </div>

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
    background: darkMode ? "#1e293b" : "white",
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.08)",
  }}
>
<div
onClick={() =>
navigate("/notifications")
}
className="d-flex justify-content-center align-items-center position-relative"
style={{
width:"50px",
height:"50px",
borderRadius:"16px",
background: darkMode ? "#1e293b" : "white",
cursor:"pointer",
boxShadow:
"0 10px 30px rgba(0,0,0,0.08)"
}}
>
<Bell
  size={20}
  color={darkMode ? "white" : "#0f172a"}
/>

{
notifications.filter(
n => n.unread
).length > 0 && (

<span
style={{
position:"absolute",
top:"6px",
right:"6px",
background:"red",
color:"white",
fontSize:"10px",
padding:"2px 6px",
borderRadius:"50%"
}}
>
{
notifications.filter(
n => n.unread
).length
}
</span>

)
}
</div>
            </div>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          
        </div>

        {/* STATS */}

        <div className="row g-4">
          <div className="col-md-3">
            <div className="p-4" style={cardStyle}>
              <h6 style={{ color: "#64748b" }}>
                Total Customers
              </h6>
             <h2 className="fw-bold">
{customers.length}
</h2>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="p-4" style={cardStyle}>
              <h6 style={{ color: "#64748b" }}>
                Projects
              </h6>
             <h2 className="fw-bold">
{projects.length}
</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4" style={cardStyle}>
              <h6 style={{ color: "#64748b" }}>
                Tasks
              </h6>
             <h2 className="fw-bold">
{tasks.length}
</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4" style={cardStyle}>
              <h6 style={{ color: "#64748b" }}>
                Revenue
              </h6>
  <h2 className="fw-bold">
₹{
projects
.reduce(
(acc,p)=>
acc +
Number(
p.budget || 0
),
0
)
.toLocaleString()
}
</h2>
            </div>
          </div>
        </div>

        {/* ACTIVITY + PERFORMANCE */}

        <div className="row g-4 mt-2">
          <div className="col-lg-6">
            <div className="p-4" style={cardStyle}>
              <h5 className="fw-bold mb-4">
                Recent Activity
              </h5>

              {
notifications
.slice(0,5)
.map(item => (

<div
key={item.id}
className="p-3 d-flex justify-content-between mt-3"
style={{
background: darkMode
? "#1e293b"
: "white",
borderRadius:"18px"
}}
>
<span
style={{
color:
darkMode
? "white"
: "#0f172a"
}}
>
{item.title}
</span>

<span>
{item.time}
</span>
</div>

))
}
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="p-4"
              style={{
                background:
                  "linear-gradient(to right,#2563eb,#3b82f6)",
                borderRadius: "30px",
                color: "white",
                minHeight: "100%",
              }}
            >
              <h5 className="fw-bold">
                Team Performance 🚀
              </h5>

<h1
className="fw-bold mt-4"
style={{ fontSize: "55px" }}
>
{completedPercentage}%
</h1>


          <p>
{
totalTasks === 0
? "No tasks available"
: `${completed.length} completed tasks out of ${totalTasks}`
}
</p>

<div className="mt-5"
style={{
width: "100%",
height: "12px",
background: "rgba(255,255,255,0.3)",
borderRadius: "20px",
overflow: "hidden",
marginTop: "15px",
}}
>
<div
style={{
width: `${completedPercentage}%`,
height: "100%",
background: "#22c55e",
}}
/>
</div>

              <div className="row mt-4 text-center">

  <div className="col-4">
    <h4 className="fw-bold">
      {todo.length}
    </h4>
    <small>Todo</small>
  </div>

  <div className="col-4">
    <h4 className="fw-bold">
      {progress.length}
    </h4>
    <small>Progress</small>
  </div>

  <div className="col-4">
    <h4 className="fw-bold">
      {completed.length}
    </h4>
    <small>Done</small>
  </div>

</div>
            </div>
          </div>
        </div>

        {/* PROJECT STATUS */}

        <div className="row g-4 mt-2">
          <div className="col-lg-4">
            <div className="p-4" style={cardStyle}>
              <h5 className="fw-bold">
                Ongoing Projects
              </h5>
             <h1
  className="fw-bold"
  style={{
    color: "#2563eb",
    fontSize: "55px",
  }}
>
  {
    projects.filter(
      p => p.status === "Ongoing"
    ).length
  }
</h1>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="p-4" style={cardStyle}>
              <h5 className="fw-bold">
                Completed
              </h5>
              <h1
                className="fw-bold"
                style={{
                  color: "#22c55e",
                  fontSize: "55px",
                }}
              >
                {
projects.filter(
p => p.status === "Completed"
).length
}
              </h1>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="p-4" style={cardStyle}>
              <h5 className="fw-bold">
                Pending Tasks
              </h5>
              <h1
                className="fw-bold"
                style={{
                  color: "#f59e0b",
                  fontSize: "55px",
                }}
              >
               {
tasks.filter(
t => t.status !== "Completed"
).length
}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;