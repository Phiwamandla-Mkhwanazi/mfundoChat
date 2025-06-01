import { useState } from "react";
import { BoldIcon, ItalicIcon, UnderlineIcon, UndoIcon, RedoIcon } from "./Icons"; // You can create or replace with your own icons

function Editor() {
  const [content, setContent] = useState<string>("");

  // Handler for editable div input
  function handleInput(e: React.FormEvent<HTMLDivElement>) {
    setContent(e.currentTarget.textContent || "");
  }

  return (
    <div className="flex flex-col h-full max-h-screen bg-white shadow-lg rounded-md border border-gray-300">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-200 bg-gray-50">
        <ToolbarButton ariaLabel="Bold">
          <BoldIcon />
        </ToolbarButton>
        <ToolbarButton ariaLabel="Italic">
          <ItalicIcon />
        </ToolbarButton>
        <ToolbarButton ariaLabel="Underline">
          <UnderlineIcon />
        </ToolbarButton>
        <div className="border-l h-6 border-gray-300 mx-2" />
        <ToolbarButton ariaLabel="Undo">
          <UndoIcon />
        </ToolbarButton>
        <ToolbarButton ariaLabel="Redo">
          <RedoIcon />
        </ToolbarButton>
      </div>

      {/* Editable Text Area */}
      <div
        contentEditable
        role="textbox"
        aria-multiline="true"
        spellCheck={true}
        onInput={handleInput}
        className="flex-1 p-4 overflow-y-auto outline-none rounded-b-md focus:ring-2 focus:ring-green-500"
        suppressContentEditableWarning={true}
        data-placeholder="Start typing here..."
        style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
      >
        {content}
      </div>
    </div>
  );
}

type ToolbarButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
};

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ children, ariaLabel }) => (
  <button
    aria-label={ariaLabel}
    className="p-2 rounded-md hover:bg-green-100 text-gray-700 hover:text-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500"
    type="button"
  >
    {children}
  </button>
);

export default Editor;
