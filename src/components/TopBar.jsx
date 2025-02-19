import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="top-bar">
      <h1>Admin Dashboard</h1>
      <div className="user-info">
        <span>Welcome, Admin</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default TopBar;