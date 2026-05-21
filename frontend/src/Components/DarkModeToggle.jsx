const DarkModeToggle = ({ darkMode, setDarkMode }) => {

    return (

        <div

            onClick={() => setDarkMode(!darkMode)} style={{ width: "55px", height: "25px", background: darkMode ? "#1e293b" : "#dbeafe", borderRadius: "50px", padding: "5px", cursor: "pointer", display: "flex", alignItems: "center", transition: "0.3s", position: "relative" }} >

            {/* TOGGLE CIRCLE */}
            <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "white", position: "absolute", left: darkMode ? "31px" : "5px", transition: "0.3s" }} ></div>

        </div>

    )

}

export default DarkModeToggle