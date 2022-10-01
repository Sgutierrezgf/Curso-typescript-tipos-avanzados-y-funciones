const withOutEnd = () => {
  while (true) {
    console.log('Nunca pares de aprender')
  }
}

const fail = (message: string) => {
  throw new Error(message)
}


const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string'
  } else if (Array.isArray(input)) {
    return 'Es un array'
  }
  return fail('No match')
}


console.log(example('Hola'))
console.log(example([1, 2, 3, 4, 5]))
console.log(example(12345))
console.log(example('Hola despues del fail'))
