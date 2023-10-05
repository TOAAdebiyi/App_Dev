const events = require('events')
const util = require('util')

// inherence module //

const teams = function(name){
    this.name = name

}

//EventEmitter will inherent any of teams in the constructor //

util.inherits(teams, events.EventEmitter)

const Barcelona = new teams('Barcelona')
const Milan = new teams('Milan')

//  save each constructor in an array//

const teamsArray = [Barcelona, Milan]

// . print each team using forEach loop //

teamsArray.forEach((t)=>{t.on('nation', function(n){
    console.log(t.name + 'is' + n + 'soccer club!')
})})

// emit the eventEmitter //

Milan.emit('nation', 'italian')
Barcelona.emit('nation', 'spain')

// example of events module //

const eventEmitter = new events.EventEmitter

eventEmitter.on('test', function(a){
    console.log(a)
})

eventEmitter.emit('test', 'EVENTS IN NODEJS')

