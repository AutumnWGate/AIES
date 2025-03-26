import React, { Fragment, useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/List'
import Collapse from '@mui/material/Collapse'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useLocale } from '../../../src/main-component/LocaleContext/LocaleContext'

const menus = [
  {
    id: 'zh',
    title: '中文',
  },
  {
    id: 'en',
    title: 'English',
  },
  {
    id: 'es',
    title: 'Español',
  },
]

const MobileMenu = ({ onClose }) => {
  const [openId, setOpenId] = useState(0)
  const { locale, toggleLocale } = useLocale()

  const toggleLang = (lang) => {
    toggleLocale(lang)
    onClose()
  }

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <ul className="main_menu_list clearfix">
      {menus.map((item, mn) => {
        return (
          <ListItem className={item.id === openId ? 'active' : null} key={mn}>
            <a onClick={() => toggleLang(item.id)}>{item.title}</a>
          </ListItem>
        )
      })}
    </ul>
  )
}

export default MobileMenu
