import { Outlet } from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import { useState } from "react";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-4">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
        ></div>
      )}
      <div className="col-span-1 lg:col-span-3 flex flex-col overflow-hidden bg-gray-100">
        <Header setIsOpen={setIsOpen} />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}
export default AppLayout;
