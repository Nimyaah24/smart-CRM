import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DarkModeToggle from "../Components/DarkModeToggle";

import { Pencil } from "lucide-react";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import {
  ArrowLeft,
  Bell,
  Search,
  Plus,
  CalendarDays,
  Trash2,
} from "lucide-react";

const Kanban = () => {
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

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");


  const [dueDate, setDueDate] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
const [editingTask, setEditingTask] = useState(null);
const [editTaskName, setEditTaskName] = useState("");
const [editPriority, setEditPriority] = useState("Medium");


const [todo, setTodo] = useState(() => {
  return JSON.parse(localStorage.getItem("todo")) || [];
});

const [progress, setProgress] = useState(() => {
  return JSON.parse(localStorage.getItem("progress")) || [];
});

const [completed, setCompleted] = useState(() => {
  return JSON.parse(localStorage.getItem("completed")) || [];
});


  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

 

  useEffect(() => {
    localStorage.setItem(
      "todo",
      JSON.stringify(todo)
    );
  }, [todo]);

  useEffect(() => {
    localStorage.setItem(
      "progress",
      JSON.stringify(progress)
    );
  }, [progress]);

  useEffect(() => {
    localStorage.setItem(
      "completed",
      JSON.stringify(completed)
    );
  }, [completed]);

  const priorityColor = (priority) => {
    if (priority === "High") return "#ef4444";
    if (priority === "Medium") return "#f59e0b";
    if (priority === "Low") return "#22c55e";

    return "#2563eb";
  };

const addNotification = (
  title,
  message,
  type = "activity"
) => {

  const oldNotifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || [];

  const newNotification = {
    id: Date.now(),
    title,
    message,
    time: "Just now",
    type,
    unread: true,
  };

  localStorage.setItem(
    "notifications",
    JSON.stringify([
      newNotification,
      ...oldNotifications,
    ])
  );
};


  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    let sourceItems;
    let destinationItems;

    if (source.droppableId === "todo") {
      sourceItems = [...todo];
    } else if (source.droppableId === "progress") {
      sourceItems = [...progress];
    } else {
      sourceItems = [...completed];
    }

    if (destination.droppableId === "todo") {
      destinationItems = [...todo];
    } else if (destination.droppableId === "progress") {
      destinationItems = [...progress];
    } else {
      destinationItems = [...completed];
    }

    const [removed] = sourceItems.splice(
      source.index,
      1
    );

    if (destination.droppableId === "completed") {
      removed.priority = "Completed";
    }

    destinationItems.splice(
      destination.index,
      0,
      removed
    );

    if (source.droppableId === "todo")
      setTodo(sourceItems);

    if (source.droppableId === "progress")
      setProgress(sourceItems);

    if (source.droppableId === "completed")
      setCompleted(sourceItems);

    if (destination.droppableId === "todo")
      setTodo(destinationItems);

    if (destination.droppableId === "progress")
      setProgress(destinationItems);

    if (destination.droppableId === "completed")
      setCompleted(destinationItems);


    if (
  source.droppableId === destination.droppableId
) {
  const items =
    source.droppableId === "todo"
      ? [...todo]
      : source.droppableId === "progress"
      ? [...progress]
      : [...completed];

  const [reorderedItem] = items.splice(
    source.index,
    1
  );

  items.splice(
    destination.index,
    0,
    reorderedItem
  );

  if (source.droppableId === "todo")
    setTodo(items);

  if (source.droppableId === "progress")
    setProgress(items);

  if (source.droppableId === "completed")
    setCompleted(items);

  return;
}
  };




const totalTasks =
  todo.length + progress.length + completed.length;

const completedPercentage =
  totalTasks === 0
    ? 0
    : Math.round(
        (completed.length / totalTasks) * 100
      );



  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        background: darkMode
          ? "#020617"
          : "#f1f5f9",
        padding: "30px",
        transition: "0.3s",
      }}
    >



              {/* NAVBAR */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="btn"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "15px",
              background: darkMode
                ? "#1e293b"
                : "#e2e8f0",
            }}
          >
            <ArrowLeft
              color={darkMode ? "white" : "#0f172a"}
            />
          </button>

          <div>
            <h2
              className="fw-bold m-0"
              style={{
                color: darkMode ? "white" : "#0f172a",
              }}
            >
              Kanban Workspace
            </h2>

            <p
              className="m-0 mt-1"
              style={{ color: "#64748b" }}
            >
              Team productivity workflow
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">

          {/* SEARCH */}

          <div
            className="position-relative"
            style={{ width: "300px" }}
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
              placeholder="Search task..."
              className="form-control border-0 search-input"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              style={{
                
                background: darkMode
                  ? "#0f172a"
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
      </div>

      {/* HERO SECTION */}

      <div
        className="p-5 mb-4 position-relative overflow-hidden"
        style={{
          borderRadius: "25px",
          background:
            "linear-gradient(to right,#0f172a,#1e293b)",
          minHeight: "240px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            top: "-120px",
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
          Team Board
        </h1>

        <p
          className="mt-4"
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
            lineHeight: "34px",
            maxWidth: "700px",
            position: "relative",
          }}
        >
          Manage project workflow, assign tasks and
          monitor progress using modern Kanban
          productivity system.
        </p>

        <button
          className="btn mt-3 px-4 py-3"
          onClick={() => setShowModal(true)}
          style={{
            borderRadius: "18px",
            background: "white",
            color: "#0f172a",
            fontWeight: "700",
            border: "none",
            position: "relative",
          }}
        >
          <Plus size={18} className="me-2" />
          Create Task
        </button>
      </div>




<div
  className="p-4 mb-4"
  style={{
    background: darkMode ? "#0f172a" : "white",
    borderRadius: "25px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
  }}
>
  <div className="d-flex justify-content-between mb-2">
    <h5
      style={{
        color: darkMode ? "white" : "#0f172a",
      }}
    >
      Project Progress
    </h5>

    <span
      style={{
        color: "#22c55e",
        fontWeight: "700",
      }}
    >
      {completedPercentage}%
    </span>
  </div>

  <div
    style={{
      width: "100%",
      height: "12px",
      background: "#e2e8f0",
      borderRadius: "20px",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: `${completedPercentage}%`,
        height: "100%",
        background: "#22c55e",
        transition: "0.4s",
      }}
    />
  </div>
</div>



      {/* STATS */}

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="p-4 bg-danger text-white rounded-4">
            <h2>{todo.length}</h2>
            <p className="mb-0">Todo Tasks</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 bg-primary text-white rounded-4">
            <h2>{progress.length}</h2>
            <p className="mb-0">In Progress</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 bg-success text-white rounded-4">
            <h2>{completed.length}</h2>
            <p className="mb-0">Completed</p>
          </div>
        </div>

      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="row">



            {/* TODO COLUMN */}

<div className="col-lg-4 mb-4">
  <div
    className="p-4"
    style={{
      borderRadius: "25px",
      background: darkMode
        ? "#0f172a"
        : "rgba(255,255,255,0.7)",
      backdropFilter: "blur(10px)",
      boxShadow:
        "0 10px 30px rgba(0,0,0,0.08)",
         
    }}
  >
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#ef4444",
          }}
        />

        <h4
          className="fw-bold m-0"
          style={{
            color: darkMode
              ? "white"
              : "#0f172a",
          }}
        >
          Todo
        </h4>
      </div>

      <span
        className="px-3 py-2"
        style={{
          borderRadius: "14px",
          background: "#ef4444",
          color: "white",
          fontWeight: "600",
        }}
      >
        {todo.length}
      </span>
    </div>

<Droppable droppableId="todo">
  {(provided) => (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
      {todo
        .filter((item) =>
          item.title
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((item, index) => (
          <Draggable
            key={item.id}
            draggableId={item.id.toString()}
            index={index}
          >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-3 mb-2"
                      style={{
                      borderRadius: "25px",
                      background: darkMode
                        ? "#1e293b"
                        : "white",
                      boxShadow:
                        "0 10px 20px rgba(0,0,0,0.05)",
                      ...provided.draggableProps.style,
                    }}
                  >


                    <div className="d-flex justify-content-between align-items-center">
  <span
    className="px-3 py-2"
    style={{
      borderRadius: "14px",
      background: priorityColor(item.priority),
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
    }}
  >
    {item.priority}
  </span>

  <div className="d-flex gap-3">
    <Trash2
      size={18}
      color="red"
      style={{ cursor: "pointer" }}
  onClick={() => {
  addNotification(
    "Task Deleted",
    `${item.title} deleted`,
    "warning"
  );

  setTodo(
    todo.filter(
      (t) => t.id !== item.id
    )
  );
}}
    />

<Pencil
  size={18}
  color="#2563eb"
  style={{ cursor: "pointer" }}
  onClick={() => {
    setEditingTask(item);
    setEditTaskName(item.title);
    setEditPriority(item.priority);
    setDueDate("");
    setShowEditModal(true);
  }}
/>
  </div>
</div>

                    <h5
                      className="fw-bold mt-4"
                      style={{
                        color: darkMode
                          ? "white"
                          : "#0f172a",
                      }}
                    >
                      {item.title}
                    </h5>

                  <button
  className="btn btn-primary btn-sm mt-3"
  onClick={() => {
    setProgress([
      ...progress,
      item,
    ]);

    addNotification(
      "Task Started",
      `${item.title} moved to In Progress`,
      "activity"
    );

    setTodo(
      todo.filter(
        (t) => t.id !== item.id
      )
    );
  }}
>
       
                      Start
                    </button>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div className="d-flex align-items-center gap-2">
                        <CalendarDays
                          size={18}
                          color="#64748b"
                        />

                        <p
                          className="m-0"
                          style={{
                            color: "#64748b",
                          }}
                        >
                          {item.date}
                        </p>
                      </div>

                    
                    </div>
                  </div>
                )}
              </Draggable>
            ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
</div>

{/* IN PROGRESS COLUMN */}

<div className="col-lg-4 mb-4">
  <div
    className="p-4"
    style={{
      borderRadius: "25px",
      background: darkMode
        ? "#0f172a"
        : "rgba(255,255,255,0.7)",
      backdropFilter: "blur(10px)",
      boxShadow:
        "0 10px 30px rgba(0,0,0,0.08)",
         
    }}
  >
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#2563eb",
          }}
        />

        <h4
          className="fw-bold m-0"
          style={{
            color: darkMode
              ? "white"
              : "#0f172a",
          }}
        >
          In Progress
        </h4>
      </div>

      <span
        className="px-3 py-2"
        style={{
          borderRadius: "14px",
          background: "#2563eb",
          color: "white",
          fontWeight: "600",
        }}
      >
        {progress.length}
      </span>
    </div>

    <Droppable droppableId="progress">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {progress
            .filter((item) =>
              item.title
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-3 mb-2"
       style={{
                      borderRadius: "25px",
                      background: darkMode
                        ? "#1e293b"
                        : "white",
                      boxShadow:
                        "0 10px 20px rgba(0,0,0,0.05)",
                      ...provided.draggableProps.style,
                    }}
                  >
                   <div className="d-flex justify-content-between align-items-center">
  <span
    className="px-3 py-2"
    style={{
      borderRadius: "14px",
      background: priorityColor(item.priority),
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
    }}
  >
    {item.priority}
  </span>

  <div className="d-flex gap-3">
    <Trash2
      size={18}
      color="red"
      style={{ cursor: "pointer" }}
onClick={() => {
  addNotification(
    "Task Deleted",
    `${item.title} deleted`,
    "warning"
  );

  setProgress(
    progress.filter(
      (t) => t.id !== item.id
    )
  );
}}
    />

  <Pencil
  size={18}
  color="#2563eb"
  style={{ cursor: "pointer" }}
  onClick={() => {
    setEditingTask(item);
    setEditTaskName(item.title);
    setEditPriority(item.priority);
    setDueDate("");
    setShowEditModal(true);
  }}
/>
  </div>
</div>

                    <h5
                      className="fw-bold mt-4"
                      style={{
                        color: darkMode
                          ? "white"
                          : "#0f172a",
                      }}
                    >
                      {item.title}
                    </h5>

                    <button
                      className="btn btn-success btn-sm mt-3"
                      onClick={() => {
                        setCompleted([
                          ...completed,
                          {
                            ...item,
                            priority: "Completed",
                          },
                        ]);

                        addNotification(
  "Task Completed",
  `${item.title} completed successfully`,
  "success"
);

                        setProgress(
                          progress.filter(
                            (task) =>
                              task.id !== item.id
                          )
                        );

                      }}
                    >
                      Complete
                    </button>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div className="d-flex align-items-center gap-2">
                        <CalendarDays
                          size={18}
                          color="#64748b"
                        />

                        <p
                          className="m-0"
                          style={{
                            color: "#64748b",
                          }}
                        >
                          {item.date}
                        </p>
                      </div>

                    
                    </div>
                  </div>
                )}
              </Draggable>
            ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
</div>

{/* COMPLETED COLUMN */}

<div className="col-lg-4 mb-4">
  <div
    className="p-4"
    style={{
      borderRadius: "25px",
      background: darkMode
        ? "#0f172a"
        : "rgba(255,255,255,0.7)",
      backdropFilter: "blur(10px)",
      boxShadow:
        "0 10px 30px rgba(0,0,0,0.08)",
        
    }}
  >
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />

        <h4
          className="fw-bold m-0"
          style={{
            color: darkMode
              ? "white"
              : "#0f172a",
          }}
        >
          Completed
        </h4>
      </div>

      <span
        className="px-3 py-2"
        style={{
          borderRadius: "14px",
          background: "#22c55e",
          color: "white",
          fontWeight: "600",
        }}
      >
        {completed.length}
      </span>
    </div>

    <Droppable droppableId="completed">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {completed
            .filter((item) =>
              item.title
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-3 mb-2"
                    style={{
                      borderRadius: "25px",
                      background: darkMode
                        ? "#1e293b"
                        : "white",
                      boxShadow:
                        "0 10px 20px rgba(0,0,0,0.05)",
                      ...provided.draggableProps.style,
                    }}
                  >


                   <div className="d-flex justify-content-between align-items-center " style={{height:"95px"}}>
  <span
    className="px-3 py-2"
    style={{
      borderRadius: "14px",
      background: priorityColor(item.priority),
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
    }}
  >
    {item.priority}
  </span>

  <div className="d-flex gap-3">
    <Trash2
      size={18}
      color="red"
      style={{ cursor: "pointer" }}
onClick={() => {
  addNotification(
    "Task Deleted",
    `${item.title} deleted`,
    "warning"
  );

  setCompleted(
    completed.filter(
      (t) => t.id !== item.id
    )
  );
}}
    />

   <Pencil
  size={18}
  color="#2563eb"
  style={{ cursor: "pointer" }}
  onClick={() => {
    setEditingTask(item);
    setEditTaskName(item.title);
    setEditPriority(item.priority);
    setDueDate("");
    setShowEditModal(true);
  }}
/>
  </div>
</div>

                    <h5
                      className="fw-bold mt-4"
                      style={{
                        color: darkMode
                          ? "white"
                          : "#0f172a",
                      }}
                    >
                      {item.title}
                    </h5>




 <div className="d-flex align-items-center gap-2 mt-4">
  <CalendarDays size={18} color="#64748b" />

  <p
    className="m-0"
    style={{
      color: "#64748b",
    }}
  >
    {item.date}
  </p>
</div>





                  </div>
                )}
              </Draggable>
            ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
</div>

</div>
</DragDropContext>

{showModal && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    }}
  >
    <div
      style={{
        background: darkMode ? "#0f172a" : "white",
        padding: "30px",
        borderRadius: "25px",
        width: "420px",
      }}
    >
      <h3
        style={{
          color: darkMode ? "white" : "#0f172a",
        }}
      >
        Create Task
      </h3>

      <input
        type="text"
        className="form-control mt-3"
        placeholder="Task name"
        value={taskName}
        onChange={(e) =>
          setTaskName(e.target.value)
        }
      />

      <select
        className="form-select mt-3"
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <div className="d-flex gap-2 mt-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!taskName.trim()) return;

            setTodo([
              ...todo,
              {
                id: Date.now(),
                title: taskName,
                priority,
                date: new Date().toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "short",
                  }
                ),
              },
            ]);

            addNotification(
  "New Task Created",
  `${taskName} task added to Todo board`,
  "success"
);

            setTaskName("");
            setPriority("Medium");
            setShowModal(false);
          }}
        >
          Add Task
        </button>

        <button
          className="btn btn-danger"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


{showEditModal && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    }}
  >
    <div
      style={{
        background: darkMode ? "#0f172a" : "white",
        padding: "30px",
        borderRadius: "25px",
        width: "420px",
      }}
    >
      <h3
        style={{
          color: darkMode ? "white" : "#0f172a",
        }}
      >
        Edit Task
      </h3>

      <input
        type="text"
        className="form-control mt-3"
        value={editTaskName}
        onChange={(e) =>
          setEditTaskName(e.target.value)
        }
      />

     
 <select
  className="form-select mt-3"
  value={editPriority}
  onChange={(e) =>
    setEditPriority(e.target.value)
  }
>
  <option>High</option>
  <option>Medium</option>
  <option>Low</option>
</select>

<input
  type="date"
  className="form-control mt-3"
  value={dueDate}
  onChange={(e) =>
    setDueDate(e.target.value)
  }
/>

      <div className="d-flex gap-2 mt-4">
        <button
          className="btn btn-success"
         onClick={() => {

setTodo(todo.map(task =>
task.id === editingTask.id
? {
...task,
title: editTaskName,
priority: editPriority
}
: task
));

setProgress(progress.map(task =>
task.id === editingTask.id
? {
...task,
title: editTaskName,
priority: editPriority
}
: task
));

setCompleted(completed.map(task =>
task.id === editingTask.id
? {
...task,
title: editTaskName,
priority: editPriority
}
: task
));

addNotification(
"Task Updated",
`${editTaskName} updated successfully`,
"message"
);

setShowEditModal(false);

}}
        >
          Save
        </button>

        <button
          className="btn btn-danger"
          onClick={() =>
            setShowEditModal(false)
          }
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Kanban;