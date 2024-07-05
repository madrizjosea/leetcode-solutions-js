const twoSum = require("../Problems/01-TwoSum/twoSum");

test("should find the two numbers that add up to the target", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expectedOutput = [0, 1];
  expect(twoSum(nums, target)).toEqual(expectedOutput);
});

test("should handle empty array input", () => {
  const nums = [];
  const target = 8;
  const expectedOutput = [];
  expect(twoSum(nums, target)).toEqual(expectedOutput);
});

test("should handle no matching pair found", () => {
  const nums = [1, 2, 3, 4];
  const target = 10;
  const expectedOutput = [];
  expect(twoSum(nums, target)).toEqual(expectedOutput);
});
