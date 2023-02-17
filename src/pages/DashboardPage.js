import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardRoutes from "../routes/DashboardRoutes";

const DashboardPage = () => {
  return (
    <div className="dashboardWrap">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div>
        <DashboardRoutes></DashboardRoutes>
      </div>
    </div>
  );
};

export default DashboardPage;
