import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react'

type ContextValue = {
  isOpen: boolean
  setSidebar?: (value?: Pick<ContextValue, 'isOpen'>) => void
}

const initialState = { isOpen: JSON.parse(localStorage.getItem('isSidebarOpen') || 'true') ?? true }

/**
 * If we set default createContext value to initialState
 * then `useSidebar` will not throw Error.
 * But in this case, we set the value to `undefined`, so it will throw
 * if we calling `useSidebar` without the `Provider`
 */
const SidebarCtx = createContext<ContextValue | undefined>(undefined)

export const SidebarProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialState)

  const setSidebar = useCallback((option?: typeof initialState) => {
    if (!option) {
      setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }))
      return
    }

    setState(option)
  }, [])

  useEffect(() => {
    if (typeof state.isOpen === 'boolean') {
      localStorage.setItem('isSidebarOpen', JSON.stringify(state.isOpen))
    }
  }, [state.isOpen])

  const value = useMemo(() => ({ ...state, setSidebar }), [state])

  return <SidebarCtx.Provider value={value}>{children}</SidebarCtx.Provider>
}

export const useSidebar = () => {
  const context = useContext(SidebarCtx)

  if (!context) {
    throw new Error(
      'useSidebar hook cannot be called outside the Sidebar Context Provider'
    )
  }

  return context
}
