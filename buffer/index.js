const buffer = Buffer.from('string');
console.log(buffer, 'buffer1');

const fs = require('fs');
const protobuf = require('protocol-buffers');
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'));

console.log(schema, 'schema');

const encode = schema.Column.encode({
  id: 1,
  name: 'Node.js'
})

console.log(encode, 'encode');

// 这里直接将已经编码的 encode 值，拿来进行解码。
const decodeMessage = schema.Column.decode(encode)

console.log(decodeMessage, 'decode');

