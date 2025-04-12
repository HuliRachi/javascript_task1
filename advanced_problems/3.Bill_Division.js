const bonAppetit = (bill, k, b) => {
  let totalCost = bill.reduce((a, b) => a + b, 0);
  let annaShare = (totalCost - bill[k]) / 2;

  if (annaShare === b) {
    return 'Bon Appetit';
  } else {
    return b - annaShare;
  }
};
