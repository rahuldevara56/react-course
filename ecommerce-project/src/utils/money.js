
export function currencyFormat (amountCents) {
  return `$${(amountCents / 100).toFixed(2)}`
}