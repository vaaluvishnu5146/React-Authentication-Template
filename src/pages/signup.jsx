export default function Signup() {
  return (
    <div className="container d-flex text-start">
      <div
        className="card p-0"
        style={{
          width: "350px",
        }}
      >
        <div className="card-body">
          <h3 className="mb-3">Create Account</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              User name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Eg. Markus"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="email"
              className="form-control"
              id="phoneNumber"
              placeholder="+919287424734"
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
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
