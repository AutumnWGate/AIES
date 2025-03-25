import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
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
          <div className="col">
            <div
              className="it_solution_hero_content"
              style={{ backgroundImage: `url(${Bg1})` }}
            >
              <h1>
                <FormattedMessage id="hero.title" />
              </h1>
              {/* <p style={{ textIndent: '2em' }}>
                我们是一家专注于为企业提供智能化解决方案的AI技术服务商。我们致力于通过先进的人工智能技术，帮助企业实现数字化转型，提升运营效率和竞争力。
                我们的核心产品包括智能数据分析、自动化流程优化、AI客服系统等，广泛应用于金融、制造、零售、医疗等多个行业。
                凭借深厚的技术积累和丰富的行业经验，我们为客户提供定制化的AI解决方案，助力企业降本增效、创新增长。
                我们以“科技赋能商业”为使命，持续推动AI技术的落地应用，为企业创造更大价值。
              </p> */}
              <ul>
                <li>
                  <FormattedMessage id="hero.subt1" />
                </li>
                <li>
                  <FormattedMessage id="hero.subt2" />
                </li>
                <li>
                  <FormattedMessage id="hero.subt3" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
