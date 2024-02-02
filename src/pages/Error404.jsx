import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="text-start">
      <h1>404 NOT FOUND</h1>
      <h5>The Page You are Looking For is not Available</h5>
      <Link to="/login">Login to continue</Link>
    </div>
  );
}
