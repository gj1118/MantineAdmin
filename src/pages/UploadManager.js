import { Button, Paper, List, ThemeIcon, Space } from '@mantine/core'
import { useState, useCallback } from 'react'
import { IssueClosedIcon, IssueDraftIcon } from '@primer/octicons-react'
import Sheet from '../components/Sheet'
import { motion } from 'framer-motion'
import PaperWrapper from '../wrappers/Paper'

const AnimatedDraftIcon = motion(IssueDraftIcon)

export default function UploadManagerPage() {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = useCallback(() => {
    setIsOpen(open => !open)
  }, [])

  return (
    <PaperWrapper>
      <Button variant="default" onClick={handleToggle}>
        Toggle Sheet
      </Button>
      <Space />
      <Sheet isOpen={isOpen} toggle={handleToggle} />
    </PaperWrapper>
  )
}
