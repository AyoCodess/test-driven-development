export function basicAddFractions(
  a: number,
  b: number,
  c?: number,
  d?: number
) {
  if (!c && !d) {
    return simplify(a, b);
  }

  if (a && b && c && d) {
    const numerator = a * d + c * b;
    const denominator = b * d;

    return simplify(numerator, denominator);
  }
}

function simplify(numerator: number, denominator: number): string {
  console.log(numerator, denominator);
  if (numerator === 0 && denominator === 0) return "0";
  if (denominator === 0) return `${numerator}`;

  const commonDivisor = gcd(numerator, denominator);
  return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
}

function gcd(numerator: number, denominator: number): number {
  return !denominator ? numerator : gcd(denominator, numerator % denominator);
}
