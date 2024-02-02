import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Venues from "./pages/VenuesJourney/venue";
import ProtectedJourney from "./pages/ProtectedJourney";
import { useAuthContext } from "./Context/AuthContext";
import Error404 from "./pages/Error404";
import ManageVenues from "./pages/VenuesJourney/ManageVenues";
import { AUTH_ROUTES } from "./configs/routes";

function App() {
  const { isLoggedIn, accessLevel = "" } = useAuthContext();

  function renderPublicRoutes() {
    return (
      <React.Fragment>
        {AUTH_ROUTES.map((route, index) => (
          <Route
            key={`${route.title}-${index}`}
            Component={route.Component}
            path={route.path}
          />
        ))}
      </React.Fragment>
    );
  }

  function renderPrivateRoutes() {
    return (
      <Route Component={ProtectedJourney} path="/">
        <Route Component={Home} index />
        <Route Component={Venues} path="/venues" />
        {accessLevel === "pro" && (
          <Route Component={ManageVenues} path="/manageVenues" />
        )}
      </Route>
    );
  }

  return (
    <Routes>
      {!isLoggedIn && renderPublicRoutes()}
      {isLoggedIn && renderPrivateRoutes()}
      <Route Component={Error404} path="*" />
    </Routes>
  );
}

export default App;
