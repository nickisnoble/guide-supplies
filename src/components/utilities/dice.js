// Die / Dice Function
// (Random number from a specified range, e.g. d(20) )

function d( sides ){
  return Math.floor( Math.random() * sides );
}

// Quick roll
// (chooses a random option from a provided set)
const roll = options => options[ d( options.length ) ];

export {
  d,
  roll
};