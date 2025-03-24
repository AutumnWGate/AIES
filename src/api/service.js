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
    title: '数据采集与清洗',
    slug: 'IT-Management-Services',
    thumbs: ['爬虫', '特征处理', '归一化'],
    col: 'col-lg-6',
    description: (
      <ul>
        <li>提供多源数据采集服务，包括结构化数据和非结构化数据。</li>
        <li>高质量数据清洗，对原始数据进行去重、异常值处理等操作。</li>
      </ul>
    ),
  },
  {
    Id: '2',
    sImg: sImg2,
    title: '模型训练与微调',
    slug: 'Data-Tracking-and-Security',
    thumbs: ['神经网络', '泛化能力', '迁移学习'],
    thumb1: 'Management',
    thumb2: 'Transfer',
    col: 'col-lg-6',
    description: (
      <ul>
        <li>基于高质量数据，训练高精度AI模型</li>
        <li>微调现有模型，提升特定场景下的性能。</li>
      </ul>
    ),
  },
  {
    Id: '3',
    sImg: sImg3,
    title: '模型部署与优化',
    slug: 'Website-Development',
    thumbs: ['AWS', 'Docker', '剪枝', '量化'],
    thumb1: 'Landing Page',
    thumb2: 'Plugins',
    col: 'col-lg-4',
    description: (
      <ul>
        <li>提供云端、本地端的模型部署服务</li>
        <li>通过参数调优，提升模型性能</li>
      </ul>
    ),
  },
  {
    Id: '4',
    sImg: sImg4,
    title: '现代Ai Agent应用',
    slug: 'Modern-Technology-Solution',
    thumbs: ['智能助手', '业务流程自动化'],
    thumb1: 'Consultation',
    thumb2: 'solution',
    col: 'col-lg-4',
    description: (
      <ul>
        <li>智能Agent应用，助力企业数字化转型</li>
        <li>高效、灵活的智能助手，提升运营效率</li>
      </ul>
    ),
  },
  {
    Id: '5',
    sImg: sImg5,
    title: 'UI/UX 设计服务',
    slug: 'UI-UX-Design-Services',
    thumbs: ['创意', '现代化'],
    thumb1: 'Website',
    thumb2: 'Mobile App',
    col: 'col-lg-4',
    description: (
      <ul>
        <li>打造用户友好、视觉出众的界面</li>
        <li>采用敏捷设计，按时交付高质量设计方案</li>
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
