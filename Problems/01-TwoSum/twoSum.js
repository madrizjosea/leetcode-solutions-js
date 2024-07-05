function twoSum(nums, target) {
  // Implement your twoSum logic here
  // This example uses a hash map for faster lookups
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return []; // No matching pair found
}

module.exports = twoSum;
