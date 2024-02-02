import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import EndPoints from "../configs/endpoints";

export default function PasswordReset() {
  const navigator = useNavigate();
  const emailRef = useRef(null);

  function handlePasswordReset(e) {
    e.preventDefault();

    const email = emailRef.current.value;

    if (email) {
      fetch(`${EndPoints.BASE_URL}${EndPoints.FORGOT_PASSWORD}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      })
        .then((response) => {
          if (response.status === 401) {
            alert("Account Does not exist, Create account to enjoy service!");
            navigator("/signup");
          }
          return response.json();
        })
        .then((result) => {
          if (result.success && result.uid) {
            navigator(`/updatepassword?uid=${result.uid}`);
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Email is required");
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
          <h3 className="mb-3">Reset Password</h3>
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
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handlePasswordReset}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
