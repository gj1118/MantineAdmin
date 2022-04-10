import {
  Paper,
  Text,
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  Space,
} from '@mantine/core'
import { MinusIcon, PlusIcon } from '@modulz/radix-icons'
import { motion, Transition, Variants } from 'framer-motion'
import { useState, useRef } from 'react'

const buttonVariants: Variants = {
  rest: {
    '--button-star-greyscale': '100%',
    '--button-star-contrast': '0%',
    transition: { duration: 0.7 },
  },
  hover: {
    '--button-star-greyscale': '0%',
    '--button-star-contrast': '100%',
    scale: 1.1,
    // y: 10,
  },
  press: { scale: 1.2 },
}

const likedTransition: Transition = {
  duration: 0.25,
  // delay: 0.3,
}

const currentCountVariants: Variants = {
  unliked: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  liked: { opacity: 0, y: -40, transition: likedTransition },
}

const nextCountVariants: Variants = {
  unliked: { opacity: 0, y: 40, transition: { duration: 0.25 } },
  liked: { opacity: 1, y: 0, transition: likedTransition },
}

export default function AnimationsPage() {
  const [value, setValue] = useState(0)
  const handlers = useRef<NumberInputHandlers>(null)
  const [isHover, setIsHover] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  return (
    <Paper p="xs" shadow="xs" withBorder>
      <Group>
        <Text component="div">Like Me</Text>
        <motion.div
          initial={false}
          whileHover={{ translateY: -10 }}
          whileTap={{ translateX: 100 }}>
          <Text weight={700} size="xl">
            {value}
          </Text>
        </motion.div>
      </Group>
      <Space h="md" />
      <Group spacing={5}>
        <ActionIcon
          variant="default"
          size="lg"
          onClick={() => {
            handlers.current?.decrement()
            setIsAdded(!isAdded)
          }}>
          <MinusIcon />
        </ActionIcon>
        <motion.div
          className="number"
          style={{
            position: 'relative',
          }}
          initial={false}
          animate={[isAdded ? 'liked' : 'unliked', isHover ? 'hover' : 'rest']}
          whileTap="press"
          variants={buttonVariants}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}>
          <motion.div variants={currentCountVariants} className="text-current">
            <NumberInput
              hideControls
              value={value}
              onChange={val => setValue(val ?? 0)}
              handlersRef={handlers}
              max={10}
              min={0}
              step={2}
              styles={{
                input: {
                  width: 60,
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: 26,
                },
              }}
            />
          </motion.div>
          <motion.div variants={nextCountVariants} className="text-next">
            <NumberInput
              hideControls
              value={value}
              onChange={val => setValue(val ?? 0)}
              handlersRef={handlers}
              max={10}
              min={0}
              step={2}
              styles={{
                input: {
                  width: 60,
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: 26,
                },
              }}
            />
          </motion.div>
        </motion.div>
        <ActionIcon
          variant="default"
          size="lg"
          onClick={() => {
            handlers.current?.increment()
            setIsAdded(!isAdded)
          }}>
          <PlusIcon />
        </ActionIcon>
      </Group>
    </Paper>
  )
}
