import React from "react";
import Hackvideo from "../assets/Hackhound.mp4";


window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);

function videoScroll() {
  if (document.querySelectorAll("video[autoplay]").length > 0) {
    var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll("video[autoplay]");

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}


function VideoSection() {

  return (
    <div className="Video-section-info">
      <div className="Video-info-container  container flex">
        <div className="Video-Section">
          <video src={Hackvideo} autoPlay muted playsinline loop controls />
        </div>
        <div className="Info-Section">
          <h3>
            Hello Shoolinians!🥁 Cybersecurity incidents are bad news. But we
            also have a good news.
          </h3>
          <h4>
            Introducing: HACKHOUND, the Cybersecurity Club of Shoolini
            University.
          </h4>
          <p>
            👨🏻‍💻 Here you will not only learn about a wide range of topics
            including network security, threat intelligence, ethical hacking,
            etc but you will also have access to the latest technology, hands-on
            training, and expert-led workshops. Join a dynamic community of
            tech-savvy students and push the limits of what's possible.
          </p>

          <span>
            Are you ready to unleash your potential in the world of
            cybersecurity?
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
