import Editor from "../components/Editor";
import Terminal from "../components/Terminal";

function TerminalPage(){
    return(
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
            <Editor />
            <Terminal />
        </div>
    );
}

export default TerminalPage;