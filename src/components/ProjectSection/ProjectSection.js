import React from 'react'
import Project from '../../api/project'
import { Link } from 'react-router-dom'
import { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const ProjectSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <section
      className="portfolio_section xb-hidden section_space"
      style={{ background: '#e0ecfc', paddingBottom: '20px', marginTop: 30 }}
    >
      <div className="container">
        <div className="heading_block">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="heading_focus_text">
                <span className="badge bg-secondary text-white">行业</span>
                解决方案
              </div>
              <h2 className="heading_text">聚焦行业，赋能未来</h2>
              <p className="heading_description mb-0">
                完善、成熟的多行业解决方案，赋能客户业务数智升级。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_carousel">
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          allowTouchMove={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          speed={400}
          parallax={true}
          breakpoints={{
            1025: {
              slidesPerView: 2,
            },
          }}
        >
          {Project.slice(0, 5).map((project, prj) => (
            <SwiperSlide key={prj}>
              <div className="portfolio_block">
                <div className="portfolio_image">
                  <img src={project.pImg} alt="Mobile App Design" />
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a>{project.title}</a>
                  </h3>
                  <ul className="category_list unordered_list">
                    {project.thumbs?.map((thumb) => (
                      <li key={thumb}>
                        <a>{thumb}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container text-center d-block d-lg-none">
        <div className="btns_group pb-0">
          <Link
            onClick={ClickHandler}
            className="btn btn-primary"
            to="/pricing"
          >
            <span className="btn_label" data-text="All Works">
              All Works
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
