import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Simple React app with routing, and webpack.</h1>

    <p>built by Joe Amsler</p>

    <Link to="/" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
);

export default HomePage;
