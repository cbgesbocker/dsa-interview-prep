# Arrays & Strings - Practice Problems

## Easy

### 1. Two Sum
Given an array of integers, find two numbers that add up to a target.
- Input: [2, 7, 11, 15], target = 9
- Output: [0, 1] (indices of 2 and 7)

**Hint:** Use a hash map to store seen numbers

---

### 2. Valid Palindrome
Check if a string is a palindrome (ignore spaces and punctuation)
- Input: "A man, a plan, a canal: Panama"
- Output: true

**Hint:** Use two pointers from start and end

---

### 3. Reverse String
Reverse a string in place
- Input: "hello"
- Output: "olleh"

**Hint:** Two pointers from both ends

---

## Medium

### 1. 3Sum
Find all unique triplets in array that sum to target
- Input: [-1, 0, 1, 2, -1, -4]
- Output: [[-1, -1, 2], [-1, 0, 1]]

**Hint:** Sort first, then use two pointers

---

### 2. Longest Substring Without Repeating Characters
Find the longest substring without repeating characters
- Input: "abcabcbb"
- Output: 3 ("abc")

**Hint:** Use sliding window with hash map

---

### 3. Container With Most Water
Find two lines that form a container with maximum area
- Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
- Output: 49 (between indices 1 and 8)

**Hint:** Two pointers, start at edges and move inward

---

## Hard

### 1. Trapping Rain Water
Calculate how much water can be trapped after raining
- Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
- Output: 6

**Hint:** For each position, water = min(maxLeft, maxRight) - height

---

### 2. Longest Palindromic Substring
Find the longest substring that is a palindrome
- Input: "babad"
- Output: "bab" or "aba"

**Hint:** Expand around center approach

---

### 3. Median of Two Sorted Arrays
Find median of two sorted arrays
- Input: [1, 3], [2]
- Output: 2.0

**Hint:** Binary search on shorter array

---

## Solutions

*Try solving these before looking at solutions!*

[Solutions will be in separate files]
