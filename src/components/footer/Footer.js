import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Bg from '../../images/shapes/bg_pattern_3.svg'
import icon1 from '../../images/icons/icon_mail.svg'
import icon2 from '../../images/icons/icon_calling.svg'
import icon3 from '../../images/icons/icon_map_mark.svg'
import icon4 from '../../images/icons/icon_x.svg'
import icon5 from '../../images/icons/icon_wechat.svg'
import Services from '../../api/service'

const ClickHandler = () => {
  window.scrollTo(10, 0)
}

const SubmitHandler = (e) => {
  e.preventDefault()
}

const Footer = (props) => {
  return (
    <footer className="site_footer footer_layout_1">
      <div className="content_box" style={{ backgroundImage: `url(${Bg})` }}>
        <div className="container">
          <div className="diract_contact_links text-white">
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon1} alt="Mail SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <FormattedMessage id="email" />
                </h3>
                <p className="mb-0">xxxxxxxx@aies.online</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon2} alt="Calling Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <FormattedMessage id="phone" />
                </h3>
                <p className="mb-0">
                  <FormattedMessage id="phone1" /> +85257905434
                </p>
                <p className="mb-0">
                  <FormattedMessage id="phone2" /> +8618038010817
                </p>
              </div>
            </div>

            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon5} alt="Map Mark Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <FormattedMessage id="wechat" />
                </h3>
                <p className="mb-0">18038010817</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon4} alt="Map Mark Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">X</h3>
                <p className="mb-0">https://x.com/Autumn_W_Gate</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon3} alt="Map Mark Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <FormattedMessage id="address" />
                </h3>
                <p className="mb-0">
                  <FormattedMessage id="address.detail" />
                </p>
              </div>
            </div>
          </div>
          {/* <div className="footer_main_content">
            <div className="row justify-content-lg-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget pe-md-3">
                  <h2 className="footer_info_title">Newsletter</h2>
                  <p>
                    Sign up to Techco weekly newsletter to get the latest
                    updates.
                  </p>
                  <form className="footer_newslatter" onSubmit={SubmitHandler}>
                    <label htmlFor="footer_mail_input">
                      <img src={icon4} alt="Mail SVG Icon" />
                    </label>
                    <input
                      id="footer_mail_input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                  <ul className="social_links_block unordered_list">
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Linkdin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Services</h3>
                  <ul className="icon_list unordered_list_block">
                    {Services.slice(0, 6).map((service, srv) => (
                      <li key={srv}>
                        {service.title ? (
                          <Link
                            onClick={ClickHandler}
                            to={`/service-single/${service.slug}`}
                          >
                            <span className="icon_list_text">
                              {service.title}
                            </span>
                          </Link>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Information</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        <span className="icon_list_text">About Techco</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/service">
                        <span className="icon_list_text">Investors</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        <span className="icon_list_text">Contact</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        <span className="icon_list_text">
                          Affiliate Program
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/portfolio">
                        <span className="icon_list_text">Career</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/pricing">
                        <span className="icon_list_text">Pricing Plan</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Product</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} to="/portfolio">
                        <span className="icon_list_text">Case Studies</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/pricing">
                        <span className="icon_list_text">Our Pricing</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/service">
                        <span className="icon_list_text">Features</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        <span className="icon_list_text">Overview</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/blog">
                        <span className="icon_list_text">New Releases</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/pricing">
                        <span className="icon_list_text">Solutions</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            <FormattedMessage id="copyright" />
          </p>
          {/* <p className="copyright_text m-0">Developed by AIES</p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
