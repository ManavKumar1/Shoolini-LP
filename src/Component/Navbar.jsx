import React from "react";
import '../style.scss'

function Navbar() { 
    return (
      <>
        <div className="Main-Navbar-section">
          <div className="Main-Navbar flex ">
            <div className="Company-Name">
              <h2>HackHounds</h2>
            </div>
            <div className="Company-Links ">
              <ul>
                <li>
                  <a
                    href="https://forms.gle/KouWzLBiyER8Kab86"
                    className="primary-button"
                  >
                    Join Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}
export default Navbar;