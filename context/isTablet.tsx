import { createContext, FunctionComponent, useContext } from 'react'
import { useMedia } from '../hooks/useMedia'

export const IsTabletContext = createContext(null)

export const useIsTabletContext = () => useContext(IsTabletContext)

export const IsTabletContextProvider: FunctionComponent = (props) => {
  const isTablet = useMedia([`(min-width: 1024px)`], [true], false)

  return <IsTabletContext.Provider value={isTablet} children={props.children} />
}
