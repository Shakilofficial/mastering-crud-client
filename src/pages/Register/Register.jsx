import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/ui/Header";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { createUser, googleLogin, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirm !== password) {
      toast.error("Passwords do not match");
      return;
    }

    const toastId = toast.loading("Creating user ...");

    try {
      await createUser(email, password);
      toast.success("User created successfully!", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in with Google ...");

    try {
      await googleLogin();
      toast.success("Logged in with Google successfully!", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <Header
          title="Join Us Today!"
          description="Register to create your account and get started."
        />
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-primary font-bold hover:underline cursor-pointer"
            >
              Login
            </NavLink>
          </p>
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              {isLoading ? "Creating user..." : "Sign Up"}
            </button>
          </div>
          <div className="divider mt-6">Or, continue with</div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-primary w-full flex items-center justify-center mt-4"
          >
            Google
            <FcGoogle className="ml-2 w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
