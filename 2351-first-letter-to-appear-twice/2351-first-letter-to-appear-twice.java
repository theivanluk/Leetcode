class Solution {
    public char repeatedCharacter(String s) {
        HashMap<Character, Integer> stringMap = new HashMap<Character, Integer>();
        
        for (int i = 0; i < s.length(); i++) {
            char letter = s.charAt(i);
            
            if(!stringMap.containsKey(letter)) {
                stringMap.put(letter, 1);
            } else {
                return letter;
            }
        }
        
        return 'a';
    }
}