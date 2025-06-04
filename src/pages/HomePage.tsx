import Contacts from "../components/Contacts";
import Messages from "../components/Messages";

function HomePage(){
    return(
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
            <Contacts />
            <Messages />
        </div>
    );
}

export default HomePage;