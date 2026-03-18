import React from "react";
import { FaUtensils, FaRobot, FaChartBar } from "react-icons/fa";
import HeartRate from "../assets/images/HeartRate.png";
import diet from "../assets/images/diet.png";
import stats from "../assets/images/stats.png";
import chatbot from "../assets/images/chatbot.png";

export default function FeaturesSection() {
  return (
    <section className="Features-Section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div>
        <h4 className="features-small-title">FEATURES WE PROVIDE</h4>
        <div className="d-flex gap-2 align-items-center">
      <h2 className="features-main-title">
  Calculating BMI is easier
  <img src={HeartRate} alt="Heart Rate Logo" className="ms-2 heart-img" />
</h2>
</div>
        <p className="features-description">
          We calculate your BMI index from data like age, height, weight.
        </p>
        </div>
</div>
<div className="col-md-7">
<div className="row">
   <div className="col-md-4 text-center  feature-item">
            <img src={diet} alt="Diet Logo" className="mb-2" />
            <h5 className="feature-title">Food Recommendation</h5>
            <p>We provide food recommendation according to your calorie requirements.</p>
          </div>

          <div className="col-md-4 text-center pt-5 feature-item">
            <img src={chatbot} alt="Chatbot Logo" className="mb-2" />
            <h5 className="feature-title">Interactive Chatbot</h5>
            <p>Solve your queries by interacting with our bot.</p>
          </div>

          <div className="col-md-4 text-center  feature-item">
            <img src={stats} alt="Stats Logo" className="mb-2" />
            <h5 className="feature-title">Nutritional Value</h5>
            <p>Get all the nutritional values of your preferred dish.</p>
          </div>
</div>
      </div>   
        
        </div>
      </div>
    </section>
  );
}