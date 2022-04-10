import DOMPurify from 'dompurify'

/**
 * @see https://www.npmjs.com/package/dompurify
 * @see https://github.com/microsoft/vscode/blob/main/src/vs/base/browser/dom.ts#L1423
 * @see https://pragmaticwebsecurity.com/files/cheatsheets/reactxss.pdf
 * @see https://medium.com/@rezaduty/how-to-write-secure-code-in-react-937579011d3c
 */
export function safeInnerHtml(value: string) {
  if (typeof value !== 'string') {
    return ''
  }

  return DOMPurify.sanitize(value)
}

type AllowedTags = 'div' | 'p' | 'article' | 'section'

/**
 * @desc Allowed tag for wrapping text
 */
export function getValidTag(tag?: AllowedTags): AllowedTags {
  switch (tag) {
    case 'div':
    case 'p':
    case 'article':
    case 'section':
      return tag

    default:
      return 'div'
  }
}
