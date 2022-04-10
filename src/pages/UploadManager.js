import { Button, Paper, List, ThemeIcon, Space } from '@mantine/core'
import { useState, useCallback } from 'react'
import { IssueClosedIcon, IssueDraftIcon } from '@primer/octicons-react'
import Sheet from '../components/Sheet'
import { motion } from 'framer-motion'

const AnimatedDraftIcon = motion(IssueDraftIcon)

export default function UploadManagerPage() {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = useCallback(() => {
    setIsOpen(open => !open)
  }, [])

  return (
    <Paper padding="xs" shadow="xs" withBorder>
      <Button variant="default" onClick={handleToggle}>
        Toggle Sheet
      </Button>
      <Space />
      <Button variant="light" size="xs">
        Start Initialization
      </Button>
      <Space />
      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IssueClosedIcon size={12} />
          </ThemeIcon>
        }>
        <List.Item>Clone or download repository from GitHub</List.Item>
        <List.Item>Install dependencies with yarn</List.Item>
        <List.Item>To start development server run npm start command</List.Item>
        <List.Item>
          Run tests to make sure your changes do not break the build
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <AnimatedDraftIcon size={12} />
            </ThemeIcon>
          }>
          Submit a pull request once you are done
        </List.Item>
      </List>
      <Sheet isOpen={isOpen} toggle={handleToggle} />
    </Paper>
  )
}
