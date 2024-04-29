function convertToSGD(price: number) {
  return new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    minimumFractionDigits: 0,
  }).format(Math.round(price));
}

export default convertToSGD;
