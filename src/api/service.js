import { FormattedMessage } from 'react-intl'
import sImg1 from '../images/services/service_image_1.webp'
import sImg2 from '../images/services/service_image_2.webp'
import sImg3 from '../images/services/service_image_3.webp'
import sImg4 from '../images/services/service_image_4.webp'
import sImg5 from '../images/services/service_image_5.webp'

import icon1 from '../images/icons/icon_code.svg'
import icon2 from '../images/icons/icon_programming_tree.svg'
import icon3 from '../images/icons/icon_monitor_2.svg'
import icon4 from '../images/icons/icon_phone.svg'
import icon5 from '../images/icons/icon_bug.svg'
import icon6 from '../images/icons/icon_programming.svg'

import icon7 from '../images/icons/icon_analisis_2.svg'
import icon8 from '../images/icons/icon_process.svg'
import icon9 from '../images/icons/icon_chart_2.svg'
import icon10 from '../images/icons/icon_meeting.svg'
import icon11 from '../images/icons/icon_bulb_2.svg'
import icon12 from '../images/icons/icon_speed_miter.svg'

const Services = [
  {
    Id: '1',
    sImg: sImg1,
    title: <FormattedMessage id="service1.title" />,
    slug: 'IT-Management-Services',
    thumbs: [
      <FormattedMessage id="service1.label1" />,
      // <FormattedMessage id="service1.label2" />,
      <FormattedMessage id="service1.label3" />,
    ],
    col: 'col-lg-6',
    description: (
      <ul>
        <li>
          <FormattedMessage id="service1.subt1" />
        </li>
        <li>
          <FormattedMessage id="service1.subt2" />
        </li>
      </ul>
    ),
  },
  {
    Id: '2',
    sImg: sImg2,
    title: <FormattedMessage id="service2.title" />,
    slug: 'IT-Management-Services',
    thumbs: [
      <FormattedMessage id="service2.label1" />,
      <FormattedMessage id="service2.label2" />,
      // <FormattedMessage id="service2.label3" />,
    ],
    col: 'col-lg-6',
    description: (
      <ul>
        <li>
          <FormattedMessage id="service2.subt1" />
        </li>
        <li>
          <FormattedMessage id="service2.subt2" />
        </li>
      </ul>
    ),
  },
  {
    Id: '3',
    sImg: sImg3,
    title: <FormattedMessage id="service3.title" />,
    slug: 'IT-Management-Services',
    thumbs: [
      <FormattedMessage id="service3.label1" />,
      <FormattedMessage id="service3.label2" />,
      <FormattedMessage id="service3.label3" />,
    ],
    col: 'col-lg-4',
    description: (
      <ul>
        <li>
          <FormattedMessage id="service3.subt1" />
        </li>
        <li>
          <FormattedMessage id="service3.subt2" />
        </li>
      </ul>
    ),
  },
  {
    Id: '4',
    sImg: sImg4,
    title: <FormattedMessage id="service4.title" />,
    slug: 'IT-Management-Services',
    thumbs: [
      <FormattedMessage id="service4.label1" />,
      <FormattedMessage id="service4.label2" />,
    ],
    col: 'col-lg-4',
    description: (
      <ul>
        <li>
          <FormattedMessage id="service4.subt1" />
        </li>
        <li>
          <FormattedMessage id="service4.subt2" />
        </li>
      </ul>
    ),
  },
  {
    Id: '5',
    sImg: sImg5,
    title: <FormattedMessage id="service5.title" />,
    slug: 'IT-Management-Services',
    thumbs: [
      <FormattedMessage id="service5.label1" />,
      // <FormattedMessage id="service5.label2" />,
      // <FormattedMessage id="service5.label3" />,
    ],
    col: 'col-lg-4',
    description: (
      <ul>
        <li>
          <FormattedMessage id="service5.subt1" />
        </li>
        <li>
          <FormattedMessage id="service5.subt2" />
        </li>
      </ul>
    ),
  },
  {
    Id: '6',
    sImg: icon1,
    title: 'Custom Software Development',
    slug: 'Custom Software Development',
    features: [
      'Software architecture design',
      'System integration services',
      'Data migration services',
      'Legacy app modernization',
    ],
  },
  {
    Id: '7',
    sImg: icon2,
    title: 'Audit & IT Consulting Services',
    slug: 'Audit-&-IT-Consulting-Services',
    features: [
      'TechGuard Audit',
      'CyberSafe Audit & IT Consulting',
      'AssuranceEdge & IT Consulting',
      'IT Sentry Audit & IT Consulting',
    ],
  },
  {
    Id: '8',
    sImg: icon3,
    title: 'Web Application Design and Development',
    slug: 'Web-Application-Design-and-Development',
    features: [
      'Web app development services',
      'Web portal development services',
      'Website development services',
      'Offshore web development',
    ],
  },
  {
    Id: '9',
    sImg: icon4,
    title: 'Mobile App Design and Development',
    slug: 'Mobile-App-Design-and-Development',
    features: [
      'Android development services',
      'iOS app development services',
      'Mobile application design services',
      'Enterprise mobile app development',
    ],
  },
  {
    Id: '10',
    sImg: icon5,
    title: 'Best UI/UX Design Services',
    slug: 'Best-UI/UX-Design-Services',
    features: [
      'PixelPerfection UI/UX Design',
      'DesignCraft UI/UX Design',
      'CreativeWave UI/UX Design',
      'InterfaceGenius UI/UX Design',
    ],
  },
  {
    Id: '11',
    sImg: icon6,
    title: 'Maintenance and Customer Support',
    slug: 'Maintenance-and-Customer-Support',
    features: [
      'CareCraft Maintenance',
      'FixItPro Maintenance',
      'TechCare Maintenance',
      'AssistEdge Maintenance',
    ],
  },
  {
    Id: '12',
    sImg: icon7,
    title: 'Strategic Planning and Execution',
    slug: 'Strategic-Planning-and-Execution',
    description:
      'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
  },
  {
    Id: '13',
    sImg: icon8,
    title: 'Business Process Optimization',
    slug: 'Business-Process-Optimization',
    description:
      'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
  },
  {
    Id: '14',
    sImg: icon9,
    title: 'Digital Transformation Consulting',
    slug: 'Digital-Transformation-Consulting',
    description:
      'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
  },
  {
    Id: '15',
    sImg: icon10,
    title: 'Strategic Planning and Execution',
    slug: 'Strategic-Planning-and-Executions',
    description:
      'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
  },
  {
    Id: '16',
    sImg: icon11,
    title: 'Change Management Solutions',
    slug: 'Change-Management-Solutions',
    description:
      'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
  },
  {
    Id: '17',
    sImg: icon12,
    title: 'Performance Metrics and KPI Development',
    slug: 'Performance-Metrics-and-KPI-Development',
    description:
      'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.',
  },
]

export default Services
