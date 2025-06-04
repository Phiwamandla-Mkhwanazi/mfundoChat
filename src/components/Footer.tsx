import {
  MessageCircleIcon,
  CallIcon,
  EditorIcon,
  SettingsIcon,
} from "./Icons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex bottom-0 w-full bg-white dark:bg-slate-900 border-t border-sky-200 dark:border-slate-700 shadow-lg z-50">
      <div className="max-w-md mx-auto px-4  flex justify-between items-center">
        <FooterLink to="/" label="Chats">
          <MessageCircleIcon  />
        </FooterLink>
        <FooterLink to="/calls" label="Calls">
          <CallIcon />
        </FooterLink>
        <FooterLink to="/terminal" label="Terminal">
          <EditorIcon  />
        </FooterLink>
        <FooterLink to="/settings" label="Settings">
          <SettingsIcon  />
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
      `flex flex-col items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${
        isActive
          ? "text-sky-600 dark:text-sky-300 bg-sky-50 dark:bg-slate-800 font-semibold shadow-inner"
          : "text-slate-500 dark:text-slate-400 hover:text-sky-500 hover:bg-sky-100 dark:hover:bg-slate-700"
      }`
    }
  >
    <div className="p-2 rounded-full transition-transform group-hover:scale-105">
      {children}
    </div>
    <span className="text-[10px] sm:text-xs tracking-wide">{label}</span>
  </NavLink>
);

export default Footer;
