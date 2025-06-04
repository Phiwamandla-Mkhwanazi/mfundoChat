import './styles/App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import CallsPage from './pages/CallsPage';
import TerminalPage from './pages/TerminalPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  return (
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="calls" element={<CallsPage />} />
          <Route path="terminal" element={<TerminalPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
