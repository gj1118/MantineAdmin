import React from 'react'

type BoldProps = React.HTMLAttributes<HTMLElement>

/**
 * @desc We can do something like `<B></B>`
 * @desc But, we can't see attributes of `B` element
 */
const B = 'b'

/**
 * Create bold element tag
 * @desc Element from `string`
 */
function Bold({ children, ...props }: BoldProps) {
  return <B {...props}>{children}</B>
}

type TagProps = {
  level: '1' | '2' | '3'
} & React.HTMLAttributes<HTMLHeadingElement>

/**
 * @desc Element from `template string`
 * @see https://stackoverflow.com/a/59685929/7975543
 */
function Tag({ level, children, ...props }: TagProps) {
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

type HeadingProps = {
  size: keyof typeof elements
  children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

/**
 * @desc Element from `React.createElement`
 * @see https://stackoverflow.com/a/56411377/7975543
 */
function Heading({ size, children, ...props }: HeadingProps) {
  return React.createElement(elements[size] || elements.rg, props, children)
}

Heading.defaultProps = {
  size: 'rg',
}

export { Bold, Tag, Heading }
