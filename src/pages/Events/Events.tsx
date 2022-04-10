import { Button, Space } from '@mantine/core'
import { useEffect, useRef } from 'react'

type HeadingCustomEvent = CustomEvent<{
  color: string
}>

/**
 * @see https://www.youtube.com/watch?v=IN5HlkqjQck Custom Events in JavaScript
 */
export default function EventsPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) {
      return
    }

    const headingEl = headingRef.current

    const customEventListener = (e: Event) => {
      const targetEl = e.target as HTMLHeadingElement
      const detailProps = (e as HeadingCustomEvent).detail
      // Set heading tag color
      targetEl.style.color = detailProps.color
    }

    const clickEventListener = (e: MouseEvent) => {
      console.log('Custom clientX', e.clientX)
    }

    headingEl.addEventListener('custom-event', customEventListener)
    headingEl.addEventListener('click', clickEventListener)

    return () => {
      headingEl.removeEventListener('custom-event', customEventListener)
      headingEl.removeEventListener('click', clickEventListener)
    }
  }, [])

  const handleDispatcEvent = () => {
    // Custom properties should exist only in detail key
    const event: HeadingCustomEvent = new CustomEvent('custom-event', {
      detail: {
        color: 'purple',
      },
    })

    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: 250,
    })

    headingRef.current?.dispatchEvent(event)
    headingRef.current?.dispatchEvent(clickEvent)
  }

  return (
    <>
      <h4 ref={headingRef}>JS Custom Events</h4>
      <Space my="sm" />
      <Button variant="default" onClick={handleDispatcEvent}>
        Dispatch Event
      </Button>
    </>
  )
}
