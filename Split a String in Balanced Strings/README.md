# Split a String in Balanced Strings

[link](https://leetcode.com/problems/split-a-string-in-balanced-strings)

## Instructions

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

## Example

Input: `s = "RLRRLLRLRL"`\
Output: `4`\
Explanation: `s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'`.

Input: `s = "RLLLLRRRLR"`\
Output: `3`\
Explanation: `s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'`.

Input: `s = "LLLLRRRR"\`
Output: `1`
Explanation: `s can be split into "LLLLRRRR"`.

Input: `s = "RLRRRLLRLL"`\
Output: `\`
Explanation: `s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'.`
