import { useNavigate, useSearchParams } from "react-router-dom";
import EndPoints from "../configs/endpoints";
import { useRef } from "react";

export default function UpdatePassword() {
  const newPassword = useRef(null);
  const confirmPassword = useRef(null);
  const navigator = useNavigate();
  const [searchQuery] = useSearchParams();

  function handleUpdateUser(e) {
    e.preventDefault();
    const newPass = newPassword.current.value;
    const confirmPass = confirmPassword.current.value;
    if (
      newPass &&
      confirmPass &&
      newPass === confirmPass &&
      searchQuery.get("uid")
    ) {
      fetch(
        `${EndPoints.BASE_URL}${EndPoints.UPDATE_USER}/${searchQuery.get(
          "uid"
        )}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: newPass,
          }),
        }
      )
        .then((response) => {
          if (response.status === 200) {
            navigator("/login");
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Password, Uid is invalid");
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
          <h3 className="mb-3">Create New Password</h3>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="*********"
              ref={newPassword}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="*********"
              ref={confirmPassword}
            />
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleUpdateUser}
            >
              Updated Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
