class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> stringMap = new HashMap<>();
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            char letter = s.charAt(i);
            stringMap.put(letter, stringMap.getOrDefault(letter, 0) + 1);
        }
        
        for (int i = 0; i < n; i++) {
            char letter = s.charAt(i);
            if(stringMap.get(letter) == 1) { return i; }
        }
        
        return - 1;
    }
}