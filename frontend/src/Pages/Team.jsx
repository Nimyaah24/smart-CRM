

// react hook
import { useState, useEffect } from "react"

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
    TrendingUp,
    Trash2
}
from "lucide-react"

import { Pencil } from "lucide-react"


// TEAM COMPONENT

const Team = () => {


    const [search, setSearch] = useState("")

    
    // NAVIGATION
   

    const navigate = useNavigate()



   
    // DARK MODE
   

  const [darkMode, setDarkMode] = useState(
  JSON.parse(localStorage.getItem("darkMode")) || false
);

useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);


    
    // TEAM MEMBERS DATA
  
const [members, setMembers] = useState(() => {

  const savedMembers =
    localStorage.getItem("members")

  return savedMembers
    ? JSON.parse(savedMembers)
    : []

})

useEffect(() => {

  localStorage.setItem(
    "members",
    JSON.stringify(members)
  )

}, [members])


const [showModal, setShowModal] = useState(false)

useEffect(() => {

  localStorage.setItem(
    "members",
    JSON.stringify(members)
  )

}, [members])

const [editingId, setEditingId] = useState(null)



const [selectedMember, setSelectedMember] =
useState(null)


    
    // STATUS COLORS

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


const [newMember, setNewMember] = useState({
  name: "",
  role: "",
  status: "Online",
  email: "",
  phone: "",
  image: ""
})


const performance =
members.length > 0
? Math.round(
    (
      members.filter(
        m => m.status === "Online"
      ).length
      /
      members.length
    ) * 100
  )
: 0

const filteredMembers = members.filter((member)=>
 member.name
 .toLowerCase()
 .includes(search.toLowerCase())
)


    return (

       
        // MAIN CONTAINER
      

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
  style={{ width: "300px" }}
>
  <Search
    size={18}
    style={{
      position: "absolute",
      top: "16px",
      left: "15px",
      color: "#64748b",
      zIndex: 10
    }}
  />

  <input
    type="text"
    placeholder="Search members..."
    className="form-control border-0 search-input"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      background: darkMode
        ? "#0f172a"
        : "white",
      color: darkMode
        ? "white"
        : "#0f172a",
      borderRadius: "18px",
      padding: "14px 14px 14px 45px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
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



                <div className="mt-4">

<button
  className="btn"
onClick={() => {

  setEditingId(null)

  setNewMember({
    name: "",
    role: "",
    status: "Online",
    email: "",
    phone: "",
    image: ""
  })

  setShowModal(true)
}}
  style={{
    background:
      "linear-gradient(135deg,#2563eb,#3b82f6)",
    color: "white",
    border: "none",
    borderRadius: "18px",
    padding: "14px 28px",
    fontWeight: "600"
  }}
>
  + Add Member
</button>

</div>

            </div>









           
            {/* TOP STATS */}
         

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
{members.length}
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
{
 members.filter(
  m => m.status === "Online"
 ).length
}
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
  {performance}%
</h1>
                            </div>

                            <TrendingUp size={50} />

                        </div>

                    </div>

                </div>

            </div>



            {/* TEAM MEMBERS */}

            <div className="row">



               {filteredMembers.map((member) => (

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

                              
<div className="d-flex gap-2">

<Pencil
  size={18}
  color="#2563eb"
  style={{ cursor: "pointer" }}
  onClick={() => {

    setNewMember(member)

    setEditingId(member.id)

    setShowModal(true)

  }}
/>

<Trash2
  size={18}
  color="red"
  style={{ cursor: "pointer" }}
  onClick={() => {

    addNotification(
      "Member Removed",
      `${member.name} removed from team`,
      "warning"
    )

    setMembers(
      members.filter(
        (m) => m.id !== member.id
      )
    )

  }}
/>

</div>


                            </div>



                            {/* PROFILE IMAGE */}

                            <div className="text-center mt-4">

                               <img
  src={member.image}
  alt={member.name}
  style={{
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
    border: "5px solid rgba(255,255,255,0.2)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
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
 onClick={() => {

addNotification(
  "Profile Viewed",
  `${member.name} profile opened`,
  "activity"
)

setSelectedMember(member)

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

{
  showModal && (

    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        background: "rgba(0,0,0,0.7)",
        zIndex: 9999,
        backdropFilter: "blur(8px)"
      }}
    >

    <div
 className="bg-white p-4"
 style={{
   width:"500px",
   borderRadius:"30px",
   animation:"popup .3s ease",
   boxShadow:"0 20px 60px rgba(0,0,0,.25)"
 }}
>

       <h3 className="fw-bold mb-4">
 {editingId ? "Edit Member" : "Add Team Member"}
</h3>

<label className="mb-2 fw-semibold">
Name
</label>
        <input
          type="text"
          placeholder="Enter Your Name"
           value={newMember.name}
          className="form-control mb-3 border-0"
style={{
height:"55px",
borderRadius:"16px",
background:"#f8fafc"
}}
          onChange={(e)=>
            setNewMember({
              ...newMember,
              name:e.target.value
            })
          }
        />

<label className="mb-2 fw-semibold">
Role
</label>

        <input
          type="text"
          placeholder="Enter Your Role"
         className="form-control mb-3 border-0"
          value={newMember.role}
style={{
height:"55px",
borderRadius:"16px",
background:"#f8fafc"
}}
          onChange={(e)=>
            setNewMember({
              ...newMember,
              role:e.target.value
            })
          }
        />


<label className="mb-2 fw-semibold">
Email
</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={newMember.email}
      className="form-control mb-3 border-0"
style={{
height:"55px",
borderRadius:"16px",
background:"#f8fafc"
}}
          onChange={(e)=>
            setNewMember({
              ...newMember,
              email:e.target.value
            })
          }
        />


<label className="mb-2 fw-semibold">
 Profile Image
</label>
<input
  type="file"
  className="form-control mb-3"
 onChange={(e) => {

  const file = e.target.files[0]

  if (file) {

    const reader = new FileReader()

    reader.onloadend = () => {

      setNewMember({
        ...newMember,
        image: reader.result
      })

    }

    reader.readAsDataURL(file)

  }

}}
/>
<div
  className="d-flex justify-content-center"
  style={{
    marginTop: "20px",
    marginBottom: "20px"
  }}
>
  {newMember.image && (
    <img
      src={newMember.image}
      alt="Preview"
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "4px solid #e2e8f0",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
      }}
    />
  )}
</div>



<label className="mb-2 fw-semibold">
Phone Number
</label>

        <input
          type="text"
          placeholder="Enter Your Phone Number"
           value={newMember.phone}
          className="form-control mb-3 border-0"
style={{
height:"55px",
borderRadius:"16px",
background:"#f8fafc"
}}
          onChange={(e)=>
            setNewMember({
              ...newMember,
              phone:e.target.value
            })
          }
        />

<label className="fw-semibold mb-2">
 Status
</label>
        <select
          className="form-control mb-4"
            value={newMember.status}
          onChange={(e)=>
            setNewMember({
              ...newMember,
              status:e.target.value
            })
          }
        >
          <option>Online</option>
          <option>Busy</option>
          <option>Offline</option>
        </select>

        <div className="d-flex gap-3">

          <button
            className="btn btn-secondary flex-grow-1"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>

          <button
            className=" flex-grow-1 btn btn-danger"
            style={{
border:"none",
height:"55px",

fontWeight:"600"
}}
    

onClick={() => {

let updatedMembers

if(editingId){

addNotification(
  "Member Updated",
  `${newMember.name} profile updated`,
  "message"
)

  updatedMembers =
    members.map((m)=>
      m.id === editingId
      ? { ...newMember, id: editingId }
      : m
    )

}else{

  updatedMembers = [
    ...members,
    {
      id: Date.now(),
      ...newMember
    }
  ]

}
if(!editingId){

addNotification(
  "New Team Member",
  `${newMember.name} joined the team`,
  "success"
);

}

setMembers(updatedMembers)

localStorage.setItem(
  "members",
  JSON.stringify(updatedMembers)
)

setEditingId(null)

setNewMember({
  name: "",
  role: "",
  status: "Online",
  email: "",
  phone: "",
  image: ""
})

setShowModal(false)

}}

          >
            Save Member
          </button>

        </div>

      </div>

    </div>

  )
}






{
selectedMember && (

<div
 className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center"
 style={{
  background:"rgba(0,0,0,0.7)",
  zIndex:9999
 }}
>

<div
 className="bg-white p-4"
 style={{
  width:"400px",
  borderRadius:"20px"
 }}
>
<div className="text-center mb-3">
  <img
    src={selectedMember.image}
    alt={selectedMember.name}
    style={{
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover"
    }}
  />
</div>
<h3>{selectedMember.name}</h3>

<p>{selectedMember.role}</p>

<p>{selectedMember.email}</p>

<p>{selectedMember.phone}</p>

<button
 className="btn btn-danger"
 onClick={() =>
  setSelectedMember(null)
 }
>
 Close
</button>

</div>

</div>

)
}


<style>

{`

@keyframes popup{

0%{
transform:scale(.7);
opacity:0;
}

100%{
transform:scale(1);
opacity:1;
}

}

`}

</style>

        </div>

    )



    

}



export default Team