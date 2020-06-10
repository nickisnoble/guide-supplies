import roll from './roll.js'

const syllables  = [
  [ "",    "Uth",  "Cela", "E",   "A",   "Be",  "De",  "El",  "Fa",  "Jo",  "Ki",   "La",    "Ma",   "Na",   "O",    "Pa",  "Re",   "Si",  "Ta", "Va"   ],
  [ "bar", "ched", "dell", "far", "gran", "hal", "jen", "kel", "lim", "mor", "net", "penn", "quill", "rond", "sark", "shen", "tur", "vash", "yor", "zen"],
  [ "a",   "ac",   "ai",   "al",  "am",   "an",  "ar",  "ea",  "el",  "er",  "ess", "ett",  "ic",    "id",   "il",   "in",   "is",  "or",   "us",  "un" ]
];

function generateName(){
  
  let n = "";
    
  // For each row in syllables table
  for(let i = 0; i < syllables.length; i++ ){ 

    // Add the syllable from this row to the string based on a die roll
    n += roll(syllables[i]);
  }

  // Capitalize the first letter and return string
  return n[0].toUpperCase() + n.slice(1);
}

export default generateName;