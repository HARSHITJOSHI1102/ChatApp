import { create } from "zustand"
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast";
// import generateToken from "../utils/generateToken.js";
export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  // checkAuth: true,

  checkAuth: async () => {
    try {
      const token = localStorage.getItem("token"); // 🔹 Get Token
      if (!token) throw new Error("No token found");

      const res = await axiosInstance.get("/auth/check", {
        headers: { Authorization: `Bearer ${token}` }, // 🔹 Add Token
      });
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      // get().connectSocket(); // Ensure this function exists
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      set({ isSigningUp: false });
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");

      if (get().connectSocket) {
        get().connectSocket();
      } else {
        console.warn("connectSocket function is not available.");
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage = error.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {

    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    }
    catch (error) {
      toast.error(error.response.data.message)
    }
  },
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });

    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error in update profile:", error);
      const errorMessage = error.response?.data?.message || "Failed to update profile. Please try again.";
      toast.error(errorMessage);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

}));
