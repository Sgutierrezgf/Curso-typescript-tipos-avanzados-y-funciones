
export function parseStr(input: string): string[]
export function parseStr(input: string[]): string
export function parseStr(input: number): boolean


// export function parseStr(input: string | string[]): string | string[] {

//   if (Array.isArray(input)) {
//     return input.join('')
//   } else {
//     return input.split('')
//   }
// }

export function parseStr(input: unknown): unknown {

  if (Array.isArray(input)) {
    return input.join('')
  } else if (typeof input === 'string') {
    return input.split('')
  } else if (typeof input === 'number') {
    return true
  }
}

const rtaArray = parseStr('Sebas')
rtaArray.reverse()
console.log('rtaArray', 'Sebas =>', rtaArray)

const rtaStr = parseStr(['S', 'e', 'b', 'a', 's',])
rtaStr.toLocaleLowerCase
console.log('rtaStr', "['s', 'e', 'b', 'a', 's',] =>", rtaStr)

const rtaNumber = parseStr(12)
console.log('rtaNumber', "12 =>", rtaNumber)
