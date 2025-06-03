import Header from "./Header";
import PhoneBook from "./PhoneBook";
import Footer from "./Footer";
function Contacts()
{
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <PhoneBook />
            <Footer/>
        </div>
    );
}

export default Contacts;