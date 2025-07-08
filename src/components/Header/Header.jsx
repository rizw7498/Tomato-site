import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your Favourite Food !!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          harum nisi architecto, aspernatur, dolore quam nobis earum molestiae
          repellat vitae ea enim quibusdam expedita suscipit iure, eius
          praesentium saepe perspiciatis neque accusamus doloribus esse
          blanditiis. Esse nisi tenetur officiis. Eligendi.
        </p>
        <button>view Menu</button>
      </div>
    </div>
  );
};

export default Header;
