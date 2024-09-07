for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
      continue;  // Skips the rest of the loop body for even numbers
  }
  console.log(i);  // Output: 1, 3, 5, 7, 9
}
