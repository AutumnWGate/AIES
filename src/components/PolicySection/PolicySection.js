import React from 'react'
import sIcon1 from '../../images/icons/icon_user_check.svg'
import sIcon2 from '../../images/icons/icon_headphone.svg'
import sIcon3 from '../../images/icons/icon_dollar.svg'

const Policy = [
  {
    title: '专业技术团队',
    subTitle: '顶尖研发团队，持续技术投入，保持行业领先地位。',
    icon: sIcon1,
  },
  {
    title: '高效客户服务',
    subTitle: '我们提供快速响应服务，第一时间解决您的问题。',
    icon: sIcon2,
  },
  {
    title: '报价竞争力优',
    subTitle: '我们以合理的价格，提供卓越的解决方案。',
    icon: sIcon3,
  },
]

const PolicySection = (props) => {
  return (
    <section className="policy_section">
      <div className="container">
        <div className="row">
          {Policy.map((policy, pitem) => (
            <div className="col-lg-4" key={pitem}>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon bg-secondary-subtle">
                  <img src={policy.icon} alt="Dollar SVG Icon" />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{policy.title}</h3>
                  <p className="mb-0">{policy.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PolicySection
