import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export default function ProtectedJourney() {
  const { accessLevel = "" } = useAuthContext();
  return (
    <>
      <div className="d-flex">
        <Link to="/">Home</Link>
        <Link to="/venues">Venues</Link>
        {accessLevel === "pro" && <Link to="/manageVenues">Manage Venues</Link>}
      </div>
      <Outlet />
    </>
  );
}
