import React from 'react'

/**
 * @desc We can do something like `<B></B>`
 * @desc But, we can't see attributes of `B` element
 */
const B = 'b'

/**
 * Create bold element tag
 * @desc Element from `string`
 */
function Bold({ children, ...props }) {
  return <B {...props}>{children}</B>
}

/**
 * @desc Element from `template string`
 * @see https://stackoverflow.com/a/59685929/7975543
 */
function Tag({ level, children, ...props }) {
  const HeadingTag = `h${level}`
  return <HeadingTag {...props}>{children}</HeadingTag>
}

const elements = {
  xl: 'h1',
  lg: 'h2',
  rg: 'h3',
  sm: 'h4',
  xs: 'h5',
  xxs: 'h6',
}

/**
 * @desc Element from `React.createElement`
 * @see https://stackoverflow.com/a/56411377/7975543
 */
function Heading({ size, children, ...props }) {
  return React.createElement(elements[size] || elements.rg, props, children)
}

Heading.defaultProps = {
  size: 'rg',
}

export { Bold, Tag, Heading }
