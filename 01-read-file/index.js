const path = require('path');

const fs = require('fs');

const steam = new fs.ReadStream(path.resolve('text.txt'));

steam.on('readable',()=>{
  let data = steam.setEncoding('utf-8').read();
  console.log(data);
});