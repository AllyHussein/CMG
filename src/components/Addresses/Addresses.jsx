import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Addresses.css";

function Addresses() {
  return (
    <Tabs defaultActiveKey="rome" id="uncontrolled-tab-example" className="m-3">
      <Tab eventKey="rome" title="Rome">
        <div className="tabsTextContainer">
          <div>
            <h6>OUR OFFICE:</h6> <br />{" "}
            <h5>Via Giovanni Amendola, 5400185, Rome, Italy.</h5>
          </div>
          <div>
            <h6>GET IN TOUCH</h6> <br /> Have a project in mind? Send a message.
            <br />
            <b>
              <a className="emailc" href="mailto:support@cmginvestment.com">
                support@cmginvestment.com
              </a>
            </b>
          </div>
        </div>
      </Tab>
      <Tab eventKey="egypt" title="Egypt">
        <div className="tabsTextContainer">
          <div>
            <h6>ADDRESS:</h6> <br />{" "}
            <h5>Villa 281 south academy, 5th settlement, New cairo, Egypt.</h5>
          </div>
          <div>
            <h6>GET IN TOUCH </h6>
            <br /> Have a project in mind? Send a message.
            <br />
            <b>
              <a className="emailc" href="mailto:support@cmginvestment.com">
                support@cmginvestment.com
              </a>
            </b>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default Addresses;
