const tags = ['G', 'A', 'T', 'C'];

for (let x = 0; x < tags.length; x += 1) {
  for (let y = 1; y < tags.length - 1; y += 1) {
    console.log(`${tags[y]}${tags[x]}`);
  }
}