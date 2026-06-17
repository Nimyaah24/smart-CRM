// sidebar component import cheyyunnu layout-il sidebar show cheyyan
import Sidebar from "../components/Sidebar"

// main layout component create cheyyunnu common page structure provide cheyyan
const MainLayout = ({
    darkMode,
    children
}) => {

    // component UI return cheyyunnu
    return (

        // sidebarum contentum side by side display cheyyan flex container create cheyyunnu
        <div className="d-flex">

            {/* SIDEBAR */}

            // sidebar component render cheyyunnu dark mode value pass cheyyan
            <Sidebar darkMode={darkMode} />

            {/* PAGE CONTENT */}

            // page content container create cheyyunnu
            <div
                style={{

                    // sidebar width avoid cheyyan left margin kodukkunnu
                    marginLeft: "260px",

                    // content full width occupy cheyyan width kodukkunnu
                    width: "100%"

                }}
            >

                // child pages render cheyyunnu
                {children}

            </div>

        </div>

    )

}

// component export cheyyunnu mattu files-il use cheyyan
export default MainLayout