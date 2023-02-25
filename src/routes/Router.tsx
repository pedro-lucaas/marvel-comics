import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import { Comics } from "../pages/Comics";
import { Watchlist } from "../pages/Watchlist";

import { routes } from "./routes";

export function Router() {
  return (<>
    <Routes>
      <Route path="/" element={<DefaultLayout children={<Outlet />} />}>
        <Route path={routes.HOME} element={<Comics />} />
        <Route path={routes.WATCHLIST} element={<Watchlist />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.HOME} />} />
    </Routes>
  </>
  );
}
