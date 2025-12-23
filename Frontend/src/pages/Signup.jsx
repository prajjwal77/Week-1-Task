import React from "react";


function Signup() {
  return (
    <div className="auth-box">
      <h2>Signup Page</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Register</button>
    </div>
  );
}

export default Signup;
