export const FB_URL_REGEX = /(?:https?:\/\/)?(?:www\.|m\.|mobile\.|touch\.|mbasic\.)?(?:facebook\.com|fb(?:\.me|\.com))\/(?!$)(?:(?:\w)*#!\/)?(?:pages\/|pg\/)?(?:photo\.php\?fbid=)?(?:[\w\-]*\/)*?(?:\/)?(?:profile\.php\?id=)?([^\/?&\s]*)(?:\/|&|\?)?.*/
/**
 * @desc Check for valid fb url
 * @see https://gist.github.com/marcgg/733592?permalink_comment_id=3701800#gistcomment-3701800 Github
 * @param url
 */
export function isValidFbUrl(url: unknown) {
  if (typeof url !== 'string') {
    return false
  }

  return FB_URL_REGEX.test(url)
}
