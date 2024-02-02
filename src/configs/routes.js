import UpdatePassword from "../pages/UpdatePassword";
import ManageVenues from "../pages/VenuesJourney/ManageVenues";
import Venues from "../pages/VenuesJourney/venue";
import Login from "../pages/login";
import PasswordReset from "../pages/passwordreset";
import Signup from "../pages/signup";

const AUTH_ROUTES = [
  {
    title: "Sign In",
    Component: Login,
    path: "/login",
  },
  {
    title: "Create Account",
    Component: Signup,
    path: "/signup",
  },
  {
    title: "Reset Password",
    Component: PasswordReset,
    path: "/resetpassword",
  },
  {
    title: "Update Password",
    Component: UpdatePassword,
    path: "/updatepassword",
  },
];

const PROTECTED_ROUTES_CONFIG = [
  {
    title: "Venues Journey",
    index: true,
    Component: Venues,
    role: ["lvl1", "lvl2"],
    Childrens: [
      {
        title: "Manage Venue",
        index: false,
        Component: ManageVenues,
        role: ["lvl2", "lvl3"],
      },
    ],
  },
];

export { AUTH_ROUTES, PROTECTED_ROUTES_CONFIG };
