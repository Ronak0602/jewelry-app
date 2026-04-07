import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
      );
      toast.success("Google Login Successful!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
      });
      navigate("/");
    } catch (error) {
      toast.error("Google Login Failed!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        pauseOnHover: true,
      });
    }
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        pauseOnHover: true,
      });
      return;
    }
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      toast.error("Please register first!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        pauseOnHover: true,
      });
      return;
    }
    if (
      savedUser.email !== formData.email ||
      savedUser.password !== formData.password
    ) {
      toast.error("Invalid email or password!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        pauseOnHover: true,
      });
      return;
    }
    localStorage.setItem("loggedIn", "true");
    toast.success("Login Successful!", {
      position: "top-right",
      autoClose: 3000,

      pauseOnHover: true,
    });
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className=" flex items-center justify-center bg-white py-10 md:py-20">
      <div className="border border-gray-300 px-10 py-10 w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://inceptajewels.com/images/logo-icon.svg"
            alt="Incepta"
            className="h-10"
          />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border border-gray-100 bg-gray-50 py-2 text-xs font-light tracking-widest hover:bg-gray-100 transition duration-300 mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="G"
            className="w-4 h-4"
          />
          <span>LOGIN WITH GOOGLE</span>
        </button>
        {/* OR Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Id*"
            className="w-full border border-gray-300 pl-5 p-3 text-sm placeholder-gray-800 focus:outline-none focus:border-gray-800 rounded-lg"
          />
          <span className="absolute right-3 top-3.5 text-gray-400">👤</span>
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password*"
            className="w-full border border-gray-300 pl-5 p-3 text-sm placeholder-gray-800 focus:outline-none focus:border-gray-800 rounded-lg"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-400 cursor-pointer"
          >
            👁️
          </span>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="cursor-pointer w-4 h-4 accent-black"
            />
            <label
              htmlFor="remember"
              className="text-xs text-gray-900 cursor-pointer font-light tracking-wide"
            >
              Remember Me
            </label>
          </div>
          <span className="text-xs text-gray-800 underline underline-offset-4 cursor-pointer hover:text-black font-light tracking-wide">
            Forgot password?
          </span>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-black hover:bg-gray-400 text-white py-2 tracking-widest transition duration-300 mb-2 rounded"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          SIGN IN
        </button>

        {/* Bottom Links */}
        <div className="flex justify-center gap-6 mt-4">
          <span
            onClick={() => navigate("/")}
            className="text-xs font-serif text-gray-600 underline underline-offset-4 cursor-pointer hover:text-black"
          >
            Back to store
          </span>
          <span
            onClick={() => {
              navigate("/register");
              window.scrollTo(0, 0);
            }}
            className="text-xs font-serif text-gray-600 underline underline-offset-4 cursor-pointer hover:text-black"
          >
            Create account
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
