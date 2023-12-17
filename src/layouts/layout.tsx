import MainNav from "../components/MainNav";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="text-white h-screen w-screen grid grid-cols-[250px_minmax(900px,_1fr)] grid-rows-[70px_1fr] bg-grey ">
      <div className="col-start-1 row-span-2 bg-grey p-4 pt-10 text-lg flex justify-center items-start border-r-2 border-white ">
        <MainNav />
      </div>
      <div className="col-start-2 bg-blue-600 row-start-1 row-span-1"></div>
      <div className="col-start-2 bg-orange-500 row-start-2 row-span-1 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
/*
071018
2B3239
*/
