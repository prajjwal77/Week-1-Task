import { motion } from "framer-motion";

function ProfileDropdown() {
  return (
    <motion.div
      className="profile-dropdown"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p>My Profile</p>
      <p>Settings</p>
      <p>Logout</p>
    </motion.div>
  );
}

export default ProfileDropdown;
