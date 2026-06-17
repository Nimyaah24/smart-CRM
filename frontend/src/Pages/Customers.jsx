import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DarkModeToggle from "../Components/DarkModeToggle";


import {
  Search,
  Pencil,
  Trash2,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
    Bell
} from "lucide-react";

const Customers = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
  JSON.parse(localStorage.getItem("darkMode")) || false
);

useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);

  const [customers, setCustomers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [editId, setEditId] = useState(null);

const [showModal, setShowModal] =
  useState(false);

  const fetchCustomers = async () => {
    try {
      const res = await fetch(
        "https://smart-crm-pcys.onrender.com/api/customer/all",
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      setCustomers(data.customers || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addCustomer = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.location
    ) {
    toast.error("Please fill all fields");
      return;
    }

    try {
      await fetch(
        "https://smart-crm-pcys.onrender.com/api/customer/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );
toast.success("Customer Added Successfully");
      fetchCustomers();

      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
      });
      const notifications =
  JSON.parse(
    localStorage.getItem("notifications")
  ) || [];

notifications.unshift({
  id: Date.now(),
  title: "Customer Created",
  message: `${form.name} was added to CRM`,
  time: "Just now",
  type: "success",
  unread: true,
});

localStorage.setItem(
  "notifications",
  JSON.stringify(notifications)
);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCustomer = async (id) => {
    const ok = window.confirm(
      "Delete this customer?"
    );

    if (!ok) return;

    try {
      await fetch(
        `https://smart-crm-pcys.onrender.com/api/customer/delete/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
toast.success("Customer Deleted");

const notifications =
  JSON.parse(
    localStorage.getItem("notifications")
  ) || [];

notifications.unshift({
  id: Date.now(),
  title: "Customer Deleted",
  message: "A customer was removed",
  time: "Just now",
  type: "warning",
  unread: true,
});

localStorage.setItem(
  "notifications",
  JSON.stringify(notifications)
);

fetchCustomers();
    } catch (err) {
      console.log(err);
    }
  };

  const editCustomer = (item) => {
  setEditId(item._id);

  setForm({
    name: item.name,
    email: item.email,
    phone: item.phone,
    location: item.location,
  });

  setShowModal(true);
};

const updateCustomer = async () => {
  try {
    const res = await fetch(
      `https://smart-crm-pcys.onrender.com/api/customer/update/${editId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      }
    );

    toast.success("Customer Updated Successfully");
    const data = await res.json();

const notifications =
  JSON.parse(
    localStorage.getItem("notifications")
  ) || [];

notifications.unshift({
  id: Date.now(),
  title: "Customer Updated",
  message: `${form.name} details updated`,
  time: "Just now",
  type: "warning",
  unread: true,
});

localStorage.setItem(
  "notifications",
  JSON.stringify(notifications)
);

    console.log("UPDATE RESPONSE =", data);

    fetchCustomers();

    setEditId(null);

setForm({
  name: "",
  email: "",
  phone: "",
  location: "",
});
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong");
  }
};





  const filteredCustomers = customers.filter(
    (item) =>
      item?.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h2>Loading Customers...</h2>
      </div>
    );
  }

  return (
    
  <div
    className="container-fluid"
    style={{
      minHeight: "100vh",
      background: darkMode
        ? "#020617"
        : "#f1f5f9",
      padding: "30px",
    }}
  >



          {/* TOP NAVBAR */}

      <div
        className="d-flex justify-content-between align-items-center mb-4 p-4 flex-wrap gap-3"
        style={{
          borderRadius: "28px",
          background: darkMode
            ? "rgba(15,23,42,0.9)"
            : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* LEFT */}

        <div className="d-flex align-items-center gap-3">
          <button
            onClick={() =>
              navigate("/dashboard")
            }
            className="btn"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "15px",
              background: darkMode
                ? "#1e293b"
                : "#e2e8f0",
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

          <div>
            <h2
              className="fw-bold m-0"
              style={{
                color: darkMode
                  ? "white"
                  : "#0f172a",
              }}
            >
              Customers
            </h2>

            <p
              className="m-0 mt-1"
              style={{
                color: darkMode
                  ? "#94a3b8"
                  : "#64748b",
              }}
            >
              Manage all your clients
            </p>
          </div>
        </div>

        {/* SEARCH */}

        <div
          className="d-flex align-items-center px-4"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "70px",
            borderRadius: "22px",
            background: darkMode
                  ? "#1e293b"
                  : "white",
                color: darkMode
                  ? "white"
                  : "#0f172a",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <Search color="#64748b" />

          <input
            type="text"
            placeholder="Search customer..."
            className="form-control border-0 shadow-none ms-3"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
             background: darkMode
                  ? "#1e293b"
                  : "white",
                color: darkMode
                  ? "white"
                  : "#0f172a",
            }}
          />
        </div>

           <div className="d-flex align-items-center gap-3">
       
         <button
           className="btn position-relative"
           onClick={() =>
             navigate("/notifications")
           }
           style={{
             width: "50px",
             height: "50px",
             borderRadius: "15px",
             background: darkMode
               ? "#1e293b"
               : "#e2e8f0",
           }}
         >
           <Bell
             color={
               darkMode
                 ? "white"
                 : "#0f172a"
             }
           />
       
           <span
             style={{
               position: "absolute",
               top: "5px",
               right: "5px",
               width: "10px",
               height: "10px",
               borderRadius: "50%",
               background: "red",
             }}
           />
         </button>
       
         <DarkModeToggle
           darkMode={darkMode}
           setDarkMode={setDarkMode}
         />
       
       </div>
      </div>

<div
  className="p-5 mb-4 position-relative overflow-hidden"
  style={{
    borderRadius: "35px",
    background:
      "linear-gradient(to right,#0f172a,#1e293b)",
    minHeight: "240px",
  }}
>
  <div
    style={{
      position: "absolute",
      width: "350px",
      height: "350px",
      borderRadius: "50%",
      background:
        "rgba(255,255,255,0.05)",
      top: "-100px",
      right: "-100px",
    }}
  />

  <h1
    className="fw-bold"
    style={{
      color: "white",
      fontSize: "58px",
      position: "relative",
    }}
  >
    Customers
  </h1>

  <p
    style={{
      color: "#cbd5e1",
      maxWidth: "700px",
      lineHeight: "34px",
      fontSize: "18px",
      position: "relative",
    }}
  >
    Manage customer relationships and
    track your client details easily.
  </p>

  <button
    className="btn btn-light mt-3"
    onClick={() => setShowModal(true)}
  >
    + Add Customer
  </button>
</div>


      {/* STATS */}

      <div className="row mb-4 g-4">
        <div className="col-lg-3">
          <div className="p-4 bg-white rounded-5 shadow-sm">
            <h6>Total Customers</h6>

            <h2 className="fw-bold">
              {customers.length}
            </h2>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="p-4 bg-white rounded-5 shadow-sm">
            <h6>Active</h6>

            <h2 className="fw-bold text-success">
              {Math.floor(
                customers.length * 0.8
              )}
            </h2>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="p-4 bg-white rounded-5 shadow-sm">
            <h6>Premium</h6>

            <h2 className="fw-bold text-warning">
              {Math.floor(
                customers.length * 0.2
              )}
            </h2>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="p-4 bg-white rounded-5 shadow-sm">
            <h6>New This Month</h6>

            <h2 className="fw-bold text-primary">
              {customers.length}
            </h2>
          </div>
        </div>
      </div>

    



      {/* CUSTOMER LIST */}

      {filteredCustomers.length === 0 && (
        <div className="text-center py-5">
          <h4
            style={{
              color: darkMode
                ? "white"
                : "#0f172a",
            }}
          >
            No Customers Found
          </h4>
        </div>
      )}

      <div className="row">
        {filteredCustomers.map((item) => (
          <div
            className="col-lg-4 col-md-6 mb-4"
            key={item._id}
          >
            <div
              className="p-4 h-100"
              style={{
                borderRadius: "28px",
                background: darkMode
                  ? "#0f172a"
                  : "white",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              {/* TOP */}

              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(to right,#2563eb,#3b82f6)",
                    color: "white",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  {item?.name?.charAt(0) || "U"}
                </div>

                <div className="d-flex gap-2">
                  <button
                    onClick={() =>
                      editCustomer(item)
                    }
                    className="btn"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "14px",
                      background: "#22c55e",
                      color: "white",
                    }}
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() =>
                      deleteCustomer(item._id)
                    }
                    className="btn"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "14px",
                      background: "#ef4444",
                      color: "white",
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* NAME */}

              <h3
                className="fw-bold mt-4"
                style={{
                  color: darkMode
                    ? "white"
                    : "#0f172a",
                }}
              >
                {item.name}
              </h3>

              {/* EMAIL */}

              <div className="d-flex align-items-center gap-2 mt-3">
                <Mail
                  size={18}
                  color="#64748b"
                />

                <p
                  className="m-0"
                  style={{
                    color: darkMode
                      ? "#cbd5e1"
                      : "#334155",
                  }}
                >
                  {item.email}
                </p>
              </div>

              {/* PHONE */}

              <div className="d-flex align-items-center gap-2 mt-3">
                <Phone
                  size={18}
                  color="#64748b"
                />

                <p
                  className="m-0"
                  style={{
                    color: darkMode
                      ? "#cbd5e1"
                      : "#334155",
                  }}
                >
                  {item.phone}
                </p>
              </div>

              {/* LOCATION */}

              <div className="d-flex align-items-center gap-2 mt-3">
                <MapPin
                  size={18}
                  color="#64748b"
                />

                <p
                  className="m-0"
                  style={{
                    color: darkMode
                      ? "#cbd5e1"
                      : "#334155",
                  }}
                >
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>



{
  showModal && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
  background:
    "rgba(0,0,0,0.4)",
  backdropFilter: "blur(6px)",
  zIndex: 9999,
}}
    >
    <div
  className="bg-white p-4 customer-modal"
  style={{
    width: "700px",
    borderRadius: "25px",
  }}
>
        <h3 className="fw-bold mb-4">
          Add Customer
        </h3>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
            />
          </div>
        </div> 

   <button
  className="btn btn-primary"
  onClick={() => {
    if (editId) {
      updateCustomer();
    } else {
      addCustomer();
    }

    setShowModal(false);
  }}
>
  {editId ? "Update" : "Save"}
</button>

          <button
            className="btn btn-secondary"
            onClick={() =>
              setShowModal(false)
            }
          >
            Cancel
          </button>
        </div>
      </div>
    
  )
}


    </div>
  );
};

export default Customers;