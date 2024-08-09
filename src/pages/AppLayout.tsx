import { Outlet } from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import { useState } from "react";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="grid h-screen grid-cols-1 gap-4 bg-base-10 dark:bg-base-300 lg:grid-cols-4">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-20 bg-base-300 opacity-50 lg:hidden"
        ></div>
      )}
      <div className="col-span-1 flex flex-col overflow-hidden lg:col-span-3">
        <Header setIsOpen={setIsOpen} />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}
export default AppLayout;
