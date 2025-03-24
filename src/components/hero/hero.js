import React from 'react'
import { Link } from 'react-router-dom'
import Bg1 from '../../images/shapes/it_solution_hero_bg_1.svg'
import Bg2 from '../../images/hero/it_solution_hero_image_2.webp'
import heroImg from '../../images/hero/it_solution_hero_image_1.webp'
import icon from '../../images/icons/icon_stars_trustpilot.svg'
import avatar1 from '../../images/avatar/avatar_1.webp'
import avatar2 from '../../images/avatar/avatar_2.webp'
import avatar3 from '../../images/avatar/avatar_3.webp'

const Hero = () => {
  return (
    <section className="it_solution_hero_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div
              className="it_solution_hero_content"
              style={{ backgroundImage: `url(${Bg1})` }}
            >
              <div className="heading_focus_text mb-0 d-inline-flex align-items-center">
                👋 Hi 我们{' '}
                <span className="badge bg-secondary text-white">是 AIES</span>
              </div>
              <h1>人工智能企业服务及智能化IT解决方案</h1>
              <p>
                {/* 通过先进的人工智能技术，帮助企业实现数字化转型，提升运营效率和竞争力 */}
                我们是一家专注于为企业提供智能化解决方案的AI技术服务商。我们致力于通过先进的人工智能技术，帮助企业实现数字化转型，提升运营效率和竞争力。我们的核心产品包括智能数据分析、自动化流程优化、AI客服系统等，广泛应用于金融、制造、零售、医疗等多个行业。凭借深厚的技术积累和丰富的行业经验，我们为客户提供定制化的AI解决方案，助力企业降本增效、创新增长。我们以“科技赋能商业”为使命，持续推动AI技术的落地应用，为企业创造更大价值
              </p>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                {/* <li>
                  <Link className="btn" to="/pricing">
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li> */}
                <li>
                  <div className="review_short_info">
                    <div className="d-flex">
                      <img src={icon} alt="Techco - Trustpilot Review" />
                      <span>4.8</span>
                    </div>
                    <div className="review_counter">
                      <b>200+</b> 好评
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="it_solution_hero_images unordered_list">
              <li>
                <img src={heroImg} alt="Techco - IT Solution - Hero" />
              </li>
              <li>
                <div className="worldwide_clients">
                  <div className="counter_value">150+</div>
                  <p>我们的客户遍布全球，涵盖多个行业和领域。</p>
                  <ul className="avatar_group unordered_list">
                    <li>
                      <img src={avatar1} alt="Techco - Avatar" />
                    </li>
                    <li>
                      <img src={avatar2} alt="Techco - Avatar" />
                    </li>
                    <li>
                      <img src={avatar3} alt="Techco - Avatar" />
                    </li>
                    <li>5k+</li>
                  </ul>
                </div>
              </li>
              <li>
                <ul className="categories unordered_list_block">
                  <li>
                    <Link to="/">
                      <span>数据采集与处理</span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa-solid fa-plus"></i>
                      <span>模型训练微调</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>模型部署优化</span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className="business_growth_content"
                  style={{ backgroundImage: `url(${Bg2})` }}
                >
                  <div className="business_growth">
                    <div className="progress_content">
                      <svg
                        role="progressbar"
                        width="260"
                        height="260"
                        viewBox="0 0 100 100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="88"
                      >
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42"
                          shapeRendering="geometricPrecision"
                          fill="none"
                          stroke="#f1f1f1"
                          strokeWidth="5"
                        ></circle>
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42"
                          shapeRendering="geometricPrecision"
                          className="business_growth-circle-58"
                          fill="none"
                          strokeWidth="10"
                          strokeDashoffset="31.680000000000007"
                          strokeDasharray="264"
                          strokeLinecap="round"
                          style={{
                            transform: 'rotate(-90deg)',
                            transformOrigin: '50% 50%',
                          }}
                          stroke="#fff"
                          data-angel="88"
                        ></circle>
                        <text
                          className="business_growth-text-58"
                          x="50%"
                          y="50%"
                          fill="#fff"
                          textAnchor="middle"
                          dy="0.35em"
                          fontSize="1.6rem"
                          fontWeight="400"
                        >
                          <tspan className="business_growth-percent-58">
                            88
                          </tspan>
                          <tspan className="business_growth-unit-58">%</tspan>
                        </text>
                      </svg>
                      <p>get 88% of the best services and growth business</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
