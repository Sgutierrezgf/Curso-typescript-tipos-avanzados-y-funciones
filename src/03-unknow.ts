let anyVar: any
anyVar = true
anyVar = undefined
anyVar = null
anyVar = 1
anyVar = {}
anyVar = []
anyVar = 'sebas'

let isNew: boolean = anyVar

anyVar.doSomething()
anyVar.toUpperCase()


let unknownVar: unknown
unknownVar = true
unknownVar = undefined
unknownVar = null
unknownVar = 1
unknownVar = {}
unknownVar = []
unknownVar = 'sebas'

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase()
}

if (typeof unknownVar === 'boolean') {
  let isNew2: boolean = unknownVar
}

const parse = (str: string): unknown => {
  return JSON.parse(str)
}






