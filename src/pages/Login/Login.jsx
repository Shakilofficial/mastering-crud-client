import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/ui/Header";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleLogin, login,} = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in ...");
    try {
      const user = await login(email, password);
      console.log(user);
      axios.post("/auth/access-token", { email: user.user.email });
      toast.success("Logged in", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in ...");
    try {
      await googleLogin();
      toast.success("Logged in", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <Header
          title="Welcome Back!"
          description="Log in to your account to access all features."
        />
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              onBlur={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-center text-sm">
            Do not have an account?
            <NavLink
              to="/register"
              className="text-primary font-bold hover:underline cursor-pointer"
            >
              Register
            </NavLink>
          </p>
          <div className="form-control mt-2">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="divider">Or, Continue With</div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-primary w-full flex justify-between items-center cursor-pointer"
          >
            Google
            <FcGoogle className="w-8 h-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
