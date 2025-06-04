import {
  MessageCircleIcon,
  CallIcon,
  EditorIcon,
  SettingsIcon,
} from "./Icons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex bottom-0 bg-white border-t border-green-500 shadow-lg z-50">
      <div className="max-w-md mx-auto px-6 py-2 gap-3 flex justify-between items-center">
        <FooterLink to="/" label="Chats">
          <MessageCircleIcon />
        </FooterLink>
        <FooterLink to="/calls" label="Calls">
          <CallIcon />
        </FooterLink>
        <FooterLink to="/terminal" label="Terminal">
          <EditorIcon />
        </FooterLink>
        <FooterLink to="/settings" label="Settings">
          <SettingsIcon />
        </FooterLink>
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  to: string;
  label: string;
  children: React.ReactNode;
};

const FooterLink = ({ to, label, children }: FooterLinkProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
        isActive
          ? "text-green-700 bg-green-100 font-semibold shadow-inner"
          : "text-gray-500 hover:text-green-600 hover:bg-green-50"
      }`
    }
  >
    <div className="p-2 rounded-full">{children}</div>
    <span className="text-[10px] sm:text-xs">{label}</span>
  </NavLink>
);

export default Footer;
