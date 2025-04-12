const sockMerchant = (n, ar) => {
  let sockCount = {};
  let pairs = 0;

  for (let sock of ar) {
    if (sockCount[sock]) {
      sockCount[sock]++;
    } else {
      sockCount[sock] = 1;
    }
    if (sockCount[sock] % 2 === 0) {
      pairs++;
    }
  }
  return pairs;
};
