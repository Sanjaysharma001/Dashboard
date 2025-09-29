import { motion } from "framer-motion";
import { User, LayoutDashboard, Database, Settings } from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: open ? 0 : -250 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 z-50 h-full w-64 bg-gray-100 shadow-lg "
    >
      <div className="p-4 text-xl font-semibold flex justify-between items-center">
        Tharal
        <button onClick={() => setOpen(false)}>✕</button>
      </div>

      <nav className="flex flex-col space-y-4 p-4">
        <button
          className="flex items-center gap-2 text-sky-600 hover:text-black"
          onClick={() => setOpen(false)}
        >
          <User /> Profile
        </button>
        <button
          className="flex items-center gap-2 text-sky-600 hover:text-black"
          onClick={() => setOpen(false)}
        >
          <LayoutDashboard /> Dashboard
        </button>
        <button
          className="flex items-center gap-2 text-sky-600 hover:text-black"
          onClick={() => setOpen(false)}
        >
          <Database /> Data Section
        </button>
        <button
          className="flex items-center gap-2 text-sky-600 hover:text-black"
          onClick={() => setOpen(false)}
        >
          <Settings /> Settings
        </button>
      </nav>
    </motion.aside>
  );
}
