import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <Sidebar open={isSidebarOpen} setOpen={setSidebarOpen} />

      {/* Overlay: click anywhere outside to close */}
      {isSidebarOpen && (
  <div
    className="fixed inset-0 bg-grey bg-opacity-4 backdrop-blur-sm z-40"
    onClick={() => setSidebarOpen(false)}
  />
)}


      {/* Main content */}
      <div className="flex-1 bg-gray-50 z-0">
        <Dashboard setSidebarOpen={toggleSidebar} />
      </div>
    </div>
  );
}

export default App;
