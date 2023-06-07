class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> stringMap = new HashMap<>();
        
        for (int i = 0; i < s.length(); i++) {
            char letter = s.charAt(i);
            if(stringMap.containsKey(letter)) {
                stringMap.put(letter, stringMap.get(letter) + 1);
            } else {
                stringMap.put(letter, 1);
            }
        }
        
        for (int i = 0; i < s.length(); i++) {
            char letter = s.charAt(i);
            if(stringMap.get(letter) == 1) { return i; }
        }
        
        return - 1;
    }
}