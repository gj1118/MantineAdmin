import { useEffect, useRef } from 'react'
import type { DependencyList } from 'react'

/**
 * @see https://kentcdodds.com/blog/compound-components-with-react-hooks
 */
export default function useEffectAfterMount(
  cb: () => void,
  dependencies: DependencyList
) {
  const justMounted = useRef(true)

  useEffect(() => {
    if (!justMounted.current) {
      return cb()
    }
    justMounted.current = false
  }, dependencies)
}
