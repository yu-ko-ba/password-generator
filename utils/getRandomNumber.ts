export const getRandomNumber = (max: number): number => {
  if (max === 0) {
    return 0;
  }

  const surplus = 0xFFFFFFFF % (max + 1);
  const arr = new Uint32Array(1);
  self.crypto.getRandomValues(arr);
  if (surplus === max) {
    return arr[0] % (max + 1);
  }

  // 前半の数値が出やすくなるのを回避する
  while (arr[0] < surplus) {
    self.crypto.getRandomValues(arr);
  }

  return arr[0] % (max + 1);
};
