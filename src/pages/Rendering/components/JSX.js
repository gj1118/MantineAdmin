import { Space, Text } from '@mantine/core'
import { Bold, Tag, Heading } from './Tags'
import PropTypes from 'prop-types'

function RenderMe({ isOpen }) {
  return <span>Hello {JSON.stringify(isOpen, null, 2)}</span>
}

RenderMe.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

RenderMe.defaultProps = {
  isOpen: false,
}

export default function JSX() {
  return (
    <section>
      <Text component="h4">Way of rendering dynamic element in JSX</Text>

      <Space my="sm" />

      <Text component="p">With String</Text>
      <Bold>I'm bold with string</Bold>

      <Text component="p">With Template String</Text>
      <Tag level="3">Heading Level 3</Tag>

      <Text component="p">With React.createElement</Text>
      <Heading size="sm">Heading Level 4</Heading>
      <RenderMe isOpen={null} />
    </section>
  )
}
