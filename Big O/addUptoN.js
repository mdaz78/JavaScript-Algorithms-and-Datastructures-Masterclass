// Add up to N

// Not so efficient solution
function addUpto(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

const t1 = performance.now();
const inefficientResult = addUpto(100000000);
const t2 = performance.now();
console.log(`Time taken: ${t2 - t1} milliseconds`);
console.log(inefficientResult);

// More efficient solution
function addUptoNEfficient(n) {
  return (n * (n + 1)) / 2;
}

const t3 = performance.now();
const result = addUptoNEfficient(100000000);
const t4 = performance.now();
console.log(`Time taken: ${t4 - t3} milliseconds`);
console.log(result);
