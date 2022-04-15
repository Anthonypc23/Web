let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

console.log('\n')

isAtivo = 1 
console.log(!!isAtivo) // ! = true, !! = false

console.log('\n')

console.log(!true+ " eu")
console.log(!!true)

console.log('\n')

console.log(!false)
console.log(!!false)

console.log('\n')

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\n')

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finallizar')
console.log(!!('' || null || 0 || 'epa' || 123))

let nome = 'Lucas'

console.log(nome || 'Desconhecido')