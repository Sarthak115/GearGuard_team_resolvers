import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // fake login for hackathon
    navigate("/dashboard");
  };

  return (
    <div style={{ width: 300, margin: "100px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input placeholder="Email ID" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Sign In</button>
      </form>

      <p style={{ marginTop: 10 }}>
        <span style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;
