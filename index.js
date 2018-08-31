const five = require('johnny-five')
const TesselIO = require('tessel-io')

let board = new five.Board({
  io: new TesselIO()
})

board.on('ready', function(){
  console.log('ready')
})
