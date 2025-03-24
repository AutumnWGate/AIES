import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import about1 from '../../images/about/about_image_9.webp'
import about2 from '../../images/about/about_image_11.webp'
import about3 from '../../images/about/about_image_10.webp'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

const About = (props) => {
  const [isOpen, setOpen] = useState(false)

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <section className="about_section section_space">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="about_image_1">
              <img src={about1} alt="Techco - About" />
              <img
                src={about2}
                data-parallax='{"y" : 80, "smoothness": 6}'
                alt="Techco - About"
              />
              <img
                src={about3}
                data-parallax='{"y" : -80, "smoothness": 6}'
                alt="Techco - About"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block">
                <div className="heading_focus_text">
                  我们是 😃
                  <span className="badge bg-secondary text-white">AIES</span>
                </div>
                <h2 className="heading_text">为什么选择我们？</h2>
                <p className="heading_description mb-0">
                  我们专注于AI技术，为企业提供智能化解决方案，助力数字化转型，提升效率与竞争力。
                </p>
              </div>
              <ul className="icon_list unordered_list_block mb-5">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">
                    AI技术领先，赋能企业实现智能化升级与创新增长
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">
                    行业经验丰富，定制化解决方案满足多样化业务需求。
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">
                    科技赋能商业，助力企业降本增效，创造更大价值。
                  </span>
                </li>
              </ul>
              {/* <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Link onClick={ClickHandler} to="/pricing" className="btn">
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <button className="video_btn" onClick={() => setOpen(true)}>
                    <span className="btn_icon">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <span className="btn_label">How We Works</span>
                  </button>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
    </section>
  )
}

export default About
