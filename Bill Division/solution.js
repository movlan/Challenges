function bonAppetit(bill, k, b) {
  const correctBill = (bill.reduce((a,b) => a + b) - bill[k]) / 2 
  if (correctBill === b) {
    return 'Bon Appetit'
  }
  return b - correctBill
}

console.log(bonAppetit([3,10,2,9], 1, 12))