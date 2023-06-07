class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> numsList = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int number = nums[i];
            int difference = target - number;
            
            if (numsList.containsKey(difference)) {
                return new int[] {i, numsList.get(difference)};
            }
            numsList.put(number, i);
        }
        return null;
    }
}