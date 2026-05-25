// sidebar
import Sidebar from "../components/Sidebar"

// layout
const MainLayout = ({
    darkMode,
    children
}) => {

    return (

        <div className="d-flex">

            {/* SIDEBAR */}
            <Sidebar darkMode={darkMode} />



            {/* PAGE CONTENT */}
            <div
                style={{

                    marginLeft: "260px",

                    width: "100%"

                }}
            >

                {children}

            </div>

        </div>

    )

}

export default MainLayout