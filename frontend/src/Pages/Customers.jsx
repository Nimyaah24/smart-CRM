
// react hooks
import { useEffect, useState } from "react"

// navigation
import { useNavigate } from "react-router-dom"

// darkmode component
import DarkModeToggle from "../components/DarkModeToggle"

// icons
import { LayoutDashboard, Users, Bell, Search, Plus, Trash2, Pencil, Mail, Phone, MapPin, X, LoaderCircle } from "lucide-react"

// toastify
import { toast } from "react-toastify"

// customer api
import { getCustomers, addCustomer, deleteCustomer, updateCustomer } from "../Api/customerApi"


// CUSTOMERS COMPONENT
const Customers = () => {

    // NAVIGATION
    const navigate = useNavigate()

    // DARK MODE
    const [darkMode, setDarkMode] = useState(false)

    // LOADING
    const [loading, setLoading] = useState(false)

    // SEARCH STATE
    const [search, setSearch] = useState("")

    // CUSTOMER DATA
    const [customers, setCustomers] = useState([])

    // MODAL STATE
    const [showModal, setShowModal] = useState(false)

    // EDIT MODE
    const [editId, setEditId] = useState(null)

    // FORM STATE

    const [form, setform] = useState({ name: "", email: "", phone: "", location: "" })

    // HANDLE CHANGE

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // GET CUSTOMERS
    const fetchCustomers = async () => {

        try {
            setLoading(true)

            // backend api call
            const res = await getCustomers()

            // state update
            setCustomers(res.customers)

        }

        catch (err) {

            console.log(err)
            toast.error("failed to load customers")

        }

        finally {
            setLoading(false)
        }

    }

    // USE EFFECT
    useEffect(() => {
        fetchCustomers()
    }, [])


    // ADD CUSTOMER
    const handleAddCustomer = async () => {

        try {

            // validation
            if (!form.name || !form.email || !form.phone || !form.location) {
                toast.warning("fill all fields")
                return
            }
            setLoading(true)

            // add customer
            const res = await addCustomer(form)

            // success toast
            toast.success(res.msg)

            // close modal
            setShowModal(false)

            // clear form
            setform({ name: "", email: "", phone: "", location: "" })

            // reload customers
            fetchCustomers()

        }

        catch (err) {

            console.log(err)

            toast.error("add customer failed")

        }

        finally {

            setLoading(false)

        }

    }


    // DELETE CUSTOMER
    const handleDelete = async (id) => {

        try {

            // confirm
            const confirmDelete = window.confirm("delete customer ?")

            if (!confirmDelete) {
                return
            }

            // delete api
            const res = await deleteCustomer(id)

            toast.success(res.msg)

            // reload
            fetchCustomers()
        }

        catch (err) {
            console.log(err)
            toast.error("delete failed")
        }

    }


    // OPEN EDIT
    const openEditModal = (item) => {
        // modal open
        setShowModal(true)

        // edit id set
        setEditId(item._id)

        // form fill
        setform({ name: item.name, email: item.email, phone: item.phone, location: item.location })

    }



    // UPDATE CUSTOMER
    const handleUpdateCustomer = async () => {

        try {
            setLoading(true)

            // update api
            const res = await updateCustomer(editId, form)

            // success toast
            toast.success(res.msg)

            // close modal
            setShowModal(false)

            // clear form
            setform({ name: "", email: "", phone: "", location: "" })

            // clear edit id
            setEditId(null)

            // reload
            fetchCustomers()

        }

        catch (err) {
            console.log(err)
            toast.error("update failed")
        }
        finally {
            setLoading(false)
        }

    }


    // FILTERED CUSTOMERS
    const filteredCustomers = customers.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))


    // LOGOUT
    const handleLogout = async () => {
        try {
            await fetch("http://localhost:5000/api/user/logout",
                {
                    method: "POST",
                    credentials: "include"
                }
            )

            navigate("/")

        }

        catch (err) {
            console.log(err)
        }

    }



    return (

        // MAIN CONTAINER
        <div className="container-fluid" style={{ minHeight: "100vh", background: darkMode ? "#020617" : "#eef2ff", overflow: "hidden" }}  >

            <div className="row">

                {/* SIDEBAR */}
                <div className="col-lg-2 p-4 d-none d-lg-block" style={{minHeight: "100vh",  background: darkMode ? "#0f172a"  : "white", borderRight:  darkMode  ? "1px solid #1e293b": "1px solid #e2e8f0"}}  >


                    {/* logo */}
                    <h2 className="fw-bold mb-5" style={{color: darkMode ? "white" : "#0f172a" }}>Smart CRM </h2>


                    {/* dashboard */}
                    <button onClick={() => navigate("/dashboard")} className="btn w-100 d-flex align-items-center gap-3 mb-3"  style={{background: darkMode ? "#1e293b": "#f1f5f9", padding: "15px", borderRadius: "16px"}} > <LayoutDashboard size={20} /> Dashboard</button>


                    {/* customer */}
                    <button className="btn w-100 d-flex align-items-center gap-3 text-white" style={{ background: "linear-gradient(to right,#2563eb,#3b82f6)", padding: "15px",borderRadius: "16px"}}  > <Users size={20} /> Customers   </button>


                    {/* image */}
                    <div className="mt-5 text-center">

                        <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="admin" style={{  width: "120px"}} />

                        <h5 className="mt-3" style={{  color: darkMode? "white" : "#0f172a" }} > CRM Admin </h5>

                    </div>

                </div>


                {/* RIGHT SIDE */}
        
                <div className="col-lg-10 p-4">

                    {/* TOP NAVBAR */}
                    <div className="d-flex justify-content-between align-items-center mb-4" >

                    {/* left */}
                        <div>
                            <h1 className="fw-bold"style={{ color: darkMode ? "white" : "#0f172a" }} > Customer Management</h1>

                            <p style={{  color: darkMode  ? "#94a3b8" : "#64748b" }}>  Manage your business clients professionally</p>
                        </div>


                        {/* right */}
                        <div className="d-flex align-items-center gap-3">

                            {/* bell */}
                            <div className="d-flex justify-content-center align-items-center" style={{  width: "50px", height: "50px",  borderRadius: "15px", background:darkMode   ? "#0f172a" : "white" }} > <Bell /> </div>

                            {/* dark mode */}
                            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

                            {/* logout */}
                            <button onClick={handleLogout}  className="btn text-white" style={{  background: "linear-gradient(to right,#ef4444,#dc2626)",  padding:  "12px 25px",  borderRadius:"15px" }} >  Logout </button>

                        </div>

                    </div>


                    {/* TOP CARDS */}
                  

                    <div className="row mb-4">



                        {/* card */}
                        <div className="col-md-4 mb-3">

                            <div
                                className="p-4"

                                style={{

                                    borderRadius: "28px",

                                    background:
                                        darkMode
                                            ? "#0f172a"
                                            : "white",

                                    boxShadow:
                                        "0 10px 40px rgba(0,0,0,0.05)"

                                }}
                            >

                                <h5>Total Customers</h5>

                                <h1 className="fw-bold">

                                    {customers.length}

                                </h1>

                            </div>

                        </div>



                        {/* card */}
                        <div className="col-md-4 mb-3">

                            <div
                                className="p-4"

                                style={{

                                    borderRadius: "28px",

                                    background:
                                        darkMode
                                            ? "#0f172a"
                                            : "white"

                                }}
                            >

                                <h5>Active Clients</h5>

                                <h1 className="fw-bold">

                                    92%

                                </h1>

                            </div>

                        </div>



                        {/* card */}
                        <div className="col-md-4 mb-3">

                            <div
                                className="p-4"

                                style={{

                                    borderRadius: "28px",

                                    background:
                                        darkMode
                                            ? "#0f172a"
                                            : "white"

                                }}
                            >

                                <h5>Business Growth</h5>

                                <h1 className="fw-bold">

                                    +28%

                                </h1>

                            </div>

                        </div>

                    </div>



                    {/*
                    ========================================
                    ACTION BAR
                    ========================================
                    */}

                    <div
                        className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
                    >



                        {/* search */}
                        <div
                            className="d-flex align-items-center px-3"

                            style={{

                                width: "350px",

                                height: "60px",

                                borderRadius: "18px",

                                background:
                                    darkMode
                                        ? "#0f172a"
                                        : "white"

                            }}
                        >

                            <Search />



                            <input

                                type="text"

                                placeholder="Search customers..."

                                value={search}

                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }

                                className="form-control border-0 shadow-none"

                                style={{

                                    background:
                                        "transparent"

                                }}
                            />

                        </div>



                        {/* add button */}
                        <button

                            onClick={() => {

                                setShowModal(true)

                                setEditId(null)

                                setform({

                                    name: "",
                                    email: "",
                                    phone: "",
                                    location: ""

                                })

                            }}

                            className="btn text-white d-flex align-items-center gap-2"

                            style={{

                                background:
                                    "linear-gradient(to right,#2563eb,#3b82f6)",

                                borderRadius:
                                    "18px",

                                padding:
                                    "15px 25px"

                            }}
                        >

                            <Plus size={20} />

                            Add Customer

                        </button>

                    </div>



                    {/*
                    ========================================
                    TABLE
                    ========================================
                    */}

                    <div
                        className="table-responsive p-4"

                        style={{

                            borderRadius: "30px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "white"

                        }}
                    >



                        {/* loading */}
                        {

                            loading ? (

                                <div className="text-center p-5">

                                    <LoaderCircle
                                        className="spin"
                                        size={45}
                                    />

                                </div>

                            )

                                :

                                (

                                    <table className="table align-middle">

                                        <thead>

                                            <tr>

                                                <th>User</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Location</th>
                                                <th>Actions</th>

                                            </tr>

                                        </thead>



                                        <tbody>

                                            {

                                                filteredCustomers.length > 0 ?

                                                    (

                                                        filteredCustomers.map((item) => (

                                                            <tr key={item._id}>



                                                                {/* user */}
                                                                <td>

                                                                    <div className="d-flex align-items-center gap-3">

                                                                        <img

                                                                            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"

                                                                            alt="user"

                                                                            style={{

                                                                                width: "50px",

                                                                                height: "50px",

                                                                                borderRadius: "50%"

                                                                            }}
                                                                        />



                                                                        <div>

                                                                            <h6 className="m-0">

                                                                                {item.name}

                                                                            </h6>

                                                                            <small>

                                                                                Customer

                                                                            </small>

                                                                        </div>

                                                                    </div>

                                                                </td>



                                                                {/* email */}
                                                                <td>

                                                                    <Mail size={16} />

                                                                    {" "}

                                                                    {item.email}

                                                                </td>



                                                                {/* phone */}
                                                                <td>

                                                                    <Phone size={16} />

                                                                    {" "}

                                                                    {item.phone}

                                                                </td>



                                                                {/* location */}
                                                                <td>

                                                                    <MapPin size={16} />

                                                                    {" "}

                                                                    {item.location}

                                                                </td>



                                                                {/* actions */}
                                                                <td>

                                                                    <div className="d-flex gap-2">



                                                                        {/* edit */}
                                                                        <button

                                                                            onClick={() =>
                                                                                openEditModal(item)
                                                                            }

                                                                            className="btn btn-warning"
                                                                        >

                                                                            <Pencil size={18} />

                                                                        </button>



                                                                        {/* delete */}
                                                                        <button

                                                                            onClick={() =>
                                                                                handleDelete(item._id)
                                                                            }

                                                                            className="btn btn-danger"
                                                                        >

                                                                            <Trash2 size={18} />

                                                                        </button>

                                                                    </div>

                                                                </td>

                                                            </tr>

                                                        ))

                                                    )

                                                    :

                                                    (

                                                        <tr>

                                                            <td
                                                                colSpan="5"
                                                                className="text-center p-5"
                                                            >

                                                                No Customers Found

                                                            </td>

                                                        </tr>

                                                    )

                                            }

                                        </tbody>

                                    </table>

                                )

                        }

                    </div>

                </div>

            </div>


            {/* MODAL */}
          
            {
                showModal && (
                    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ background:"rgba(0,0,0,0.5)",zIndex: "999" }} >

                        <div className="p-4" style={{ width: "450px", borderRadius: "30px",background:  darkMode   ? "#0f172a": "white" }} >


                            {/* top */}
                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <h3>
                                    {
                                        editId ? "Edit Customer": "Add Customer"
                                    }

                                </h3>

                                <button onClick={() =>  setShowModal(false)  }className="btn btn-light" > <X /></button>

                            </div>


                            {/* name */}
                            <input type="text" name="name" value={form.name} onChange={handlechange}  placeholder="Name" className="form-control mb-3 p-3" />


                            {/* email */}
                            <input  type="email" name="email" value={form.email} onChange={handlechange} placeholder="Email"className="form-control mb-3 p-3" />


                            {/* phone */}
                            <input type="text" name="phone"  value={form.phone} onChange={handlechange}  placeholder="Phone" className="form-control mb-3 p-3"/>


                            {/* location */}
                            <input type="text" name="location" value={form.location} onChange={handlechange} placeholder="Location" className="form-control mb-4 p-3" />


                            {/* button */}
                            <button onClick={editId ? handleUpdateCustomer: handleAddCustomer } className="btn w-100 text-white" style={{background:"linear-gradient(to right,#2563eb,#3b82f6)", borderRadius:"15px",padding:"14px" }} >
                                { editId ? "Update Customer": "Add Customer" }
                            </button>

                        </div>

                    </div>

                )
            }

        </div>

    )

}

export default Customers