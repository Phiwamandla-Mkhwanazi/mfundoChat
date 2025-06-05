import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

function Terminal({ defaultLang = "javascript", defaultValue = "// Start coding..." }) {
  const [code, setCode] = useState(defaultValue);
  const [language, setLanguage] = useState(defaultLang);

  useEffect(() => {
    console.log("Code updated:", code);
  }, [code]);

  return (
    <div className="h-screen w-full bg-slate-900 text-white  shadow-xl overflow-hidden relative border border-slate-700">
      
      {/* Toolbar */}
      <div className="flex items-center justify-between p-3 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 z-10">
        
        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="language" className="text-sm font-medium text-green-400">
            Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-2 py-1 text-sm bg-slate-900 border border-slate-600 rounded-md text-white hover:border-green-400 transition duration-200 focus:outline-none"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="json">JSON</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="cpp">C++</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {["Run", "Debug", "Share"].map((label) => (
            <button
              key={label}
              className="px-4 py-1.5 rounded-lg text-sm font-medium text-green-300 border border-slate-600 bg-slate-800/40 hover:bg-slate-700/60 hover:border-green-400 transition duration-150"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="h-[calc(100%-3rem)]">
        <Editor
          height="100%"
          language={language}
          value={code}
          theme="vs-dark"
          onChange={(value) => setCode(value ?? "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            fontFamily: `'Fira Code', 'JetBrains Mono', monospace`,
            wordWrap: "on",
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
}

export default Terminal;
