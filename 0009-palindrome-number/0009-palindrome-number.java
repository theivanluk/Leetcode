class Solution {
    public boolean isPalindrome(int x) {
        String numToString = x + "";
        int n = numToString.length();
        
        for (int i = 0; i < (int) n/2; i++) {
            char left = numToString.charAt(i);
            char right = numToString.charAt(n - 1 - i);
            if (left != right) return false;
        }
        
        return true;
    }
}