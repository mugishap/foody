import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

function Navbar() {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    if (user === {} || !user) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userCredentials");
      window.location.replace("/login");
    } else {
      const obj = JSON.parse(localStorage.getItem("userCredentials"));
      setUser(obj);
      
        setLoader(true);
    }
  }, []);
  // useEffect(()=>{
  //   function capitalizeFirstLetter(string) {
  //     return string.charAt(0).toUpperCase() + string.slice(1);
  //   }

  //   setFirstName(capitalizeFirstLetter(user.firstName));
  //   setFirstName(capitalizeFirstLetter(user.lastName));
  // },[user])
  return (
    <div className="navbar">
      {loader ? (
        <>
          {" "}
          <p>
            F<span>OO</span>DY
          </p>
          <div className="icons">
            <FaSearch id="search" />
            <MdNotifications id="notif" />
          </div>
          <div className="user">
            <p>
              {user.firstName}
              {"    "}
              {user.lastName}
            </p>
            <img src="profile.png" />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
