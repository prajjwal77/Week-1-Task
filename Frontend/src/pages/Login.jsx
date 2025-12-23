import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-box">
      <h2>Login</h2>

      <input placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      {/* THIS IS IMPORTANT */}
      <p
        style={{ cursor: "pointer", marginTop: "10px" }}
        onClick={() => navigate("/signup")}
      >
        Create new account
      </p>
    </div>
  );
}

export default Login;
