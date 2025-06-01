import Contacts from './Contacts';
import Messages from './Messages';
 
function Main()
{
    return (
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
            <Contacts />
            <Messages />
        </div>
    );
}

export default Main;