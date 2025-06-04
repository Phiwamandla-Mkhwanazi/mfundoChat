import Editor from "../components/Editor";

function TerminalPage(){
    return(
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
            <Editor />
            <div class="flex justify-center items-center"><p className="text-2xl text-zinc-700">Terminal Page</p></div>
        </div>
    );
}

export default TerminalPage;