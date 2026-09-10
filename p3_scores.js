// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
const s1=scores.filter((n)=>n%2===1);
const s2=s1.map((n)=>n*2);
const s3=[...s2].sort((a,b)=>b-a);
const s4=s3.slice(0,Math.ceil(s3.length/2));
console.log(s4.join(" "));
// (b)
const score=scores
    .filter((n)=>n%2===1)
    .map((n)=>n*2)
    .sort((a,b)=>b-a);
const result = score.slice(0,Math.ceil(score.length/2));
console.log(result.join(" "));
// (c)
console.log(score.join(" "));
