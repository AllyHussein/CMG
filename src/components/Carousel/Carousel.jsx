import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/Slider1.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";
import Slider4 from "../../assets/Slider4.jpg";
import Slider5 from "../../assets/Slider5.jpg";
import Slider6 from "../../assets/Slider6.jpg";
import Overlay from "../Overlay/Overlay";

function Landing() {
  const sliderImages = [
    {
      src: Slider1,
      alt: "First Slide",
      text: "Hospitality",
    },
    {
      src: Slider2,
      alt: "Second Slide",
      text: "Musical Events",
    },
    {
      src: Slider3,
      alt: "Third Slide",
      text: "Pharmacuticals",
    },
    {
      src: Slider4,
      alt: "Forth Slide",
      text: "Real Estate",
    },
    {
      src: Slider5,
      alt: "Fifth Slide",
      text: "Archeticture",
    },
    {
      src: Slider6,
      alt: "Sixth Slide",
      text: "Education",
    },
  ];
  return (
    <div style={{ position: "relative" }}>
      <Carousel fade>
        {sliderImages.map((image, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
            <Carousel.Caption>
              <h1>{image.text}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Overlay />
    </div>
  );
}

export default Landing;
