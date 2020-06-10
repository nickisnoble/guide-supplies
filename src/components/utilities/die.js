// Die / Dice Function
// (Random number from a specified range, e.g. d(20) )

export default function d( sides ){
  return Math.floor( Math.random() * sides );
}
