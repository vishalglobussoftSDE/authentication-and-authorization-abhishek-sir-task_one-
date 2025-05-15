import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    
    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String, // Cloudinary URL or local path
      default: "",
    },

    isVerified: {
      type: Boolean,
      default: false, // becomes true after OTP verification
    },

    otp: {
      code: String,       // Store hashed OTP
      expiresAt: Date,    // Optional: set expiry for OTP
    },

    resetPasswordToken: String,
    resetPasswordExpires: Date,

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
