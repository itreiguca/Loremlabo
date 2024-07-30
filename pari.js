const bins = [
  { start: 10, end: 20 },
  { start: 5, end: 15 },
  { start: 20, end: 30 },
  { start: 15, end: 25 }
];

const sortedBins = Object.keys(bins).sort((a, b) => {
  return bins[a].start - bins[b].start;
});

console.log(sortedBins);
