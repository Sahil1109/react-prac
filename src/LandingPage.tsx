import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/pokemon">Pokemon finder</Link>
    </div>
  );
}

export default LandingPage;
