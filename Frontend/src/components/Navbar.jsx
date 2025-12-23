import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="top-navbar">
      <h2>AI Search Platform</h2>

      <div className="profile-area">
        <div className="avatar" onClick={() => setOpen(!open)}>
          U
        </div>
        {open && <ProfileDropdown />}
      </div>
    </div>
  );
}

export default Navbar;
