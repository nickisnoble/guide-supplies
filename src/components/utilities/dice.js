// Die / Dice Function
// (Random number from a specified range, e.g. d(20) )
// Add 1 to act like real dice

function d( sides ){
  return Math.floor( Math.random() * sides ) + 1;
}

// Quick roll
// (chooses a random option from a provided set)
// Subtract 1 to work with arrays
const roll = options => options[ d( options.length ) - 1 ];

export {
  d,
  roll
};