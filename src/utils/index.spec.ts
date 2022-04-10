import { isValidFbUrl } from '.'

const successTests = [
  {
    title: 'Should pass for url withour protocol',
    tests: ['facebook.com/100009289898982'],
  },
  {
    title: 'Should pass for "http", "https" and "www" prefixes',
    tests: [
      'http://facebook.com/100009289898982',
      'https://facebook.com/100009289898982',
      'https://www.facebook.com/100009289898982',
    ],
  },
  {
    title: 'Should pass for "m" and "mobile" prefixes',
    tests: [
      'https://m.facebook.com/100009289898982',
      'https://mobile.facebook.com/BMW/',
    ],
  },
  {
    title: 'Should pass for "mbasic" prefix & the url got very long',
    tests: [
      'https://mbasic.facebook.com/BMW/?refid=46&__xts__%5B0%5D=12.%7B%22unit_id_click_type%22%3A%22graph_search_results_item_tapped%22%2C%22click_type%22%3A%22result%22%2C%22module_id%22%3A2%2C%22result_id%22%3A22893372268%2C%22session_id%22%3A%22e4709b011e94ec8207a44ffedd1d2901%22%2C%22module_role%22%3A%22ENTITY_PAGES%22%2C%22unit_id%22%3A%22browse_rl%3Ab2718be4-bbd0-4764-9c31-6908c431daa2%22%2C%22browse_result_type%22%3A%22browse_type_page%22%2C%22unit_id_result_id%22%3A22893372268%2C%22module_result_position%22%3A0%7D',
    ],
  },
  {
    title: 'Should pass for user id with "." character',
    tests: ['https://www.facebook.com/rasmus.vejbynielsen'],
  },
  {
    title: 'Should pass for "/profile.php?id="',
    tests: ['https://www.facebook.com/profile.php?id=100009289898982'],
  },
  {
    title: 'Should pass for "/pg/"',
    tests: ['https://m.facebook.com/pg/DwayneTheRockJohnsonFanClub/photos/'],
  },
  {
    title: 'Should pass when there is a unicode character in the url',
    // @see https://gist.github.com/marcgg/733592?permalink_comment_id=2707829#gistcomment-2707829
    tests: [
      'https://www.facebook.com/საწარმო-SabaDesign-927047470710565/?ref=safrghbeდფწერგ',
    ],
  },
]

const failTests = [
  {
    title: 'Should fail for invalid input url',
    tests: [undefined, null, '', 1],
  },
  {
    title: 'Should fail when there is a blank slash in the url',
    tests: [
      'https://m.facebook.com/',
      'https://facebook.com',
      'https://www.facebook.com/',
    ],
  },
]

describe('Success test', () => {
  successTests.forEach(value => {
    test(value.title, () => {
      value.tests.forEach(input => {
        expect(isValidFbUrl(input)).toEqual(true)
      })
    })
  })
})

describe('Fail test', () => {
  failTests.forEach(value => {
    test(value.title, () => {
      value.tests.forEach(input => {
        expect(isValidFbUrl(input)).toEqual(false)
      })
    })
  })
})
