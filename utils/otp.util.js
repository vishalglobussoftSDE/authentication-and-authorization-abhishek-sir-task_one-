export const generateOtp = () => {
  const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiration
  return { code, expiresAt };
};
