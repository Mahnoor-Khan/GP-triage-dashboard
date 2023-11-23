import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Sidebar from "./Sidebar";
import Login from "./Login";

export default function Layout() {
  const [login, setLogin] = useState(true);

  return (
    <>
      {!login ? (
        <Login login={login} setLogin={setLogin} />
      ) : (
        <>
          <div className="flex">
            <div className="w-1/5">
              <Sidebar setLogin={setLogin} />
            </div>
            <main className="w-4/5">
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </main>
          </div>
        </>
      )}
    </>
  );
}
