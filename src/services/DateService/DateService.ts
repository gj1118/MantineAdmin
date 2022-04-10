/**
 * @see https://bobbyhadz.com/blog/javascript-check-if-date-is-valid
 * @param date
 */
function isValidDate(date: unknown) {
  return date instanceof Date && !Number.isNaN(date)
}

const DateService = {
  isValidDate,
}

export default DateService
