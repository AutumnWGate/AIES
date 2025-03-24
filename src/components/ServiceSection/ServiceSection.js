import React from 'react'
import Services from '../../api/service'
import { Link } from 'react-router-dom'

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <section className="service_section section_space xb-hidden pb-0">
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text">
            我们的
            <span className="badge bg-secondary text-white">特色</span>
          </div>
          <h2 className="heading_text mb-0">专业服务</h2>
        </div>

        <div className="row">
          {Services.slice(0, 5).map((service, srv) => (
            <div className={`${service.col} mt-30`} key={srv}>
              {service.title ? (
                <div className="service_block">
                  <div className="service_image">
                    <img src={service.sImg} alt="IT Management Services" />
                  </div>
                  <div className="service_content">
                    <h3 className="service_title">{service.title}</h3>
                    <div className="service_description">
                      {service.description}
                    </div>
                    <div className="links_wrapper">
                      <ul className="category_btns_group unordered_list">
                        {service.thumbs.map((thumb) => (
                          <a>{thumb}</a>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>

        {/* <div className="btns_group pb-0">
          <Link
            onClick={ClickHandler}
            className="btn btn-outline-light"
            to="/service"
          >
            <span className="btn_label" data-text="More Services">
              More Services
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default ServiceSection
