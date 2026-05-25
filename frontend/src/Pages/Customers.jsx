/*
========================================
IMPORTS
========================================
*/

// react hooks
import { useEffect, useState } from "react"

// react router
import { useNavigate } from "react-router-dom"

// dark mode component
import DarkModeToggle from "../components/DarkModeToggle"

// icons
import {
    Users,
    Search,
    Plus,
    Pencil,
    Trash2,
    Mail,
    Phone,
    MapPin,
    ArrowLeft
} from "lucide-react"



/*
========================================
CUSTOMERS COMPONENT
========================================
*/

const Customers = () => {

    /*
    ========================================
    NAVIGATION
    ========================================
    */

    const navigate = useNavigate()



    /*
    ========================================
    DARK MODE STATE
    ========================================
    */

    const [darkMode, setDarkMode] = useState(false)



    /*
    ========================================
    CUSTOMER STATE
    ========================================
    */

    const [customers, setCustomers] = useState([])



    /*
    ========================================
    SEARCH STATE
    ========================================
    */

    const [search, setSearch] = useState("")



    /*
    ========================================
    FORM STATE
    ========================================
    */

    const [form, setForm] = useState({

        name: "",
        email: "",
        phone: "",
        location: ""

    })



    /*
    ========================================
    EDIT ID STATE
    ========================================
    */

    const [editId, setEditId] = useState(null)



    /*
    ========================================
    FETCH CUSTOMERS
    ========================================
    */

    const fetchCustomers = async () => {

        try {

            // api call
            const res = await fetch(
                "http://localhost:5000/api/customer/get",
                {
                    credentials: "include"
                }
            )

            // response convert json
            const data = await res.json()

            // store customer data
            setCustomers(data.customers)

        }

        catch (err) {

            console.log(err)

        }

    }



    /*
    ========================================
    COMPONENT LOAD
    ========================================
    */

    useEffect(() => {

        fetchCustomers()

    }, [])



    /*
    ========================================
    INPUT CHANGE
    ========================================
    */

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        })

    }



    /*
    ========================================
    ADD CUSTOMER
    ========================================
    */

    const addCustomer = async () => {

        try {

            await fetch(
                "http://localhost:5000/api/customer/add",
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify(form)

                }
            )

            // refresh customers
            fetchCustomers()

            // clear form
            setForm({

                name: "",
                email: "",
                phone: "",
                location: ""

            })

        }

        catch (err) {

            console.log(err)

        }

    }



    /*
    ========================================
    DELETE CUSTOMER
    ========================================
    */

    const deleteCustomer = async (id) => {

        try {

            await fetch(
                `http://localhost:5000/api/customer/delete/${id}`,
                {

                    method: "DELETE",

                    credentials: "include"

                }
            )

            // refresh customers
            fetchCustomers()

        }

        catch (err) {

            console.log(err)

        }

    }



    /*
    ========================================
    EDIT BUTTON CLICK
    ========================================
    */

    const editCustomer = (item) => {

        // store edit id
        setEditId(item._id)

        // set form values
        setForm({

            name: item.name,
            email: item.email,
            phone: item.phone,
            location: item.location

        })

    }



    /*
    ========================================
    UPDATE CUSTOMER
    ========================================
    */

    const updateCustomer = async () => {

        try {

            await fetch(
                `http://localhost:5000/api/customer/update/${editId}`,
                {

                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify(form)

                }
            )

            // refresh customer
            fetchCustomers()

            // clear form
            setForm({

                name: "",
                email: "",
                phone: "",
                location: ""

            })

            // remove edit id
            setEditId(null)

        }

        catch (err) {

            console.log(err)

        }

    }



    /*
    ========================================
    SEARCH FILTER
    ========================================
    */

    const filteredCustomers = customers.filter((item) =>

        item.name.toLowerCase().includes(search.toLowerCase())

    )



    return (

        /*
        ========================================
        MAIN CONTAINER
        ========================================
        */

        <div
            className="container-fluid"
            style={{

                minHeight: "100vh",

                background: darkMode
                    ? "#020617"
                    : "#f1f5f9",

                padding: "30px",

                transition: "0.3s"

            }}
        >



            {/*
            ========================================
            TOP NAVBAR
            ========================================
            */}

            <div
                className="d-flex justify-content-between align-items-center mb-4 p-4"

                style={{

                    borderRadius: "28px",

                    background: darkMode
                        ? "rgba(15,23,42,0.9)"
                        : "rgba(255,255,255,0.9)",

                    backdropFilter: "blur(10px)",

                    boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)"

                }}
            >



                {/* LEFT */}
                <div className="d-flex align-items-center gap-3">

                    {/* BACK BUTTON */}
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="btn"
                        style={{

                            width: "50px",

                            height: "50px",

                            borderRadius: "15px",

                            background: darkMode
                                ? "#1e293b"
                                : "#e2e8f0"

                        }}
                    >

                        <ArrowLeft
                            color={darkMode ? "white" : "#0f172a"}
                        />

                    </button>



                    {/* TITLE */}
                    <div>

                        <h2
                            className="fw-bold m-0"

                            style={{

                                color: darkMode
                                    ? "white"
                                    : "#0f172a"

                            }}
                        >

                            Customers

                        </h2>

                        <p
                            className="m-0 mt-1"

                            style={{

                                color: darkMode
                                    ? "#94a3b8"
                                    : "#64748b"

                            }}
                        >

                            Manage all your clients

                        </p>

                    </div>

                </div>



                {/* RIGHT */}
                <DarkModeToggle
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

            </div>



            {/*
            ========================================
            TOP SECTION
            ========================================
            */}

            <div className="row mb-4">



                {/* SEARCH */}
                <div className="col-lg-8 mb-3">

                    <div
                        className="d-flex align-items-center px-4"

                        style={{

                            height: "70px",

                            borderRadius: "22px",

                            background: darkMode
                                ? "#0f172a"
                                : "white",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        <Search
                            color="#64748b"
                        />



                        <input
                            type="text"

                            placeholder="Search customer..."

                            className="form-control border-0 shadow-none ms-3"

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                            style={{

                                background: "transparent",

                                color: darkMode
                                    ? "white"
                                    : "#0f172a"

                            }}
                        />

                    </div>

                </div>



                {/* TOTAL CARD */}
                <div className="col-lg-4 mb-3">

                    <div
                        className="p-3 d-flex justify-content-between align-items-center"

                        style={{

                            borderRadius: "22px",

                            background:
                                "linear-gradient(to right,#2563eb,#3b82f6)",

                            color: "white",

                            height: "70px"

                        }}
                    >

                        <div>

                            <p className="m-0">
                                Total Customers
                            </p>

                            <h3 className="fw-bold">
                                {customers.length}
                            </h3>

                        </div>



                        <Users size={40} />

                    </div>

                </div>

            </div>



            {/*
            ========================================
            ADD CUSTOMER FORM
            ========================================
            */}

            <div
                className="p-4 mb-4"

                style={{

                    borderRadius: "28px",

                    background: darkMode
                        ? "#0f172a"
                        : "white",

                    boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)"

                }}
            >

                <h4
                    className="fw-bold mb-4"

                    style={{

                        color: darkMode
                            ? "white"
                            : "#0f172a"

                    }}
                >

                    {editId
                        ? "Update Customer"
                        : "Add Customer"}

                </h4>



                <div className="row">

                    {/* NAME */}
                    <div className="col-md-3 mb-3">

                        <input
                            type="text"

                            placeholder="Customer Name"

                            className="form-control"

                            name="name"

                            value={form.name}

                            onChange={handleChange}

                            style={{

                                height: "55px",

                                borderRadius: "16px"

                            }}
                        />

                    </div>



                    {/* EMAIL */}
                    <div className="col-md-3 mb-3">

                        <input
                            type="email"

                            placeholder="Email"

                            className="form-control"

                            name="email"

                            value={form.email}

                            onChange={handleChange}

                            style={{

                                height: "55px",

                                borderRadius: "16px"

                            }}
                        />

                    </div>



                    {/* PHONE */}
                    <div className="col-md-3 mb-3">

                        <input
                            type="text"

                            placeholder="Phone"

                            className="form-control"

                            name="phone"

                            value={form.phone}

                            onChange={handleChange}

                            style={{

                                height: "55px",

                                borderRadius: "16px"

                            }}
                        />

                    </div>



                    {/* LOCATION */}
                    <div className="col-md-3 mb-3">

                        <input
                            type="text"

                            placeholder="Location"

                            className="form-control"

                            name="location"

                            value={form.location}

                            onChange={handleChange}

                            style={{

                                height: "55px",

                                borderRadius: "16px"

                            }}
                        />

                    </div>

                </div>



                {/* BUTTON */}
                <button
                    onClick={
                        editId
                            ? updateCustomer
                            : addCustomer
                    }

                    className="btn px-4 py-3 mt-2"

                    style={{

                        borderRadius: "16px",

                        background:
                            "linear-gradient(to right,#0f172a,#1e293b)",

                        color: "white",

                        border: "none",

                        fontWeight: "600"

                    }}
                >

                    <Plus size={18} className="me-2" />

                    {editId
                        ? "Update Customer"
                        : "Add Customer"}

                </button>

            </div>



            {/*
            ========================================
            CUSTOMER CARDS
            ========================================
            */}

            <div className="row">

                {filteredCustomers.map((item) => (

                    <div
                        className="col-lg-4 mb-4"
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
                                    "0 10px 30px rgba(0,0,0,0.08)"

                            }}
                        >



                            {/* TOP */}
                            <div className="d-flex align-items-center justify-content-between">

                                {/* AVATAR */}
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

                                        fontWeight: "700"

                                    }}
                                >

                                    {item.name.charAt(0)}

                                </div>



                                {/* ACTIONS */}
                                <div className="d-flex gap-2">

                                    {/* EDIT */}
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

                                            color: "white"

                                        }}
                                    >

                                        <Pencil size={18} />

                                    </button>



                                    {/* DELETE */}
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

                                            color: "white"

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
                                        : "#0f172a"

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
                                            : "#334155"

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
                                            : "#334155"

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
                                            : "#334155"

                                    }}
                                >

                                    {item.location}

                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default Customers