import Header from "./Header";
import Footer from "./Footer";
import PhoneBook from './PhoneBook';


function Contacts()
{
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <PhoneBook />
             <footer className="border-t border-zinc-700 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md">
                <Footer />
            </footer>
        </div>
    );
}

export default Contacts;