import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleRegister = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill in all fields!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!formData.terms) {
      toast.error("You must accept the terms and conditions!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    toast.success("Registration Successful!");
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#f6f6f6]">
      <div className="mx-auto flex min-h-full w-full mt-20 items-center justify-center">
        <div className="w-full max-w-96 border border-[#d2d2d2] bg-[#f8f8f8] px-7 p-10">
          {/* Brand */}
          <div className="mb-6 mt-4 flex justify-center">
            <h1 className="text-[31px] leading-none tracking-[0.11em] text-black">
              INCEPTA
            </h1>
          </div>

          {/* First Name */}
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              autoFocus
              className="h-11 w-full rounded-md border border-[#cfcfcf] bg-[#f8f8f8] px-4 text-[16px] text-black placeholder-black/90 focus:border-black focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              className="h-11 w-full rounded-md border border-[#cfcfcf] bg-[#f8f8f8] px-4 text-[16px] text-black placeholder-black/90 focus:border-black focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Id*"
              className="h-11 w-full rounded-md border border-[#cfcfcf] bg-[#f8f8f8] px-4 text-[16px] text-black placeholder-black/90 focus:border-black focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password*"
              className="h-11 w-full rounded-md border border-[#cfcfcf] bg-[#f8f8f8] px-4 text-[16px] text-black placeholder-black/90 focus:border-black focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter Password*"
              className="h-11 w-full rounded-md border border-[#cfcfcf] bg-[#f8f8f8] px-4 text-[16px] text-black placeholder-black/90 focus:border-black focus:outline-none"
            />
          </div>

          {/* Terms */}
          <div className="mb-5 flex items-start gap-2">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 mt-1 shrink-0 cursor-pointer border border-black bg-white accent-black"
            />
            <div className="text-[13.5px] text-black flex-1">
              <span>
                By clicking this, I accept the{" "}
                <span className="cursor-pointer underline underline-offset-[3px]">
                  Terms & conditions
                </span>{" "}
                &{" "}
                <span className="cursor-pointer underline underline-offset-[3px]">
                  Privacy policy
                </span>
              </span>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleRegister}
            className="h-11 w-full rounded-md bg-black text-[16px] tracking-[0.12em] text-white transition-colors duration-200 hover:bg-[#a4a3a3] focus:outline-none"
          >
            SIGN UP
          </button>

          {/* Bottom Links */}
          <div className="mt-3 font-stretch-75% flex justify-center gap-6 text-[14px] text-black">
            <span
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer underline underline-offset-[3px]"
            >
              Back to store
            </span>
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer underline underline-offset-[3px]"
            >
              Sign in account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
