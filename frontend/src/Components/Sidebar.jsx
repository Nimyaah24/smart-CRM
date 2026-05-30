import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  TrendingUp,
  Settings,
  LogOut,
  Clock3,
  MessageCircle,
  Bell
} from "lucide-react";

const Sidebar = ({ darkMode }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(
        "http://localhost:5000/api/user/logout",
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

  return (
    <div
      style={{
        height:"100vh",
        width: "325px",
        minHeight: "100vh",
        background: darkMode ? "#0f172a" : "white",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "25px",
        borderRight: "1px solid #e2e8f0",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        overflowY:"auto",
        overflowX:"hidden",
       

      }}
    >
                  {/* LOGO SECTION */}

                <div className="d-flex align-items-center gap-3 mb-5">

                    <div
                        className="d-flex justify-content-center align-items-center"

                        style={{

                            width: "60px",

                            height: "60px",

                            borderRadius: "20px",

                            background:
                                "linear-gradient(to right,#2563eb,#3b82f6)",

                            boxShadow:
                                "0 10px 25px rgba(37,99,235,0.4)"

                        }}
                    >

                        <LayoutDashboard
                            color="white"
                            size={30}
                        />

                    </div>



                    <div>

                        <h3
                            className="fw-bold m-0"

                            style={{
                                color:
                                    darkMode
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

                            Business Dashboard

                        </p>

                    </div>

                </div>

      {/* MENU */}

      <div className="d-flex flex-column gap-3">
        <button
          onClick={() => navigate("/dashboard")}
          className="btn text-start"
          style={{
            background:
              "linear-gradient(to right,#2563eb,#3b82f6)",
            color: "white",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <LayoutDashboard size={18} className="me-2" />
          Dashboard
        </button>

        <button
          onClick={() => navigate("/customers")}
          className="btn text-start"
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <Users size={18} className="me-2" />
          Customers
        </button>

        <button
          onClick={() => navigate("/projects")}
          className="btn text-start"
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <FolderKanban size={18} className="me-2" />
          Projects
        </button>

        <button
          onClick={() => navigate("/analytics")}
          className="btn text-start"
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <TrendingUp size={18} className="me-2" />
          Analytics
        </button>

<button
  onClick={() => navigate("/tasks")}
  className="btn text-start"
  style={{
    background: "#f8fafc",
    borderRadius: "18px",
    padding: "14px",
  }}
>
  <Clock3 size={18} className="me-2" />
  Tasks
</button>

<button
  onClick={() => navigate("/kanban")}
  className="btn text-start"
  style={{
    background: "#f8fafc",
    borderRadius: "18px",
    padding: "14px",
  }}
>
  <FolderKanban size={18} className="me-2" />
  Kanban
</button>

<button
  onClick={() => navigate("/chat")}
  className="btn text-start"
  style={{
    background: "#f8fafc",
    borderRadius: "18px",
    padding: "14px",
  }}
>
  <MessageCircle size={18} className="me-2" />
  Team Chat
</button>

<button
  onClick={() => navigate("/notifications")}
  className="btn text-start"
  style={{
    background: "#f8fafc",
    borderRadius: "18px",
    padding: "14px",
  }}
>
  <Bell size={18} className="me-2" />
  Notifications
</button>

<button
  onClick={() => navigate("/team")}
  className="btn text-start"
  style={{
    background: "#f8fafc",
    borderRadius: "18px",
    padding: "14px",
  }}
>
  <Users size={18} className="me-2" />
  Team
</button>
        <button
          onClick={() => navigate("/settings")}
          className="btn text-start"
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <Settings size={18} className="me-2" />
          Settings
        </button>
      </div>

      {/* PREMIUM CARD */}

      <div
        className="mt-5 p-4"
        style={{
          borderRadius: "30px",
          background:
            "linear-gradient(to right,#0f172a,#1e293b)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h5
          className="fw-bold"
          style={{
            color: "white",
               fontSize: "19px",
          }}
        >
          Premium Analytics 🚀
        </h5>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          Unlock advanced CRM reports and business insights.
        </p>

        <button
          className="btn w-100"
          style={{
            background: "white",
            color: "#0f172a",
            borderRadius: "16px",
            fontWeight: "700",
          }}
        >
          Upgrade Now
        </button>
      </div>

      {/* PROFILE */}

      <div
        className="mt-4 p-3 d-flex align-items-center gap-3"
        style={{
          background: "#f8fafc",
          borderRadius: "20px",
        }}
      >
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
          }}
        />

        <div>
          <h6 className="fw-bold m-0">
            Admin User
          </h6>

          <p
            className="m-0"
            style={{
              color: "#64748b",
              fontSize: "13px",
            }}
          >
            Super Administrator
          </p>
        </div>
      </div>

      {/* LOGOUT */}

      <button
        onClick={handleLogout}
        className="btn w-100 mt-4"
        style={{
          background:
            "linear-gradient(to right,#dc2626,#ef4444)",
          color: "white",
          borderRadius: "18px",
          padding: "14px",
          border: "none",
        }}
      >
        <LogOut size={18} className="me-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;