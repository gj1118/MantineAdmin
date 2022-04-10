import * as XLSX from 'xlsx'

/**
 * Could be renamed to `getJSON` or `getJSONFromExcel`
 * @param file
 * @see https://www.youtube.com/watch?v=h33eakwu7oo REACT - Read Excel using Sheet JS
 * @package https://github.com/SheetJS/sheetjs
 * @see https://github.com/SheetJS/sheetjs/tree/master/demos/react
 */
export function readExcel(file: File): Promise<unknown[]> {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()

    reader.readAsArrayBuffer(file)

    reader.onerror = reject

    reader.onload = e => {
      let bufferArray = e.target?.result
      // WorkBook
      let wb = XLSX.read(bufferArray, { type: 'buffer' })
      // WorkSheet Name, first line for label
      let wsName = wb.SheetNames[0]
      let ws = wb.Sheets[wsName]

      let data = XLSX.utils.sheet_to_json(ws)

      resolve(data)
    }
  })
}

/**
 * @see https://qawithexperts.com/article/javascript/read-excel-file-using-javascript-xlsx-or-xls/239  Read XLSX using Javascript
 * @param file
 */
export function validate(file: File) {
  // Validate whether File is valid Excel file.
  const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/
  if (!regex.test(file.name.toLowerCase())) {
    throw new Error('Please upload a valid Excel file.')
  }

  // Check if browser support FileReader (Mostly unnecessary)
  if (typeof FileReader === 'undefined') {
    throw new Error('This browser does not support HTML5.')
  }

  return file
}
