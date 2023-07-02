// import { getRandomNumber } from "./getRandomNumber"

// ブラウザじゃないとself.cryptoが存在しないから失敗する(´・ω・`)
// test("乱数の上限が正しく反映されているかのテスト", () => {
//   for (let i = 0; i < 100; i++) {
//     const result = getRandomNumber(1)
//     expect(result).toBeLessThanOrEqual(1)
//     expect(result).toBeGeaterThanOrEqual(0)
//   }
// })

test("0の余剰", () => {
  console.log(1 % 0)
})
