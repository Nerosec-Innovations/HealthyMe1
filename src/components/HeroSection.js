import React from "react";
import vector from "../assets/images/Vector.png";
import SearchBar from "./Searchbar";
import hero from "../assets/images/hero.png";
export default function HeroSection() {
  return (
    <div>
      <section className="Hero-Section pt-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-8">
              <div className="d-flex align-items-center gap-3 health border border-dark px-3 py-1 mb-3">
                <h4>Health Matters</h4>
                <img src={vector} alt="vector-icon" />
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center ">
                <h1>
                  <span>One Step Solution</span><br />
                  for all your dietary needs.
                </h1>
                </div>
                 <div className="d-flex justify-content-lg-center">
                    <p>Using your BMI index we calculate whether the dish is suitable for you.</p>
                 </div>
              </div>
              <SearchBar />
            </div>
              <div className="col-md-4">
                <figure className="d-flex justify-content-md-center align-items-lg-center">
                    <img src={hero} alt="Hero-image" className="" />
                </figure>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
