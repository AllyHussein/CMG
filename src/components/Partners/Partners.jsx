import React from "react";
import "./Partners.css";
import MonteCarlo from "../../assets/Monte Carlo.png";
import Pharma from "../../assets/Pharma.png";
import RealEstate from "../../assets/Real Estate.png";
import RomaCitta from "../../assets/Roma Citta.png";
import Institute from "../../assets/Institute.png";
import Azzuri from "../../assets/Azzuri.png";

function Partners() {
  return (
    <div>
      <div className="partnersContainer">
        <div>
          <img className="partnerLogo" src={Pharma} alt="Pharma" />
        </div>
        <div>
          <img className="partnerLogo" src={RomaCitta} alt="Roma Citta" />
        </div>
        <div>
          <img className="partnerLogo" src={Azzuri} alt="Azzuri" />
        </div>
        <div>
          <img className="partnerLogo" src={MonteCarlo} alt="MonteCarlo" />
        </div>
        <div>
          <img className="partnerLogo" src={RealEstate} alt="Real Estate" />
        </div>
        <div>
          <img className="partnerLogo" src={Institute} alt="Institute" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Partners;
