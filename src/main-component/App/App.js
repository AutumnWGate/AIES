import React, { useState } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'
import AllRoute from '../router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import lang from '../../locale/index'
import LocaleContext from '../LocaleContext/LocaleContext'
const App = () => {
  const [locale, setLocale] = useState('zh')
  const toggleLocale = (newLocale) => {
    setLocale(newLocale)
  }
  return (
    <IntlProvider locale={locale} messages={lang[locale]}>
      <LocaleContext.Provider value={{ locale, toggleLocale }}>
        <div className="App" id="scrool">
          <AllRoute />
          <ToastContainer />
        </div>
      </LocaleContext.Provider>
    </IntlProvider>
  )
}

export default App
