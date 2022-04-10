import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ListItem from './ListItem'
import { AnimatePresence, motion } from 'framer-motion'
import { ActionIcon, Button, CloseButton, Group } from '@mantine/core'
import { DashIcon, XIcon } from '@primer/octicons-react'

const rootId = 'sheet-root'

type Props = {
  isOpen: boolean
  toggle(): void
  style?: React.CSSProperties
}

export default function Sheet({ isOpen, toggle, style }: Props) {
  const [el, setEl] = useState<HTMLElement>()

  useEffect(() => {
    const div = document.createElement('div')
    div.setAttribute('id', rootId)

    setEl(div)

    if (!document.getElementById(rootId)) {
      document.body.appendChild(div)
    }

    return () => {
      document.body.removeChild(div)
    }
  }, [])

  if (!el) {
    return null
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {!isOpen ? null : (
        <motion.div
          className="dialog__container"
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, translateY: 400 }}>
          <div className="dialog__header">
            <span>Uploading 1 item</span>

            <Group position="right" spacing={5}>
              <ActionIcon
                size="sm"
                onClick={toggle}
                variant="default"
                styles={{ root: { paddingLeft: 15, paddingRight: 15 } }}>
                <DashIcon />
              </ActionIcon>
              <ActionIcon
                size="sm"
                onClick={toggle}
                variant="default"
                styles={{ root: { paddingLeft: 15, paddingRight: 15 } }}>
                <XIcon />
              </ActionIcon>
            </Group>
          </div>
          <div className="dialog__status">
            <span>Staring Upload...</span>
            <Button variant="filled" color="red" size="xs">
              Cancel
            </Button>
          </div>
          <div className="dialog__body">
            <ul>
              {[...Array(10).keys()].map((key, i) => (
                <motion.div
                  key={key}
                  style={{ background: i % 2 === 0 ? 'orange' : 'pink' }}
                  initial={{ opacity: 0, translateX: i % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{
                    // duration: 2, // duration not working with type 'spring'
                    delay: i * 0.25,
                    type: 'spring',
                    stiffness: 100,
                  }}>
                  <ListItem />
                </motion.div>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    el
  )
}
