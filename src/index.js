module.exports = function reverse (n) {
    let a = 0;
    let b = 0;
    if (n < 0) n *= -1;
    while (n > 0) {
      a = n % 10;
      b = b *10 + a;
      n = Math.floor(n / 10);
    }
  return b;
}
