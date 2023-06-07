class Solution {
    public int lengthOfLastWord(String s) {
        return s.split("\s")[s.split("\s").length - 1].length();
    }
}