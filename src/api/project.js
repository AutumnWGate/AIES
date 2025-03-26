import { FormattedMessage } from 'react-intl'
import pImg1 from '../images/portfolio/about_image_1.webp'
import pImg2 from '../images/portfolio/about_image_2.webp'
import pImg3 from '../images/portfolio/about_image_3.webp'
import pImg4 from '../images/portfolio/about_image_4.webp'
import pImg5 from '../images/case/case_image_2.webp'
import pImg6 from '../images/case/case_image_3.webp'

import pImg7 from '../images/portfolio/portfolio_item_image_4.webp'
import pImg8 from '../images/portfolio/portfolio_item_image_5.webp'
import pImg9 from '../images/portfolio/portfolio_item_image_6.webp'
import pImg10 from '../images/portfolio/portfolio_item_image_7.webp'
import pImg11 from '../images/portfolio/portfolio_item_image_8.webp'
import pImg12 from '../images/portfolio/portfolio_item_image_9.webp'
import pImg13 from '../images/portfolio/portfolio_item_image_10.webp'
import pImg14 from '../images/portfolio/portfolio_item_image_11.webp'

import tImg1 from '../images/case/icon_angular.svg'
import tImg2 from '../images/case/icon_elephent.svg'
import tImg3 from '../images/case/icon_netcore.svg'
import tImg4 from '../images/case/vuejs.svg'
import tImg5 from '../images/case/icon_python.svg'

const Project = [
  {
    Id: '1',
    pImg: pImg1,
    title: <FormattedMessage id="industry1" />,
    slug: 'Mobile-App-Design',
    sub: 'AI提升风险管理、客户服务、业务决策，推动金融创新与效率',
    thumbs: [
      <FormattedMessage id="industry1.label1" />,
      <FormattedMessage id="industry1.label2" />,
    ],
    description:
      'Our all-encompassing IELTS Coaching curriculum encompasses every aspect...',
  },
  {
    Id: '2',
    pImg: pImg2,
    title: <FormattedMessage id="industry2" />,
    thumbs: [
      <FormattedMessage id="industry2.label1" />,
      // <FormattedMessage id="industry2.label2" />,
      <FormattedMessage id="industry2.label3" />,
    ],
    description:
      'Our experienced coaches are not just educators; they are partners in your journey..',
  },
  {
    Id: '3',
    pImg: pImg3,
    title: <FormattedMessage id="industry3" />,
    thumbs: [
      <FormattedMessage id="industry3.label1" />,
      // <FormattedMessage id="industry3.label2" />,
      <FormattedMessage id="industry3.label3" />,
    ],
    description:
      'The contents of the citizenship test typically cover a range of subjects ...',
  },
  {
    Id: '4',
    pImg: pImg4,
    title: <FormattedMessage id="industry4" />,
    thumbs: [
      <FormattedMessage id="industry4.label1" />,
      // <FormattedMessage id="industry4.label2" />,
      <FormattedMessage id="industry4.label3" />,
    ],
    description:
      'Our all-encompassing IELTS Coaching curriculum encompasses every aspect...',
  },
]

export default Project
