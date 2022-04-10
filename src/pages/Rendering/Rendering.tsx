import React from 'react'
import {
  Button,
  Paper,
  Text,
  TextInput,
  List,
  ThemeIcon,
  Divider,
  Space,
  Tabs,
  ScrollArea,
  Group,
} from '@mantine/core'
import { EnvelopeClosedIcon } from '@modulz/radix-icons'
import { useState } from 'react'
import { IssueClosedIcon } from '@primer/octicons-react'
import JSX from './components/JSX'
import Excel from './components/Excel'
import PDF from './components/PDF'
import { FileIcon, defaultStyles } from 'react-file-icon'

function TitleDefault() {
  return <h4>I'm hero component</h4>
}

type TitleFrameProps = { color?: React.CSSProperties['color'] }
function TitleWithFrame(props: TitleFrameProps) {
  const { color } = props
  return (
    <>
      <h4 style={{ color }}>I'm colorized hero</h4>
      {/* cloneElement, it's like injecting props implicitly */}
      {JSON.stringify(props, null, 2)}
    </>
  )
}

/**
 * @desc Accepting and cloning a react element as a prop - kentcdodds
 * @see https://www.youtube.com/watch?v=e5NDgvpJ_vU
 * @desc But, as the react docs said. `cloneElement` should be used in more complex use case
 */
function Hero({ titleEl = <TitleDefault /> }) {
  return (
    <div>
      {React.cloneElement(titleEl, {
        underline: true,
      })}
      <p>I'm just a description</p>
    </div>
  )
}

export default function RenderingPage() {
  const [isVisible, setVisible] = useState(false)

  return (
    <Paper p="xs" shadow="xs" withBorder>
      <Text>Clone Element</Text>
      <Hero />
      <Hero titleEl={<TitleWithFrame color="salmon" />} />
      <Space my="sm" />
      <Tabs grow>
        <Tabs.Tab
          label="JSX"
          icon={
            <span style={{ width: 20 }}>
              <FileIcon extension="jsx" {...defaultStyles['jsx']} />
            </span>
          }>
          <ScrollArea style={{ height: 400 }}>
            <Text size="sm" weight="bolder" mb="xs">
              React (V-DOM) will try to reuse existing element.
            </Text>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="teal" size={20} radius="xl">
                  <IssueClosedIcon size={12} />
                </ThemeIcon>
              }>
              <List.Item>
                Add key to tell V-DOM to build element from sratch.
              </List.Item>
              <List.Item>
                It will only happen when the element looks exactly the same.
              </List.Item>
              <List.Item>
                Even if the only differences is by using Fragment or not.
              </List.Item>
            </List>

            <Divider mt="xs" label="Element" labelPosition="center" />

            <Group position="center">
              {isVisible ? (
                <>
                  {/* Try to remove the fragment. */}
                  <TextInput
                    // key="user_id"
                    icon={<EnvelopeClosedIcon />}
                    label="User ID"
                    name="user_id"
                    placeholder="Type something then click Toggle..."
                    mb="xs"
                    size="xs"
                  />
                </>
              ) : (
                <>
                  <TextInput
                    // key="name"
                    icon={<EnvelopeClosedIcon />}
                    label="Name"
                    name="name"
                    placeholder="Type something then click Toggle..."
                    mb="xs"
                    size="xs"
                  />
                </>
              )}
              <Button
                onClick={() => setVisible(open => !open)}
                variant="light"
                color="green"
                radius="md"
                size="xs">
                Toggle
              </Button>
            </Group>

            <Space my="sm" />

            <JSX />
          </ScrollArea>
        </Tabs.Tab>

        <Tabs.Tab
          label="PDF"
          icon={
            <span style={{ width: 20 }}>
              <FileIcon extension="pdf" {...defaultStyles['pdf']} />
            </span>
          }>
          <PDF />
        </Tabs.Tab>

        <Tabs.Tab
          label="Excel"
          icon={
            <span style={{ width: 20 }}>
              <FileIcon extension="xlsx" {...defaultStyles['xlsx']} />
            </span>
          }>
          <Excel />
        </Tabs.Tab>
      </Tabs>
    </Paper>
  )
}
