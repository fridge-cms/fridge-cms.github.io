import getCode from './base'

const init = `const Fridge = require('fridge')
const fridge = new Fridge({
  client_id: 'sk_xxxxxxxxxxx',
  client_secret: 'xxxxxxxxxxxx'
})
`
const genCode = (path, data = null, method = 'get', assign = null) => {
  const args = [`'${path}'`]
  if (data) args.push(JSON.stringify(data, null, 2))

  return `${init}
${assign ? `const ${assign} = ` : ''}fridge.${method}(${args.join(', ')})`
}

const nodeJs = getCode(genCode, init)

export default (name) => nodeJs.find(item => item.name === name)
