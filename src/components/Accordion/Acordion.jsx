import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";
function FAQs() {
  return (
    <div className="faqs">
      <h5 style={{ marginBottom: "20px" }}>— ABOUT CMG:</h5>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ fontWeight: "bold" }}>
            When Was CMG Established ?
          </Accordion.Header>
          <Accordion.Body style={{ color: "#5F6973" }}>
            In 1992, in Rome, Italy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Who's The Founder of CMG ?</Accordion.Header>
          <Accordion.Body style={{ color: "#5F6973" }}>
            Dr. Maged Hanna An Italian Egyptian Businessman.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What's The Vision of CMG ?</Accordion.Header>
          <Accordion.Body style={{ color: "#5F6973" }}>
            To rank among the top 100 corporations in the Middle East, we are
            striving.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What's the mission of CMG ?</Accordion.Header>
          <Accordion.Body style={{ color: "#5F6973" }}>
            To empower the Italian and Egyptian economies by establishing
            massive projects that benefit people and create numerous job
            opportunities for young people.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQs;
