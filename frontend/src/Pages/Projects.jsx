import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../Components/DarkModeToggle";

import {
  FolderKanban,
  Search,
  Pencil,
  Trash2,
  ArrowLeft,
  Bell
} from "lucide-react";

const Projects = () => {
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

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    budget: "",
    deadline: "",
    progress: "",
    status: "",
  });




useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await fetch(
        "https://smart-crm-pcys.onrender.com/api/project/all"
      );

      const data = await res.json();

      setProjects(data.projects || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

const progressValue = Math.min(
  100,
  Number(form.progress)
)

  const addProject = async () => {
    try {
      const res = await fetch(
        "https://smart-crm-pcys.onrender.com/api/project/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
body: JSON.stringify({
  ...form,
  progress: progressValue
}),
        }
      );

      const data = await res.json();

  toast.success(data.msg);

const notifications =
  JSON.parse(
    localStorage.getItem("notifications")
  ) || [];

notifications.unshift({
  id: Date.now(),
  title: "New Project Created",
  message: `${form.title} project created`,
  time: "Just now",
  type: "success",
  unread: true,
});

localStorage.setItem(
  "notifications",
  JSON.stringify(notifications)
);

setForm({
  title: "",
  budget: "",
  deadline: "",
  progress: "",
  status: "",
});

fetchProjects();

    } catch (err) {
      console.log(err);
      toast.error("Add Failed");
    }
  };

  const deleteProject = async (id) => {
    try {
      await fetch(
        `https://smart-crm-pcys.onrender.com/api/project/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      toast.success("Deleted");

const notifications =
  JSON.parse(
    localStorage.getItem("notifications")
  ) || [];

notifications.unshift({
  id: Date.now(),
  title: "Project Deleted",
  message: "A project was deleted",
  time: "Just now",
  type: "warning",
  unread: true,
});

localStorage.setItem(
  "notifications",
  JSON.stringify(notifications)
);

fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  const editProject = (item) => {
    setEditId(item._id);

    setForm({
      title: item.title,
      budget: item.budget,
      deadline: item.deadline,
      progress: item.progress,
      status: item.status,
    });
  };

  const updateProject = async () => {
    try {
      const res = await fetch(
        `https://smart-crm-pcys.onrender.com/api/project/update/${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
body: JSON.stringify({
  ...form,
  progress: progressValue
}),
        }
      );

      const data = await res.json();

  toast.success(data.msg);

const notifications =
  JSON.parse(
    localStorage.getItem("notifications")
  ) || [];

notifications.unshift({
  id: Date.now(),
  title: "Project Updated",
  message: `${form.title} project updated`,
  time: "Just now",
  type: "warning",
  unread: true,
});

localStorage.setItem(
  "notifications",
  JSON.stringify(notifications)
);

setEditId(null);

setForm({
  title: "",
  budget: "",
  deadline: "",
  progress: "",
  status: "",
});

fetchProjects();

    } catch (err) {
      console.log(err);
    }
  };

const totalBudget = projects.reduce(
  (acc, item) =>
    acc + Number(item.budget || 0),
  0
)

  const filteredProjects = projects.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="container-fluid p-4"
      style={{
        minHeight: "100vh",
         background: darkMode
      ? "#020617"
      : "#f1f5f9",
        transition: "0.3s",
      }}
    >

              {/* TOPBAR */}

      <div className="d-flex justify-content-between align-items-center mb-4">


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
              className="fw-bold mb-0"
              style={{
                color: darkMode ? "white" : "#0f172a",
              }}
            >
              Projects
            </h2>

            <small
              style={{
                color: darkMode ? "#cbd5e1" : "#64748b",
              }}
            >
              Manage all projects
            </small>
          </div>

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

      {/* STATS */}

      <div className="row mb-4">

        <div className="col-md-3 mb-3">
         <div
  className="card border-0 shadow rounded-4 p-4"
  style={{
    background: darkMode ? "#0f172a" : "white",
    color: darkMode ? "white" : "#0f172a",
  }}
>
            <h6>Total Projects</h6>
            <h2>{projects.length}</h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div
            className="card border-0 shadow rounded-4 p-4"
            style={{
               background: darkMode ? "#0f172a" : "white",
    color: darkMode ? "white" : "#0f172a",
            }}
          >
            <h6>Completed</h6>
            <h2 className="text-success">
              {
                projects.filter(
                  (p) => p.status === "Completed"
                ).length
              }
            </h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div
            className="card border-0 shadow rounded-4 p-4"
            style={{
               background: darkMode ? "#0f172a" : "white",
    color: darkMode ? "white" : "#0f172a",
            }}
          >
            <h6>Pending</h6>
            <h2 className="text-warning">
              {
                projects.filter(
                  (p) => p.status === "Pending"
                ).length
              }
            </h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div
            className="card border-0 shadow rounded-4 p-4"
            style={{
            background: darkMode ? "#0f172a" : "white",
    color: darkMode ? "white" : "#0f172a",
            }}
          >
            <h6>Revenue</h6>
    <h2 className="text-primary">
  ₹{totalBudget.toLocaleString()}
</h2>
          </div>
        </div>

      </div>

      {/* SEARCH */}

 <div
  className="card border-0 shadow rounded-4 p-3 mb-4"
  style={{
    background: darkMode ? "#0f172a" : "white",
  }}
>

        <div className="d-flex align-items-center">

          <Search
            size={18}
            color={darkMode ? "white" : "#202121"}
          />

          <input
            type="text"
            placeholder="Search projects..."
            className="form-control border-0 shadow-none ms-3 search-input "
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
              background: darkMode ? "#0f172a" : "white",
    color: darkMode ? "white" : "#0f172a",
            }}
          />

        </div>

      </div>


            {/* ADD / UPDATE PROJECT */}

  <div
  className="card border-0 shadow rounded-4 p-4 mb-4"
  style={{
    background: darkMode ? "#0f172a" : "white",
  }}
>

        <div className="row g-3">

          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Budget"
              value={form.budget}
              onChange={(e) =>
                setForm({
                  ...form,
                  budget: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-2">
            <input
              type="date"
              className="form-control"
              value={form.deadline}
              onChange={(e) =>
                setForm({
                  ...form,
                  deadline: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Progress"
              value={form.progress}
              onChange={(e) =>
                setForm({
                  ...form,
                  progress: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-2">
            <select
              className="form-control"
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value,
                })
              }
            >
              <option value="">
                Select
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>
          </div>

          <div className="col-md-2">

            {editId ? (

              <button
                className="btn btn-success w-100"
                onClick={updateProject}
              >
                Update
              </button>

            ) : (

              <button
                className="btn btn-primary w-100"
                onClick={addProject}
              >
                Add Project
              </button>

            )}

          </div>

        </div>

      </div>



            {/* PROJECT CARDS */}

      <div className="row">

        {filteredProjects.map((item) => (

          <div
            className="col-lg-4 mb-4"
            key={item._id}
          >

         <div
  className="card border-0 shadow-lg rounded-4 h-100"
  style={{
    background: darkMode
      ? "#0f172a"
      : "white",
    color: darkMode
      ? "white"
      : "#0f172a",
  }}
>

              <div className="card-body">

                <div className="d-flex justify-content-between align-items-center">

                  <FolderKanban
                    size={40}
                    color="#2563eb"
                  />

                  <span
                    className={`badge ${
                      item.status === "Completed"
                        ? "bg-success"
                        : item.status === "Pending"
                        ? "bg-warning"
                        : "bg-primary"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

                <h4 className="fw-bold mt-4">
                  {item.title}
                </h4>

                <p className="mt-4"
                  style={{
                    color: darkMode
                      ? "#cbd5e1"
                      : "#64748b",
                  }}
                >
                  Budget : {item.budget}
                </p>

                <p className=""
                  style={{
                    color: darkMode
                      ? "#cbd5e1"
                      : "#64748b",
                  }}
                >
                  Deadline : {item.deadline}
                </p>

                <div className="progress mb-3">

                 <div
  className={`progress-bar ${
    item.progress < 30
      ? "bg-danger"
      : item.progress < 70
      ? "bg-warning"
      : "bg-success"
  }`}
  style={{
    width: `${item.progress}%`,
  }}
>
  {item.progress}%
</div>

                </div>

                <div className="d-flex gap-2">

                  <button
                    className="btn btn-success"
                    onClick={() =>
                      editProject(item)
                    }
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteProject(item._id)
                    }
                  >
                    <Trash2 size={16} />
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Projects