import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";
function Contacts()
{
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <div>Section Header</div>
            <Outlet />
            <Footer/>
        </div>
    );
}

export default Contacts;