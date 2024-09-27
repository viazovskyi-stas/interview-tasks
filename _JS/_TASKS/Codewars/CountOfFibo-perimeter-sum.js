function perimeter(n) {
  let fibo = [0, 1]
  let sum = fibo.at(0) + fibo.at(1)
  for (let i = 2; i <= n + 1; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
    sum += fibo[i]
  }
  return sum * 4
}

console.log(perimeter(5))
