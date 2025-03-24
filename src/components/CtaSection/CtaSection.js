import React from "react";
import Bg from "../../images/backgrounds/bg_image_1.webp";
import { Link } from "react-router-dom";

const CtaSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className="calltoaction_section parallaxie"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container text-center">
        <div className="heading_block text-white">
          <h2 className="heading_text">我们已准备就绪，期待与您交流</h2>
          <p className="heading_description mb-0">
            我们的专家团队随时准备与您携手合作，从方案咨询到实施落地，全程为您保驾护航。
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
