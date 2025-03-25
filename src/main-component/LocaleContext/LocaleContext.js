import React, { createContext, useContext } from 'react'

const LocaleContext = createContext()

export const useLocale = () => useContext(LocaleContext)

export default LocaleContext
