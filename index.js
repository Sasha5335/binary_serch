const sortNumber = [1, 2, 3, 4, 5, 6, 7, 8];

const binarySerch = (arr, value) => {
  let start = 0;
  let end = 100;
  let middle = Math.round((start + end) / 2);

  while (true) {
    if (confirm(`${middle} ?`)) {
      return middle;
    }
    if (confirm(`${middle} < num ?`)) {
      end = middle;
      middle = Math.ceil((end + start) / 2);
    } else {
      start = middle;
      middle = Math.floor((end + start) / 2);
    }
  }
};
