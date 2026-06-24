
// react hooks import cheyyunnu stateum lifecycleum manage cheyyan
import { useState, useEffect } from "react"
// page navigation cheyyan useNavigate import cheyyunnu
import { useNavigate } from "react-router-dom"
// back button icon import cheyyunnu
import { ArrowLeft } from "lucide-react"
// dark mode toggle component import cheyyunnu
import DarkModeToggle from "../Components/DarkModeToggle"
// recharts chart components import cheyyunnu analytics charts create cheyyan
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
} from "recharts"
// analytics icons import cheyyunnu UI display cheyyan
import {
  TrendingUp,
  DollarSign,
  Activity,
  Users,
  BarChart3
} from "lucide-react"

// analytics component create cheyyunnu
  const Analytics = () => {

  // page navigation use cheyyan hook create cheyyunnu
  const navigate = useNavigate()

    // dark mode state create cheyyunnu localStorage value use cheythu
    const [darkMode, setDarkMode] = useState(
  JSON.parse(localStorage.getItem("darkMode")) || false
);

  // dark mode value localStorage-il save cheyyunnu
useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);

  // customers data store cheyyan state create cheyyunnu
  const [customers, setCustomers] = useState([])

    // projects data store cheyyan state create cheyyunnu
  const [projects, setProjects] = useState([])

    // tasks data store cheyyan state create cheyyunnu
  const [tasks, setTasks] = useState([])


  // dark mode value localStorage-il update cheyyunnu
useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  )
}, [darkMode])


  // component load aakumbo data fetch cheyyunnu
  useEffect(() => {
    fetchCustomers()
    fetchProjects()
    fetchTasks()
  }, [])


    // customer data backend-il ninn fetch cheyyan function create cheyyunnu
  const fetchCustomers = async () => {
      // error handle cheyyan try block use cheyyunnu
    try {
          // customer API call cheyyunnu
      const res = await fetch(
        "https://smart-crm-pcys.onrender.com/api/customer/all"
      )

          // response json aakki convert cheyyunnu
      const data = await res.json()

          // customer data state-il save cheyyunnu
      setCustomers(data.customers || [])

        // error console-il show cheyyunnu
    } catch (err) {
      console.log(err)
    }
  }

  // project data backend-il ninn fetch cheyyan function create cheyyunnu
  const fetchProjects = async () => {

      // error handle cheyyan try block use cheyyunnu
    try {

          // project API call cheyyunnu
      const res = await fetch(
        "https://smart-crm-pcys.onrender.com/api/project/all"
      )

          // response json aakki convert cheyyunnu
      const data = await res.json()

          // project data state-il save cheyyunnu
      setProjects(data.projects || [])

        // error console-il show cheyyunnu
    } catch (err) {
      console.log(err)
    }
  }

  // task data backend-il ninn fetch cheyyan function create cheyyunnu
  const fetchTasks = async () => {

      // error handle cheyyan try block use cheyyunnu
    try {

          // task API call cheyyunnu
      const res = await fetch(
        "https://smart-crm-pcys.onrender.com/api/task/all"
      )

          // response json aakki convert cheyyunnu
      const data = await res.json()

       console.log("FULL RESPONSE =", data)
       
console.log("TASKS =", data.tasks)

          // task data state-il save cheyyunnu
     setTasks(data.tasks || [])

      
        // error console-il show cheyyunnu
    } catch (err) {
      console.log(err)
    }
  }

 
  // CALCULATIONS

 // calculations section start cheyyunnu dashboard analytics values calculate cheyyan

 // ella project budget sum cheyth total revenue calculate cheyyunnu
  const totalRevenue = projects.reduce(
    (acc, item) =>
      acc + Number(item.budget || 0),
    0
  )

  // completed status ulla projects count cheyyunnu
  const completedProjects =
    projects.filter(
      (p) => p.status === "Completed"
    ).length

    // pending status ulla projects count cheyyunnu
  const pendingProjects =
    projects.filter(
      (p) => p.status === "Pending"
    ).length

    // in progress status ulla projects count cheyyunnu
  const runningProjects =
    projects.filter(
      (p) => p.status === "In Progress"
    ).length

    // project completion percentage calculate cheyyunnu
  const performance =
    projects.length > 0
      ? Math.round(
          (completedProjects /
            projects.length) *
            100
        )
      : 0

// revenue chart-il display cheyyan sample revenue data create cheyyunnu
const revenueData = [
  { month: "Jan", revenue: 200 },
  { month: "Feb", revenue: 500 },
  { month: "Mar", revenue: 788 }
]

// pie chart-in vendi project status data create cheyyunnu
  const pieData = [
    {
      name: "Completed",
      value: completedProjects
    },
    {
      name: "Pending",
      value: pendingProjects
    },
    {
      name: "Running",
      value: runningProjects
    }
  ]

  // task progress chart-in vendi task data map cheyyunnu
const salesData = tasks.map(
  (item, index) => ({
    name: item.title || `Task ${index + 1}`,
    sales:
      item.status === "Completed"
        ? 100
        : item.status === "Running"
        ? 70
        : 30
  })
)

console.log("salesData =", salesData)


  // pie chart colors define cheyyunnu
  const COLORS = [
    "#2563eb",
    "#22c55e",
    "#f59e0b"
  ]

  // analytics page UI render cheyyan return use cheyyunnu
  return (

      // page main container create cheyyunnu
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

    {/*  top header section create cheyyunnu */}
<div className="d-flex justify-content-between align-items-center mb-4">

      {/*  left side controls container create cheyyunnu */}
    <div className="d-flex align-items-center gap-3">

              {/*  dashboard page-il thirich pokan back button create cheyyunnu */}
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

                        {/*  back arrow icon show cheyyunnu */}

              <ArrowLeft
                color={
                  darkMode
                    ? "white"
                    : "#0f172a"
                }
              />
            </button>
  
                {/*  total tasks count display cheyyunnu */}
     <h2  className="fw-bold ms-5 position-relative"  style={{
    color: darkMode ? "white" : "#7b2132"
  }}>
    Total Tasks: {tasks.length}
  </h2>

  </div>

        {/* // dark mode toggle component render cheyyunnu */}
  <DarkModeToggle
    darkMode={darkMode}
    setDarkMode={setDarkMode}
  />

</div>

    {/* // analytics page heading section create cheyyunnu */}
<div className="mb-4">

        {/*  main heading */}
  <h2 className="fw-bold"   style={{
    color: darkMode ? "white" : "#0f172a"
  }}>
    Dashboard Analytics
  </h2>


      {/*  welcome text   */}
  <p className="text-secondary"  style={{
    color: darkMode ? "#94a3b8" : "#64748b"
  }}>
    Welcome Back 👋
  </p>

</div>


{/* TOP CARDS */}

    {/*  top cards section start cheyyunnu analytics summary display cheyyan */}
<div className="row mb-4">

  {/* total revenue card column create cheyyunnu */}
  <div className="col-lg-3 col-md-6 mb-4">

    {/*  revenue card create cheyyunnu */}
    <div
      className="p-4 card-hover"
      onClick={() => navigate("/projects")}
      style={{
        borderRadius: "30px",
        background:
          "linear-gradient(to right,#2563eb,#3b82f6)",
        color: "white",
          transition: "0.3s",
    cursor: "pointer"
      }}
    >

      {/*  revenue card content align cheyyunnu */}
      <div className="d-flex justify-content-between align-items-center">


        {/*  revenue details container create cheyyunnu */}
        <div>

          {/*  revenue title show cheyyunnu */}
          <p className="m-0">
            Total Revenue
          </p>

          {/*  total revenue amount display cheyyunnu */}
          <h1 className="fw-bold mt-2">
            ₹{totalRevenue.toLocaleString()}
          </h1>

        </div>

        {/*  revenue icon show cheyyunnu */}
        <DollarSign size={45} />

      </div>

    </div>

  </div>

  {/* CUSTOMERS */}

  {/* customers card column create cheyyunnu */}
  <div className="col-lg-3 col-md-6 mb-4">

    {/*  customers card create cheyyunnu */}
    <div
      className="p-4 card-hover"
      onClick={() => navigate("/customers")}
      style={{
        borderRadius: "30px",
        background:
          "linear-gradient(to right,#16a34a,#22c55e)",
        color: "white",
         transition: "0.3s",
    cursor: "pointer"
      }}
    >

      {/*  customer card content align cheyyunnu */}
      <div className="d-flex justify-content-between align-items-center">

        {/*  customer details container create cheyyunnu */}
        <div>

          {/*  customer title show cheyyunnu */}
          <p className="m-0">
            Customers
          </p>

          {/*  customer count display cheyyunnu */}
          <h1 className="fw-bold mt-2">
            {customers.length}
          </h1>

        </div>

        {/*  customers icon show cheyyunnu */}
        <Users size={45} />

      </div>

    </div>

  </div>

  {/* PROJECTS */}

  {/*  projects card column create cheyyunnu */}
  <div className="col-lg-3 col-md-6 mb-4">

    {/*  projects card create cheyyunnu */}
<div
  className="p-4 card-hover"
  onClick={() => navigate("/projects")}
  style={{
    borderRadius: "30px",
    background:
      "linear-gradient(to right,#f59e0b,#facc15)",
    color: "white",
    transition: "0.3s",
    cursor: "pointer"
  }}
>

      {/*  project card content align cheyyunnu */}
      <div className="d-flex justify-content-between align-items-center">

        {/*  project details container create cheyyunnu */}
        <div>

          {/*  project title show cheyyunnu */}
          <p className="m-0">
            Projects
          </p>

          {/*  project count display cheyyunnu */}
          <h1 className="fw-bold mt-2">
            {projects.length}
          </h1>

        </div>

        {/*  projects icon show cheyyunnu */}
        <Activity size={45} />

      </div>

    </div>

  </div>

  {/* PERFORMANCE */}

  {/*  performance card column create cheyyunnu */}
  <div className="col-lg-3 col-md-6 mb-4">

    {/*  performance card create cheyyunnu */}
    <div
      className="p-4 card-hover"
     onClick={() => navigate("/tasks")}
      style={{
        borderRadius: "30px",
        background:
          "linear-gradient(to right,#7c3aed,#8b5cf6)",
        color: "white",
          transition: "0.3s",
    cursor: "pointer"
      }}
    >

      {/*  performance card content align cheyyunnu */}
      <div className="d-flex justify-content-between align-items-center">

                {/*  performance details container create cheyyunnu */}
        <div>

{/*  performance title show cheyyunnu */}
          <p className="m-0">
            Performance
          </p>

          {/*  performance percentage display cheyyunnu */}
          <h1 className="fw-bold mt-2">
            {performance}%
          </h1>

        </div>

        {/*  performance icon show cheyyunnu */}
        <TrendingUp size={45} />

      </div>

    </div>

  </div>

</div>

{/* CHARTS SECTION */}

{/*  charts section start cheyyunnu analytics graphs display cheyyan */}
<div className="row">

     {/* revenue chart column create cheyyunnu */}
  <div className="col-lg-8 mb-4">

    {/*  revenue chart card create cheyyunnu */}
    <div
      className="p-4"
      style={{
        borderRadius: "35px",
        background: darkMode
          ? "#0f172a"
          : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)"
      }}
    >

      {/* revenue chart header container create cheyyunnu */}
        <div className="d-flex justify-content-between align-items-center mb-4">

</div>


      {/*  revenue chart title section create cheyyunnu */}
      <div className="d-flex justify-content-between align-items-center mb-4">


        {/* chart heading container create cheyyunnu */}
        <div>

          {/*  revenue analytics title show cheyyunnu */}
          <h4
            className="fw-bold"
            style={{
              color: darkMode
                ? "white"
                : "#0f172a"
            }}
          >
            Revenue Analytics
          </h4>

          {/*  revenue analytics description show cheyyunnu */}
          <p style={{ color: "#64748b" }}>
            Project revenue overview
          </p>

        </div>

        {/*  chart icon show cheyyunnu */}
        <BarChart3 color="#2563eb" />

      </div>

      {/*  chart wrapper create cheyyunnu */}
    <div
  style={{
    width: "100%",
    height: "350px",
    minWidth: 0
  }}
>

        {/*  tasks illenkil message show cheyyunnu */}
{
  projects.length === 0 ? (
    <h5 className="text-center">
      No Projects Found
    </h5>
  ) : (
    <ResponsiveContainer width="100%" height={350}>

              {/* // area chart create cheyyunnu */}
          <AreaChart data={revenueData}>

                {/* // chart gradient define cheyyunnu */}
            <defs>

              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                    {/* // gradient top color set cheyyunnu */}
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.8}
                />

                    {/* // gradient bottom color set cheyyunnu */}
                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

                {/* // x axis create cheyyunnu */}
            <XAxis dataKey="month" />

                {/* // tooltip enable cheyyunnu */}
            <Tooltip />

                {/* // area graph create cheyyunnu */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />

          </AreaChart>

        </ResponsiveContainer>
  )
}
      </div>

    </div>

  </div>

  {/* PIE CHART */}
  {/* // pie chart column create cheyyunnu */}
  <div className="col-lg-4 mb-4">

    {/* // pie chart card create cheyyunnu */}
    <div
      className="p-4 h-100"
      style={{
        borderRadius: "35px",
        background: darkMode
          ? "#0f172a"
          : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)"
      }}
    >

      {/* // pie chart heading show cheyyunnu */}
      <h4
        className="fw-bold mb-4"
        style={{
          color: darkMode
            ? "white"
            : "#0f172a"
        }}
      >
        Project Status
      </h4>

      {/* // pie chart wrapper create cheyyunnu */}
    <div
  style={{
    width: "100%",
    height: "300px",
    minWidth: 0
  }}
>

  {/* // tasks illenkil message show cheyyunnu */}
{projects.length === 0 ? (
  <h5 className="text-center">
    No Tasks Found
  </h5>
) : (

      // responsive pie chart container create cheyyunnu
        <ResponsiveContainer width="100%" height={300} > 

      {/* // pie chart create cheyyunnu */}
          <PieChart>

        {/* // project status pie graph create cheyyunnu */}
<Pie
  data={pieData}
  cx="50%"
  cy="50%"
  innerRadius={70}
  outerRadius={100}
   label
  dataKey="value"
>

            {/* // pie chart colors apply cheyyunnu */}
  {pieData.map((entry, index) => (
    <Cell
      key={index}
      fill={COLORS[index]}
    />
  ))}
</Pie>
            
                    {/* // tooltip enable cheyyunnu */}
            <Tooltip />

          </PieChart>

        </ResponsiveContainer>


        )}

  {/* // project status summary display cheyyunnu */}
<div className="mt-3"style={{
    color: darkMode ? "#94a3b8" : "#64748b"
  }}>
  <p >🟢 Completed : {completedProjects}</p>
  <p>🟡 Pending : {pendingProjects}</p>
  <p>🔵 Running : {runningProjects}</p>
</div>

      </div>

    </div>

  </div>

</div>


{/* BOTTOM CHART */}
{/* // bottom chart card create cheyyunnu */}

<div
  className="p-4"
  style={{
    borderRadius: "35px",
    background: darkMode
      ? "#0f172a"
      : "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.08)"
  }}
>

  {/* // task progress heading show cheyyunnu */}
  <h4
    className="fw-bold mb-4"
    style={{
      color: darkMode
        ? "white"
        : "#0f172a"
    }}
  >
    Task Progress
  </h4>

  {/* // bar chart wrapper create cheyyunnu */}
<div
  style={{
    width: "100%",
    height: "350px",
    minWidth: 0
  }}
>

    {/* // tasks illenkil message show cheyyunnu */}
{
  salesData.length === 0 ? (
    <h5 className="text-center">
      No Tasks Found
    </h5>
  ) : (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={salesData}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar
          dataKey="sales"
          fill="#2563eb"
          radius={[10,10,0,0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

  </div>

</div>

</div>

)

}

export default Analytics
