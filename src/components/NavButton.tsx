import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '@mantine/core'
import { upperFirst } from '@mantine/hooks'
import { ArrowLeftIcon, ArrowRightIcon } from '@modulz/radix-icons'
import useStyles from './NavButton.styles'

interface NavButtonProps {
  data: {
    slug: string
    title: string
    package: string
    group: string
  }
  type: 'next' | 'prev'
  className?: string
}

/**
 * @see https://github.com/mantinedev/mantine/blob/master/docs/src/components/MdxPage/MdxSiblings/MdxSibling/MdxSibling.tsx
 */
export default function NavButton({ data, type, className }: NavButtonProps) {
  const { classes, cx } = useStyles()
  const iconStyle = { width: 22, height: 22 }

  return (
    <Link
      to={data.slug}
      className={cx(classes.control, classes[type], className)}>
      {type === 'prev' && <ArrowLeftIcon style={iconStyle} />}

      <div className={classes.body}>
        <Text size="lg" align={type === 'next' ? 'left' : 'right'}>
          {type === 'next' ? 'Up next' : 'Go back'}
        </Text>
        <Text
          color="dimmed"
          size="sm"
          align={type === 'next' ? 'left' : 'right'}>
          {data.title} – {data.package || upperFirst(data.group)}
        </Text>
      </div>

      {type === 'next' && <ArrowRightIcon style={iconStyle} />}
    </Link>
  )
}
