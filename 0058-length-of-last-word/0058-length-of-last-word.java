class Solution {
    public int lengthOfLastWord(String s) {
        String[] s_split = s.split("\s");
        return s_split[s_split.length - 1].length();
    }
}