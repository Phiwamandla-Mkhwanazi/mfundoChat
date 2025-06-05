import Footer from './Footer';

function Editor() {
  return (
    <div className="flex flex-col h-full  bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white transition-colors duration-300 shadow-inner">
    
    <div className='flex h-full'>

    <div className='flex'>
      <ul className='flex flex-col gap-4 p-2 space-y-6 bg-slate-900 text-green-500'>
        <li>📁 Files</li>
        <li>🔗 Share</li>
      </ul>
    <div>
    
    <div className='flex flex-col'>
      <div className='p-4 border-b border-slate-800'>
        <h2 className='text-green-400 font-semibold text-lg'>Explore</h2>
      </div>
      <div className='px-2'>
        <p>Root Folder</p>
         <ul className="space-y-2">
              <li>
                <div className="font-medium text-white">📁 src</div>
                <ul className="ml-4 mt-1 space-y-1">
                  <li className="text-slate-300 hover:text-white cursor-pointer transition">
                    📄 App.jsx
                  </li>
                  <li className="text-slate-300 hover:text-white cursor-pointer transition">
                    📄 index.js
                  </li>
                </ul>
              </li>
              <li>
                <div className="font-medium text-white">📁 public</div>
                <ul className="ml-4 mt-1 space-y-1">
                  <li className="text-slate-300 hover:text-white cursor-pointer transition">
                    📄 index.html
                  </li>
                </ul>
              </li>
            </ul>
      </div>
    </div>
   </div>
  

      </div>
    </div>
      <Footer/>
   </div>

     
);}

export default Editor;
