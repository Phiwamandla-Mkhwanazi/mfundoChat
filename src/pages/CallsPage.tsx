import Calls from "../components/Calls";

function CallsPage(){
    return(
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
            <Calls />
            <div className="flex justify-center items-center"><p className="text-2xl text-zinc-700">Calls Page</p></div>
        </div>
    );
}

export default CallsPage;