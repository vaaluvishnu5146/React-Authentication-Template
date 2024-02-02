import { Link, useNavigate } from "react-router-dom";
import EndPoints from "../configs/endpoints";
import { useRef } from "react";
import { useAuthContext } from "../Context/AuthContext";

export default function Login() {
  const { setIsLoggedIn = () => {} } = useAuthContext();
  const navigator = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleLogin(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      fetch(`${EndPoints.BASE_URL}${EndPoints.LOGIN}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            try {
              if (result.token) {
                sessionStorage.setItem("_tk", result.token);
                setIsLoggedIn(true);
                navigator("/");
              } else {
                throw new Error("Token missing!");
              }
            } catch (error) {
              console.log(error);
            }
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Email and Password is required to signin");
    }
  }

  return (
    <div className="container d-flex text-start">
      <div
        className="card p-0"
        style={{
          width: "350px",
        }}
      >
        <div className="card-body">
          <h3 className="mb-3">Login</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="*********"
              ref={passwordRef}
            />
          </div>
          <div className="mb-3 d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
          <div>
            <p className="text-center">
              Forgot password?
              <span className="mx-1">
                <Link to="/resetpassword">Reset Now</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
