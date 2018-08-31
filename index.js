const five = require('johnny-five')
const TesselIO = require('tessel-io')

let board = new five.Board({
  io: new TesselIO()
})

board.on('ready', function(){
  let LCD = new five.LCD({ 
    pins: ['A0', 'A1', 'A2', 'A3', 'A4', 'A7'],
    rows: 4,
    cols: 20
  })

  let LCDBacklight = new five.Led.RGB({
    pins: ['A5', 'A6', 'B5'],
    commonAnode: true
  })

  LCDBacklight.off()

  LCD.home().print('Hello, Twitch!')


  board.repl.inject({
    LCD,
    LCDBacklight
  })
})
