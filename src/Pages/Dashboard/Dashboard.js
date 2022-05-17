import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../Shared/firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500 py-12 px-2">
          Welcome back, {user?.displayName}
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content py-20">
          {/* <!-- Sidebar content here --> */}
          <li className="py-2">
            <NavLink to="/dashboard">My Appointments</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/dashboard/review">My Reviews</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/dashboard/history">My History</NavLink>
          </li>
          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addDoctor">Add a Doctor</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageDoctor">Manage Doctors</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
