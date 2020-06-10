import d from './die'

// Quick roll
// (chooses a random option from a provided set)
const roll = options => options[ d( options.length ) ];

export default roll;