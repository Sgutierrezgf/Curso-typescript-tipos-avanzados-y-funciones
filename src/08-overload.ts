function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('')
  } else {
    return input.split('')
  }
}

const rtaArray = parseStr('Sebas')
console.log('rtaArray', 'Sebas =>', rtaArray)

const rtaStr = parseStr(['S', 'e', 'b', 'a', 's',])
console.log('rtaStr', "['S', 'e', 'b', 'a', 's',] =>", rtaStr)
