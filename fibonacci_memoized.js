function fibonacci(n, memorized = [undefined, 1, 1]) {
  if (memorized[n] !== undefined) return memorized[n];
  const result = fibonacci(n - 1, memorized) + fibonacci(n - 2, memorized);
  memorized[n] = result;
  return result;
}
