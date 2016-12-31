const Bacon = require('baconjs')

// Bus is tyhe most basic type of stream in BaconJS
const stream = new Bacon.Bus()

stream
  .onValue(word => console.log(word))

// Streams are functors
stream.push('cat')
stream.push('meal')
stream.push('trumpet')
