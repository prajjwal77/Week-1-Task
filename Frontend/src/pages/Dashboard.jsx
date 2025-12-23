import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatUI from "../components/ChatUI";
import SearchHistory from "../components/SearchHistory";
import { useState } from "react";

function Dashboard() {
  const [history, setHistory] = useState([]);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard-content">
          <ChatUI />
          <SearchHistory history={history} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
