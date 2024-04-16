import { compile } from 'nexe'

const inputAppName = './index.js'
const outputAppName = 'generator'

compile({
  input: inputAppName,
  output: outputAppName,
  build: true,
//   clean:true,
  verbose:true,
  ico: './icon.ico'
}).then((err) => {
  if (err) throw err
  console.log('success')
})