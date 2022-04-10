import React from 'react'
import * as utils from './utils'

type Props = {
  tag?: 'div' | 'p' | 'article'
  text: string
}

function DOMPurify({ tag, text }: Props) {
  return React.createElement(utils.getValidTag(tag), {
    dangerouslySetInnerHTML: {
      __html: utils.safeInnerHtml(text),
    },
  })
}

export default DOMPurify
