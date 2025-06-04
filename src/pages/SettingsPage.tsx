import Settings from "../components/Settings";

function SettingsPage(){
    return(
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
            <Settings />
            <div class="flex justify-center items-center"><p className="text-2xl text-zinc-700">Settings Page</p></div>
        </div>
    );
}

export default SettingsPage;