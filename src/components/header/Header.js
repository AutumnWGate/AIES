import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useLocale } from '../../../src/main-component/LocaleContext/LocaleContext'
import icon1 from '../../images/icons/icon_wifi.svg'
import icon2 from '../../images/icons/icon_dollar_2.svg'
import icon3 from '../../images/icons/icon_chart.svg'
import icon4 from '../../images/icons/icon_tag_2.svg'
import icon5 from '../../images/icons/icon_user_2.svg'
import icon6 from '../../images/icons/icon_users.svg'
import icon7 from '../../images/icons/icon_pen.svg'
import icon8 from '../../images/clients/client_logo_9.webp'
import icon9 from '../../images/clients/client_logo_10.webp'
import icon10 from '../../images/avatar/avatar_7.webp'
import icon11 from '../../images/icons/icon_quote.svg'
import logo from '../../images/site_logo/site_logo_3.svg'
import cases from '../../images/case/case_image_4.webp'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header = (props) => {
  const [mobailActive, setMobailState] = useState(false)
  const { locale, toggleLocale } = useLocale()

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  const toggleLang = (lang) => {
    toggleLocale(lang)
  }

  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="site_header site_header_1">
      <div className="header_top text-center">
        <div className="container">
          {/* <p className="m-0">Subscribe us and receive <b>20% bonus</b> discount on checkout. <Link onClick={ClickHandler} to="/pricing"><u>Learn more</u> <i className="fa-solid fa-angle-right"></i></Link></p> */}
        </div>
      </div>
      <div
        className={`header_bottom stricky  ${
          isSticky ? 'stricked-menu stricky-fixed' : ''
        }`}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-2 col-5">
              <div className="site_logo">
                <Link onClick={ClickHandler} className="site_link" to="/">
                  <img
                    src={logo}
                    alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-end"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li className="dropdown">
                      <Link
                        // onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="home_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FormattedMessage id="lang" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="home_submenu"
                      >
                        <li>
                          <a onClick={() => toggleLang('zh')}>中文</a>
                        </li>
                        <li>
                          <a onClick={() => toggleLang('en')}>English</a>
                        </li>
                        <li>
                          <a onClick={() => toggleLang('es')}>Español</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <ul className="header_btns_group unordered_list justify-content-end">
              <li>
                <button
                  className="mobile_menu_btn"
                  onClick={() => setMobailState(!mobailActive)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_menu_dropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-bars"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? 'active' : ''}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(!mobailActive)}
              ></div>
              <nav className="xb-header-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div
            className="xb-header-menu-backdrop"
            onClick={() => setMobailState(false)}
          ></div>
        </div>
      </div>
    </header>
  )
}

export default Header
