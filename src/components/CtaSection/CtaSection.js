import React from 'react'
import Bg from '../../images/backgrounds/bg_image_1.webp'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const CtaSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <section
      className="calltoaction_section parallaxie"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container text-center">
        <div className="heading_block text-white">
          <h2 className="heading_text">
            <FormattedMessage id="contact.title" />
          </h2>
          <p className="heading_description mb-0">
            <FormattedMessage id="contact.subtitle" />
          </p>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
