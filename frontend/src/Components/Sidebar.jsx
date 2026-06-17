import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  LayoutDashboard,
  Users,
  FolderKanban,
  TrendingUp,
  Settings,
  LogOut,
  Bell
} from "lucide-react";

const Sidebar = ({ darkMode }) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);
const [user, setUser] = useState(null);

const handlePayment = async () => {
   
  const res = await fetch(
    "http://localhost:5000/api/payment/create-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const order = await res.json();

  const options = {
  key: "rzp_test_T2I8j57wlgrl78",
    amount: order.amount,
    currency: order.currency,
    name: "Smart CRM",
    description: "Premium Analytics Plan",
    order_id: order.id,

    handler: function (response) {
      alert("Payment Successful 🚀");
      console.log(response);
    },
  };

  const razor = new window.Razorpay(options);
  razor.open();
};


  console.log("Dark Mode =", darkMode);
  const navigate = useNavigate();

  useEffect(() => {
  const getProfile = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/user/profile",
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };

  getProfile();
}, []);


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
  background: darkMode ? "#1e293b" : "#f8fafc",
  color: darkMode ? "white" : "#0f172a",
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
  background: darkMode ? "#1e293b" : "#f8fafc",
  color: darkMode ? "white" : "#0f172a",
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
  background: darkMode ? "#1e293b" : "#f8fafc",
  color: darkMode ? "white" : "#0f172a",
  borderRadius: "18px",
  padding: "14px",
}}
        >
          <TrendingUp size={18} className="me-2" />
          Analytics
        </button>


<button
  onClick={() => navigate("/kanban")}
  className="btn text-start"
  style={{
  background: darkMode ? "#1e293b" : "#f8fafc",
  color: darkMode ? "white" : "#0f172a",
  borderRadius: "18px",
  padding: "14px",
}}
>
  <FolderKanban size={18} className="me-2" />
  Kanban
</button>


<button
  onClick={() => navigate("/team")}
  className="btn text-start"
  style={{
  background: darkMode ? "#1e293b" : "#f8fafc",
  color: darkMode ? "white" : "#0f172a",
  borderRadius: "18px",
  padding: "14px",
}}
>
  <Users size={18} className="me-2" />
  Team
</button>

<button
  onClick={() => navigate("/notifications")}
  className="btn text-start"
  style={{
  background: darkMode ? "#1e293b" : "#f8fafc",
  color: darkMode ? "white" : "#0f172a",
  borderRadius: "18px",
  padding: "14px",
}}
>
  <Bell size={18} className="me-2" />
  Notifications
</button>


        <button
          onClick={() => navigate("/settings")}
          className="btn text-start"
          style={{
  background: darkMode ? "#1e293b" : "#f8fafc",
  color: darkMode ? "white" : "#0f172a",
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
  onClick={() => setShowPremiumModal(true)}
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
   background: darkMode ? "#1e293b" : "#f8fafc",
  color: darkMode ? "white" : "#0f172a",
  borderRadius: "20px",
}}
      >
       <img
  src={
    user?.profileImage ||
    `https://ui-avatars.com/api/?name=${user?.name || "User"}`
  }
  alt="profile"
  style={{
    width: "55px",
    height: "55px",
    borderRadius: "50%",
  }}
/>

        <div>
         <h6
  className="fw-bold m-0 "
  style={{
    color: darkMode ? "white" : "#0f172a"
  }}
>
          {user?.name || "Loading..."}
          </h6>

          <p
            className="m-0"
            style={{
              color: "#64748b",
              fontSize: "13px",
            }}
          >
          {user?.email || ""}
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


{
  showPremiumModal && (
    <div
      onClick={() => setShowPremiumModal(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="premium-modal"
        style={{
          width: "450px",
          background: darkMode ? "#0f172a" : "white",
          padding: "30px",
          borderRadius: "25px",
          color: darkMode ? "white" : "#0f172a"
        }}
      >
        <h3 className="fw-bold">
          Premium Analytics 🚀
        </h3>

        <p>
          Unlock advanced reports, AI insights,
          unlimited projects and team collaboration.
        </p>

        <div className="d-flex gap-2 mt-4">
    <button
  className="btn btn-primary flex-grow-1"
  onClick={handlePayment}
>
  Upgrade ₹499/month
</button>

          <button
            className="btn btn-secondary"
            onClick={() => setShowPremiumModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}


    </div>
  );
};

export default Sidebar;