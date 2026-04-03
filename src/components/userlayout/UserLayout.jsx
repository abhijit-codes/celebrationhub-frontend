import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function UserLayout() {
  return (
    <div className="min-h-screen bg-celebration-gradient flex flex-col">

      {/* HEADER */}
      <Header />

      {/* PAGE CONTENT */}
      <div className="flex-1 px-2 pb-6">
        <Outlet />
      </div>

    </div>
  );
}