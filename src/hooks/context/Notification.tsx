import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react'

type ContextValue = {
  isOpen: boolean
  setNotification?: (value?: Pick<ContextValue, 'isOpen'>) => void
}

const initialState = { isOpen: true }

/**
 * If we set default createContext value to initialState
 * then `useNotification` will not throw Error.
 * But in this case, we set the value to `undefined`, so it will throw
 * if we calling `useNotification` without the `Provider`
 */
const NotificationCtx = createContext<ContextValue | undefined>(undefined)

export const NotificationProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialState)

  const setNotification = useCallback((option?: typeof initialState) => {
    if (!option) {
      return
    }

    setState(option)
  }, [])

  const value = useMemo(() => ({ ...state, setNotification }), [state])

  return (
    <NotificationCtx.Provider value={value}>
      {children}
    </NotificationCtx.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationCtx)

  if (!context) {
    throw new Error(
      'useNotification hook cannot be called outside the Notification Context Provider'
    )
  }

  return context
}
