import React from "react";
import '../style.scss'
function VideoSection() {
  return (
    <div className="card-section container">
      <div className="cards ">
        <div className="card">
          <h3>Dynamic Community</h3>
          <p>
            Dynamic community of tech-savvy students and push the limits of
            what's possible.
          </p>
        </div>
        <div className="card">
          <h3>Quality Learing</h3>
          <p>
            Topics including network security, threat intelligence, ethical
            hacking, etc.
          </p>
        </div>
        <div className="card">
          <h3>Experienced Mentors</h3>
          <p>
            Experienced mentors who are present anytime to help you and make you move forward.
          </p>
        </div>
      </div>
    </div>
  );
}
export default VideoSection;
