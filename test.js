const fs = require('fs');
const html = fs.readFileSync('gh.html', 'utf8');

const matches = [...html.matchAll(/href="\/RodolfoAlves32\/([^"]+)"/g)];
const unique = [...new Set(matches.map(m => m[1]))].filter(n => !n.includes('?') && !n.includes('/'));

console.log('Repos:', unique);
