// ============================================
// IMPORTS
// ============================================

// react hook
import { useState } from "react"

// route navigation
import { useNavigate } from "react-router-dom"

// dark mode component
import DarkModeToggle from "../components/DarkModeToggle"

// recharts
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar
}
    from "recharts"

// icons
import {
    TrendingUp,
    DollarSign,
    Activity,
    Users,
    Bell,
    Search,
    ArrowLeft,
    BarChart3
}
    from "lucide-react"



// ============================================
// ANALYTICS COMPONENT
// ============================================

const Analytics = () => {

    /*
    ============================================
    NAVIGATION
    ============================================
    */

    const navigate = useNavigate()



    /*
    ============================================
    DARK MODE STATE
    ============================================
    */

    const [darkMode, setDarkMode] = useState(false)



    /*
    ============================================
    CHART DATA graphil pont chyen
    ============================================
    */

    const revenueData = [

        {
            // month x-axisil kaanikunna text
            month: "Jan",
            // height
            revenue: 4000
        },

        {
            month: "Feb",
            revenue: 3000
        },

        {
            month: "Mar",
            revenue: 5000
        },

        {
            month: "Apr",
            revenue: 7000
        },

        {
            month: "May",
            revenue: 6000
        },

        {
            month: "Jun",
            revenue: 9000
        }

    ]



    /*
    ============================================
    PIE CHART DATA
    ============================================
    */

    const pieData = [

        {
            name: "Completed",
            value: 65
        },

        {
            name: "Pending",
            value: 20
        },

        {
            name: "Running",
            value: 15
        }

    ]



    /*
    ============================================
    BAR CHART DATA
    ============================================
    */

    const salesData = [

        {
            name: "Mon",
            sales: 2400
        },

        {
            name: "Tue",
            sales: 1398
        },

        {
            name: "Wed",
            sales: 9800
        },

        {
            name: "Thu",
            sales: 3908
        },

        {
            name: "Fri",
            sales: 4800
        },

        {
            name: "Sat",
            sales: 3800
        }

    ]



    /*
    ============================================
    PIE COLORS
    ============================================
    */

    const COLORS = [

        "#2563eb",
        "#22c55e",
        "#f59e0b"

    ]



    return (

        /*
        ============================================
        MAIN CONTAINER
        ============================================
        */

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



            {/* ============================================
            TOP NAVBAR
            ============================================ */}

            <div

                className="d-flex justify-content-between align-items-center mb-4"

            >

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

                            Analytics Dashboard

                        </h2>

                        <p
                            className="m-0 mt-1"

                            style={{
                                color: "#64748b"
                            }}
                        >

                            Business growth analytics

                        </p>

                    </div>

                </div>



                {/* RIGHT */}

                <div className="d-flex align-items-center gap-3">

                    {/* SEARCH */}

                    <div

                        className="position-relative"

                        style={{
                            width: "300px",
                            color:
                                darkMode
                                    ? "white"
                                    : "#0f172a",
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

                            placeholder="Search analytics..."

                            className="form-control border-0"

                            style={{

                                background:
                                    darkMode
                                        ? "white"
                                        : "white",

                                color:
                                    darkMode
                                        ?"white"
                                        :  "white",

                                borderRadius: "18px",

                                padding:
                                    "14px 14px 14px 45px",

                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)"

                            }}
                        />

                    </div>



                    {/* DARK MODE */}

                    <DarkModeToggle
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />



                    {/* NOTIFICATION */}

                    <div

                        className="d-flex justify-content-center align-items-center"

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

                        <Bell
                            color={
                                darkMode
                                    ? "white"
                                    : "#0f172a"
                            }
                        />

                    </div>

                </div>

            </div>



            {/* ============================================
            TOP CARDS
            ============================================ */}

            <div className="row mb-4">



                {/* CARD 1 */}

                <div className="col-lg-3 col-md-6 mb-4">

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

                                <p className="m-0">
                                    Total Revenue
                                </p>

                                <h1 className="fw-bold mt-2">
                                    $45K
                                </h1>

                            </div>



                            <DollarSign size={45} />

                        </div>

                    </div>

                </div>



                {/* CARD 2 */}

                <div className="col-lg-3 col-md-6 mb-4">

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

                                <p className="m-0">
                                    Growth
                                </p>

                                <h1 className="fw-bold mt-2">
                                    +28%
                                </h1>

                            </div>



                            <TrendingUp size={45} />

                        </div>

                    </div>

                </div>



                {/* CARD 3 */}

                <div className="col-lg-3 col-md-6 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "30px",

                            background:
                                "linear-gradient(to right,#f59e0b,#facc15)",

                            color: "white",

                            boxShadow:
                                "0 10px 30px rgba(245,158,11,0.3)"

                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <p className="m-0">
                                    Active Users
                                </p>

                                <h1 className="fw-bold mt-2">
                                    1,240
                                </h1>

                            </div>



                            <Users size={45} />

                        </div>

                    </div>

                </div>



                {/* CARD 4 */}

                <div className="col-lg-3 col-md-6 mb-4">

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

                                <p className="m-0">
                                    Performance
                                </p>

                                <h1 className="fw-bold mt-2">
                                    89%
                                </h1>

                            </div>



                            <Activity size={45} />

                        </div>

                    </div>

                </div>

            </div>



            {/* ============================================
            CHARTS SECTION
            ============================================ */}

            <div className="row">



                {/* REVENUE CHART */}

                <div className="col-lg-8 mb-4">

                    <div

                        className="p-4"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(10px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div>

                                <h4

                                    className="fw-bold"

                                    style={{

                                        color:
                                            darkMode
                                                ? "white"
                                                : "#0f172a"

                                    }}
                                >

                                    Revenue Analytics

                                </h4>

                                <p style={{ color: "#64748b" }}>
                                    Monthly revenue growth
                                </p>

                            </div>



                            <BarChart3 color="#2563eb" />

                        </div>



                        {/* CHART */}

                        <div style={{ width: "100%", height: "350px" }}>

                            <ResponsiveContainer>

{/* chart creating part  */}
{/* array full chartilki povm */}
                                <AreaChart data={revenueData}>

                                    <defs>

                                        <linearGradient
                                            id="colorRevenue"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >

                                            <stop
                                                offset="5%"
                                                stopColor="#2563eb"
                                                stopOpacity={0.8}
                                            />

                                            <stop
                                                offset="95%"
                                                stopColor="#2563eb"
                                                stopOpacity={0}
                                            />

                                        </linearGradient>

                                    </defs>


{/* month kaanikm x axisil */}
                                    <XAxis dataKey="month" />



                                    <Tooltip />

{/* values edth graph draw chyum */}
{/* animation control chyn pattum */}
                                    <Area

                                        type="monotone"

                                        dataKey="revenue"

                                        stroke="#2563eb"

                                        fillOpacity={1}

                                        // graphil blue shade varan
                                        fill="url(#colorRevenue)"

                                        // animation control
                                        animationDuration={2000}
                                        animationEasing="ease-in-out"
                                    />

                                </AreaChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </div>



                {/* PIE CHART */}

                <div className="col-lg-4 mb-4">

                    <div

                        className="p-4 h-100"

                        style={{

                            borderRadius: "35px",

                            background:
                                darkMode
                                    ? "#0f172a"
                                    : "rgba(255,255,255,0.7)",

                            backdropFilter: "blur(10px)",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.08)"

                        }}
                    >

                        <h4

                            className="fw-bold mb-4"

                            style={{

                                color:
                                    darkMode
                                        ? "white"
                                        : "#0f172a"

                            }}
                        >

                            Project Status

                        </h4>



                        {/* PIE */}

                        <div style={{ width: "100%", height: "300px" }}>

                            <ResponsiveContainer>

                                <PieChart>

                                    <Pie

                                        data={pieData}

                                        innerRadius={70}

                                        outerRadius={100}

                                        paddingAngle={5}

                                        dataKey="value"

                                    >

                                        {pieData.map((entry, index) => (

                                            <Cell
                                                key={index}
                                                fill={COLORS[index]}
                                            />

                                        ))}

                                    </Pie>



                                    <Tooltip />

                                </PieChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </div>

            </div>



            {/* ============================================
            BOTTOM CHART
            ============================================ */}

            <div

                className="p-4"

                style={{

                    borderRadius: "35px",

                    background:
                        darkMode
                            ? "#0f172a"
                            : "rgba(255,255,255,0.7)",

                    backdropFilter: "blur(10px)",

                    boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)"

                }}
            >

                <h4

                    className="fw-bold mb-4"

                    style={{

                        color:
                            darkMode
                                ? "white"
                                : "#0f172a"

                    }}
                >

                    Weekly Sales

                </h4>



                {/* BAR CHART */}

                <div style={{ width: "100%", height: "350px" }}>

                    <ResponsiveContainer>

                        <BarChart data={salesData}>


                            <XAxis dataKey="name" />

                            <Tooltip />



                            <Bar
                                dataKey="sales"
                                fill="#2563eb"
                                radius={[10, 10, 0, 0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>

    )

}

export default Analytics