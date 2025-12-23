import { motion } from "framer-motion";

function Sidebar() {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="sidebar-title">AI Dashboard</h3>
      <ul>
        <li>Dashboard</li>
        <li>AI Chat</li>
        <li>Search History</li>
        <li>Settings</li>
      </ul>
    </motion.div>
  );
}

export default Sidebar;
