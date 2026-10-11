const fs = require('fs');
console.log(" [ ABHEE-MD V6 Loading... ] ");
let code = fs.readFileSync('./start_original.js', 'utf8');
// Patch ASITHA -> ABHEE
code = code.replace(/ASITHA-MD/g, 'ABHEE-MD ');
code = code.replace(/ASITHA MD/g, 'ABHEE MD ');
code = code.replace(/ASITHA/g, 'ABHEE ');
code = code.replace(/Asitha/g, 'Abhee');
code = code.replace(/asitha/g, 'abhee');
eval(code);
