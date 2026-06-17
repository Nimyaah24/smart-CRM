
// react hook
import { useState , useEffect} from "react"

// react router
import { useNavigate } from "react-router-dom"

// dark mode component
import DarkModeToggle from "../Components/DarkModeToggle"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// icons
import {
ArrowLeft,
Bell,
Search,
ShieldCheck,
Lock,
User,
Mail,
KeyRound,
Moon,
Globe,
Save,
Eye,
EyeOff,
Activity
}
from "lucide-react"




// SETTINGS COMPONENT

const Settings = () => {

    /* NAVIGATION */

    const navigate = useNavigate()




    /*DARK MODE STATE */

   const [darkMode, setDarkMode] = useState(
  JSON.parse(localStorage.getItem("darkMode")) || false
)


const [themeColor, setThemeColor] = useState(
localStorage.getItem("themeColor") || "#2563eb"
)
useEffect(() => {

localStorage.setItem(
"themeColor",
themeColor
)

}, [themeColor])

// darkmode
useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  )
}, [darkMode])



   
    // FORM STATES
   
const [currentPassword,setCurrentPassword] = useState("")
const [newPassword,setNewPassword] = useState("")
const [confirmPassword,setConfirmPassword] = useState("")
    const [name, setName] = useState("Admin User")

    const [email, setEmail] = useState("admin@gmail.com")

    const [password, setPassword] = useState("123456")
    const [profileImage, setProfileImage] =
useState(
localStorage.getItem("profileImage")
|| ""
)
const [activeTab, setActiveTab] =
useState("profile")


const [systemInfo] = useState({
  browser: navigator.userAgent,
  language: navigator.language,
  platform: navigator.platform,
  screen:
    window.innerWidth +
    " x " +
    window.innerHeight,
})

const handleBackup = () => {

const data = {
name,
email,
password,
language,
fontSize,
themeColor
}

const blob = new Blob(
[JSON.stringify(data,null,2)],
{
type:"application/json"
}
)

const url =
URL.createObjectURL(blob)

const a =
document.createElement("a")

a.href = url

a.download =
"settings-backup.json"

a.click()

}

const [language,setLanguage] =
useState(
localStorage.getItem("language") || "English"
)

    const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {

const value = searchTerm.toLowerCase()

if(value.includes("profile")){
setActiveTab("profile")
}

else if(value.includes("security")){
setActiveTab("security")
}

else if(value.includes("appearance")){
setActiveTab("appearance")
}

else if(value.includes("language")){
setActiveTab("language")
}

else if(value.includes("notification")){
setActiveTab("notifications")
}

}, [searchTerm])

    const [showPassword,setShowPassword] =
useState(false)

const [showCurrentPassword,setShowCurrentPassword] = useState(false)
const [showNewPassword,setShowNewPassword] = useState(false)
const [showConfirmPassword,setShowConfirmPassword] = useState(false)

    // seeings load
    useEffect(() => {

const savedSettings =
JSON.parse(
localStorage.getItem("settings")
)

if(savedSettings){

setName(savedSettings.name)
setEmail(savedSettings.email)
setPassword(savedSettings.password)

}

}, [])

const [notifications, setNotifications] =
useState([])


const [notificationEnabled,
setNotificationEnabled] =
useState(

JSON.parse(
localStorage.getItem(
"notificationEnabled"
)
) || true

)
useEffect(() => {

localStorage.setItem(
"notificationEnabled",
JSON.stringify(
notificationEnabled
)
)

}, [notificationEnabled])



const handleImageUpload = (e) => {

const file = e.target.files[0]

if(!file) return

const reader = new FileReader()

reader.onloadend = () => {

setProfileImage(reader.result)

localStorage.setItem(
"profileImage",
reader.result
)

}

reader.readAsDataURL(file)

}




const handleLogout = async () => {

  try {

    await fetch(
      "https://smart-crm-pcys.onrender.com/api/user/logout",
      {
        method: "POST",
        credentials: "include",
      }
    )

    navigate("/")

  } catch (err) {

    console.log(err)

  }

}

// notif load

useEffect(() => {

  const savedNotifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || []

  setNotifications(savedNotifications)

}, [])

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

                            Settings Panel

                        </h2>

                        <p
                            className="m-0 mt-1"

                            style={{
                                color: "#64748b"
                            }}
                        >

                            Manage application preferences

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
 value={searchTerm}
  onChange={(e)=>setSearchTerm(e.target.value)}
                            placeholder="Search settings..."

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
    background: darkMode
      ? "#1e293b"
      : "white",
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
background: darkMode
  ? "#1e293b"
  : "white",
cursor:"pointer",
boxShadow:
"0 10px 30px rgba(0,0,0,0.08)"
}}
>
<Bell
size={20}
color={
  darkMode
    ? "white"
    : "#0f172a"
}
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
borderRadius:"50%",

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

            </div>



            {/* HERO SECTION */}
           

            <div

                className="p-5 mb-4 position-relative overflow-hidden"

                style={{

                    borderRadius: "35px",

                   background:
"linear-gradient(135deg,#020617,#0f172a,#1e293b)",

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

                    Account Settings

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

                    Customize your profile, security and application settings with modern SaaS dashboard experience.

                </p>

            </div>



            
            {/* SETTINGS CONTENT */}
          

            <div className="row">



                {/* LEFT SIDEBAR */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "rgba(15,23,42,0.95)"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(12px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        {/* MENU 1 */}

                      <div
onClick={() => setActiveTab("profile")}
className="d-flex align-items-center gap-3 p-3 mb-3"
style={{
cursor:"pointer",
borderRadius:"20px",

background:
activeTab === "profile"
? "linear-gradient(to right,#2563eb,#3b82f6)"
: darkMode
? "#1e293b"
: "#f8fafc",

color:
activeTab === "profile"
? "white"
: darkMode
? "white"
: "#0f172a"
}}
>

                            <User size={20} />

                            Profile Settings

                        </div>



                        {/* MENU 2 */}

                       <div
onClick={() => setActiveTab("security")}
className="d-flex align-items-center gap-3 p-3 mb-3"
style={{
cursor:"pointer",
borderRadius:"20px",

background:
activeTab === "security"
? "linear-gradient(to right,#2563eb,#3b82f6)"
: darkMode
? "#1e293b"
: "#f8fafc",

color:
activeTab === "security"
? "white"
: darkMode
? "white"
: "#0f172a"
}}
>
<ShieldCheck size={20}/>
Security
</div>



                        {/* MENU 3 */}

   <div
onClick={() => setActiveTab("appearance")}
className="d-flex align-items-center gap-3 p-3 mb-3"
style={{
cursor:"pointer",
borderRadius:"20px",

background:
activeTab === "appearance"
? "linear-gradient(to right,#2563eb,#3b82f6)"
: darkMode
? "#1e293b"
: "#f8fafc",

color:
activeTab === "appearance"
? "white"
: darkMode
? "white"
: "#0f172a"
}}
>
<Moon size={20}/>
Appearance
</div>



                        {/* MENU 4 */}

<div
onClick={() => setActiveTab("language")}
className="d-flex align-items-center gap-3 p-3"
style={{
cursor:"pointer",
borderRadius:"20px",

background:
activeTab === "language"
? "linear-gradient(to right,#2563eb,#3b82f6)"
: darkMode
? "#1e293b"
: "#f8fafc",

color:
activeTab === "language"
? "white"
: darkMode
? "white"
: "#0f172a"
}}
>
<Globe size={20}/>
Language
</div>


<div
onClick={() => setActiveTab("system")}
className="d-flex align-items-center gap-3 p-3 mt-3"
style={{
cursor:"pointer",
borderRadius:"20px",

background:
activeTab === "system"
? "linear-gradient(to right,#2563eb,#3b82f6)"
: darkMode
? "#1e293b"
: "#f8fafc",

color:
activeTab === "system"
? "white"
: darkMode
? "white"
: "#0f172a"
}}
>

<Activity size={20}/>
System Info

</div>


<div
onClick={() => setActiveTab("notifications")}
className="d-flex align-items-center gap-3 p-3 mt-3"
style={{
cursor:"pointer",
borderRadius:"20px",

background:
activeTab === "notifications"
? "linear-gradient(to right,#2563eb,#3b82f6)"
: darkMode
? "#1e293b"
: "#f8fafc",

color:
activeTab === "notifications"
? "white"
: darkMode
? "white"
: "#0f172a"
}}
>
<Bell size={20}/>
Notifications
</div>

                    </div>

                </div>



                {/* RIGHT CONTENT */}

                <div className="col-lg-8 mb-4">

                    <div

                        className="p-5"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "rgba(15,23,42,0.8)"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(12px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >



{
activeTab === "profile" && (
<>

                        {/* TITLE */}

                        <h3

                            className="fw-bold mb-4"

                            style={{

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            Profile Information

                        </h3>

<div
className="mb-4"
style={{
display:"flex",
alignItems:"center",
gap:"20px"
}}
>

<img
src={
profileImage ||
"https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff"
}
alt="profile"
style={{
width:"90px",
height:"90px",
borderRadius:"50%",
objectFit:"cover",
border:"3px solid #3b82f6"
}}
/>

<div>

<label
style={{
display:"inline-flex",
alignItems:"center",
justifyContent:"center",
padding:"10px 18px",
background:"rgba(37,99,235,0.12)",
color:"#2563eb",
border:"1px solid rgba(37,99,235,0.25)",
borderRadius:"12px",
cursor:"pointer",
fontWeight:"600",
width:"fit-content"
}}
>
Upload Photo

<input
type="file"
accept="image/*"
onChange={handleImageUpload}
hidden
/>

</label>

<p
className="mt-2 mb-0"
style={{
fontSize:"13px",
color:"#64748b"
}}
>
JPG, PNG up to 2MB
</p>

</div>

</div>

                        {/* NAME */}

                        <div className="mb-4">

                            <label

                                className="mb-2 fw-semibold"

                                style={{
                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a"
                                }}
                            >

                                Full Name

                            </label>



                            <div className="position-relative">

                                <User

                                    size={18}

                                    style={{

                                        position: "absolute",

                                        top: "20px",

                                        left: "15px",

                                        color: "#64748b"

                                    }}
                                />



                                <input

                                    type="text"

                                    value={name}

                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }

                                    className="form-control border-0"

                                    style={{

                                        height: "60px",

                                        borderRadius: "18px",

                                        paddingLeft: "45px",

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

                            </div>

                        </div>



                        {/* EMAIL */}

                        <div className="mb-4">

                            <label

                                className="mb-2 fw-semibold"

                                style={{
                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a"
                                }}
                            >

                                Email Address

                            </label>



                            <div className="position-relative">

                                <Mail

                                    size={18}

                                    style={{

                                        position: "absolute",

                                        top: "20px",

                                        left: "15px",

                                        color: "#64748b"

                                    }}
                                />



                                <input

                                    type="email"

                                    value={email}

                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }

                                    className="form-control border-0"

                                    style={{

                                        height: "60px",

                                        borderRadius: "18px",

                                        paddingLeft: "45px",

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

                            </div>

                        </div>



                        {/* PASSWORD */}

                        <div className="mb-4">

                            <label

                                className="mb-2 fw-semibold"

                                style={{
                                    color:
                                        darkMode
                                            ? "white"
                                            : "#0f172a"
                                }}
                            >

                                Password

                            </label>



                            <div className="position-relative">

                                <KeyRound

                                    size={18}

                                    style={{

                                        position: "absolute",

                                        top: "20px",

                                        left: "15px",

                                        color: "#64748b"

                                    }}
                                />



                                <input

                                    type={
showPassword
? "text"
: "password"
}

value={password}

onChange={(e)=>
setPassword(e.target.value)
}


              className="form-control border-0"

                                    style={{

                                        height: "60px",
paddingRight:"50px",
                                        borderRadius: "18px",

                                        paddingLeft: "45px",

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


<div
onClick={() =>
setShowPassword(
!showPassword
)
}
style={{
position:"absolute",
right:"15px",
top:"50%",
transform:"translateY(-50%)",
cursor:"pointer"
}}
>

{
showPassword
? (
  <EyeOff
    size={18}
    color={
      darkMode
      ? "white"
      : "#747577"
    }
  />
)
: (
  <Eye
    size={18}
    color={
      darkMode
      ? "white"
      : "#747577"
    }
  />
)
}



</div>





                            </div>

                        </div>


                      



                        {/* SAVE BUTTON */}

                        <button

                          
       onClick={() => {

if(!name || !email || !password){
toast.error("Please fill all fields")
return
}

localStorage.setItem(
  "settings",
  JSON.stringify({
    name,
    email,
    password
  })
)

toast.success("Settings Saved Successfully")

}}

  className="btn mt-4 px-5 py-3"
                            style={{

                                borderRadius: "18px",

                                background:
                                    "linear-gradient(to right,#2563eb,#3b82f6)",

                                color: "white",

                                border: "none",

                                fontWeight: "600"

                            }}
                        >

                            <Save
                                size={18}
                                className="me-2"
                            />

                            Save Changes

                        </button>
                        </>
)}

{
activeTab === "security" && (
<>
  <h3
    className="fw-bold mb-4"
    style={{
      color: darkMode ? "white" : "#0f172a"
    }}
  >
    Security Settings
  </h3>

  <div
    className="p-4"
    style={{
      borderRadius: "20px",
     background: darkMode
? "linear-gradient(135deg,#0f172a,#1e293b)"
: "#f8fafc"
    }}
  >

    {/* Current Password */}
   <div className="position-relative">

<input
type={
  showCurrentPassword
    ? "text"
    : "password"
}
placeholder="Current Password"
value={currentPassword}
onChange={(e)=>
setCurrentPassword(e.target.value)
}
className="form-control border-0"
style={{
height:"55px",
borderRadius:"15px",
paddingRight:"50px",
background: darkMode
? "#0f172a"
: "white",
color: darkMode
? "white"
: "#0f172a"
}}
/>

<div
onClick={() =>
setShowCurrentPassword(
!showCurrentPassword
)
}
style={{
position:"absolute",
right:"15px",
top:"50%",
transform:"translateY(-50%)",
cursor:"pointer"
}}
>
{
showCurrentPassword
? <EyeOff
    size={18}
    color={
      darkMode
      ? "white"
      : "#747577"
    }
  />
: <Eye
    size={18}
    color={
      darkMode
      ? "white"
      : "#747577"
    }
  />
}
</div>

</div>

    {/* New Password */}
  <div className="position-relative mt-4">

<input
placeholder="New Password"
type={
  showNewPassword
  ? "text"
  : "password"
}
value={newPassword}
onChange={(e)=>
setNewPassword(e.target.value)
}
className="form-control border-0"
style={{
height:"55px",
borderRadius:"15px",
paddingRight:"50px",
background: darkMode
? "#0f172a"
: "white",
color: darkMode
? "white"
: "#0f172a"
}}


/>

<div
onClick={() =>
setShowNewPassword(
!showNewPassword
)
}
style={{
position:"absolute",
right:"15px",
top:"50%",
transform:"translateY(-50%)",
cursor:"pointer"
}}
>
{
showNewPassword
? <EyeOff
    size={18}
    color={
      darkMode
      ? "white"
      : "#747577"
    }
  />
: <Eye
    size={18}
    color={
      darkMode
      ? "white"
      : "#747577"
    }
  />
}
</div>

</div>

    {/* Confirm Password */}
   <div className="position-relative mt-4">

<input
type="password"
value={confirmPassword}
placeholder=" Confirm Password"
onChange={(e)=>
setConfirmPassword(e.target.value)
}
className="form-control border-0  "
style={{
height:"55px",
borderRadius:"15px",
background: darkMode
? "#0f172a"
: "white",
color: darkMode
? "white"
: "#0f172a"
}}
/>

<div
onClick={() =>
setShowConfirmPassword(
!showConfirmPassword
)
}
style={{
position:"absolute",
right:"15px",
top:"50%",
transform:"translateY(-50%)",
cursor:"pointer"
}}
>
{
showConfirmPassword
?  <EyeOff
    size={18}
    color={
      darkMode
      ? "white"
      : "#747577"
    }
  />
:  <Eye
    size={18}
    color={
      darkMode
      ? "white"
      : "#747577"
    }
  />
}
</div>

</div>

    <button className="mt-4 btn btn-primary"
 onClick={() => {

if(
!currentPassword ||
!newPassword ||
!confirmPassword
){
toast.error("Please fill all fields")
return
}

if(currentPassword !== password){
toast.error("Current password is incorrect")
return
}

if(newPassword !== confirmPassword){
toast.error("Passwords do not match")
return
}

if(newPassword.length < 6){
toast.error("Password must be at least 6 characters")
return
}

setPassword(newPassword)

localStorage.setItem(
"settings",
JSON.stringify({
name,
email,
password:newPassword
})
)

toast.success("Password Updated Successfully")

setCurrentPassword("")
setNewPassword("")
setConfirmPassword("")

}}
>
  Update Password
</button>

  </div>
</>
)}

{
activeTab === "appearance" && (
<>
<h3
className="fw-bold mb-4"
style={{
color: darkMode ? "white" : "#0f172a"
}}
>
Appearance Settings
</h3>

<div
className="p-4"
style={{
borderRadius:"20px",
background: darkMode
? "#1e293b"
: "#f8fafc"
}}
>

<div
className="d-flex justify-content-between align-items-center"
>

<div>
<h5
style={{
color: darkMode
? "white"
: "#0f172a"
}}
>
Dark Mode
</h5>

<p
style={{
color:"#64748b",
marginBottom:0
}}
>
Enable dark theme for dashboard
</p>

</div>

<DarkModeToggle
darkMode={darkMode}
setDarkMode={setDarkMode}
/>

</div>

</div>
</>
)}

{
activeTab === "language" && (
<>

<h3
className="fw-bold mb-4"
style={{
color:
darkMode
? "white"
: "#0f172a"
}}
>
Language Settings
</h3>

<div
className="p-4"
style={{
borderRadius:"20px",
background:
darkMode
? "#1e293b"
: "#f8fafc"
}}
>

<label
className="fw-semibold mb-2"
style={{
color:
darkMode
? "white"
: "#0f172a"
}}
>
Select Language
</label>

<select
value={language}
onChange={(e)=>{
setLanguage(e.target.value)
localStorage.setItem(
"language",
e.target.value
)
}}
className="form-select"
style={{
height:"55px",
borderRadius:"15px",
background:
darkMode
? "#0f172a"
: "white",
color:
darkMode
? "white"
: "#0f172a"
}}
>

<option>English</option>
<option>Malayalam</option>
<option>Hindi</option>

</select>

</div>

</>
)
}

{
activeTab === "system" && (
<>
<h3
className="fw-bold mb-4"
style={{
color:
darkMode
? "white"
: "#0f172a"
}}
>
System Information
</h3>

<div
className="p-4"
style={{
borderRadius:"20px",
background:
darkMode
? "#0f172a"
: "#f8fafc",

color:
darkMode
? "white"
: "#0f172a"
}}
>

<div
className="mb-3"
style={{
color: darkMode
? "white"
: "#0f172a"
}}
>
<strong
style={{
color: darkMode ? "#ffffff" : "#0f172a"
}}
>
Browser:
</strong>
<p
style={{
color: darkMode ? "#cbd5e1" : "#334155"
}}
>
{systemInfo.browser}
</p>
</div>

<div
className="mb-3"
style={{
color: darkMode
? "white"
: "#0f172a"
}}
>
<strong>Language:</strong>
<p
style={{
color: darkMode ? "#cbd5e1" : "#334155"
}}
>
{systemInfo.browser}
</p>
</div>

<div className="mb-3">
<strong>Platform:</strong>
<p
style={{
color: darkMode ? "#cbd5e1" : "#334155"
}}
>
{systemInfo.browser}
</p>
</div>

<div className="mb-3">
<strong>Screen:</strong>
<p
style={{
color: darkMode ? "#cbd5e1" : "#334155"
}}
>
{systemInfo.browser}
</p>
</div>

</div>
</>
)
}

{
activeTab === "notifications" && (
<>
<h3
className="fw-bold mb-4"
style={{
color: darkMode ? "white" : "#0f172a"
}}
>
Notification Settings
</h3>

<div
className="p-4"
style={{
borderRadius:"20px",
background:
darkMode
? "#1e293b"
: "#f8fafc"
}}
>

<div className="form-check form-switch mb-4">

<input
className="form-check-input"
type="checkbox"
checked={notificationEnabled}
onChange={() =>
setNotificationEnabled(
!notificationEnabled
)
}
/>

<label
className="form-check-label ms-2"
style={{
color:
darkMode
? "white"
: "#0f172a"
}}
>
Enable Notifications
</label>

</div>

<p
style={{
color:"#64748b"
}}
>
Receive alerts, reminders and updates from the system.
</p>

</div>
</>
)
}



<ToastContainer
position="top-right"
autoClose={2000}
theme={darkMode ? "dark" : "light"}
/>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Settings