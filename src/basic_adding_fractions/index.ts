export function basicAddFractions(
  a: number,
  b: number,
  c?: number,
  d?: number
) {
  if (!c || !d) {
    return simplify(a, b);
  }

  if (a && b && c && d) {
    const numerator = a * d + c * b;
    const denominator = b * d;

    return simplify(numerator, denominator);
  }
}

function simplify(numerator: number, denominator: number): string {
  if (numerator === 0 || denominator === 0) return "0";
  const commonDivisor = gcd(numerator, denominator);
  return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
}

function gcd(numerator: number, denominator: number): number {
  return !denominator ? numerator : gcd(denominator, numerator % denominator);
}
