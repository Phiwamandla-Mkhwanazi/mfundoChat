import { CallIcon, EditorIcon, SettingsIcon } from "./Icons";

function Footer() {
  return (
    <footer className=" bottom-0 w-full bg-white border-t border-green-500 shadow-md z-50">
      <div className="max-w-md mx-auto px-6 py-3 flex justify-between items-center">
        <IconWrapper><CallIcon /></IconWrapper>
        <IconWrapper><EditorIcon /></IconWrapper>
        <IconWrapper><SettingsIcon /></IconWrapper>
      </div>
    </footer>
  );
}

type IconWrapperProps = {
  children: React.ReactNode;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <button
    className="
      p-1 rounded-2xl 
      hover:bg-green-500 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 
      transition-colors duration-200
      shadow-sm
      active:scale-95
      "
  >
    {children}
  </button>
);

export default Footer;
