export function addFractions(a: number, b: number, c: number, d: number) {
  const numerator = a * d + c * b;
  const denominator = b * d;

  return simplify(numerator, denominator);
}

function simplify(numerator: number, denominator: number): string {
  const commonDivisor = gcd(numerator, denominator);
  return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
}

function gcd(numerator: number, denominator: number): number {
  return !denominator ? numerator : gcd(denominator, numerator % denominator);
}
