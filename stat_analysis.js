import { ACTIVITIES } from './app.mjs';

const statCounts = {};
const categoryStats = {};
let twoStatCount = 0;
let oneStatCount = 0;
let zeroStatCount = 0;

ACTIVITIES.forEach(act => {
  const stats = act.statsTrained || [];
  if (stats.length === 2) twoStatCount++;
  else if (stats.length === 1) oneStatCount++;
  else zeroStatCount++;

  stats.forEach(st => {
    statCounts[st.key] = (statCounts[st.key] || 0) + 1;
  });

  if (!categoryStats[act.category]) {
    categoryStats[act.category] = new Set();
  }
  stats.forEach(st => {
    categoryStats[act.category].add(st.key);
  });
});

console.log('--- Current Stats ---');
console.log(`Total Activities: ${ACTIVITIES.length}`);
console.log(`Activities training 2 stats: ${twoStatCount}`);
console.log(`Activities training 1 stats: ${oneStatCount}`);
console.log(`Activities training 0 stats: ${zeroStatCount}`);
console.log('Trained attribute frequencies:', statCounts);
console.log('Categories and their trained attributes:');
for (const cat in categoryStats) {
  console.log(`  ${cat}:`, Array.from(categoryStats[cat]));
}
