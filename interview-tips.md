# Technical Interview Tips & Strategies

## Before the Interview

### Preparation (2-4 weeks)
1. **Review fundamentals** - Spend time understanding data structures deeply
2. **Practice daily** - 1-2 problems per day minimum
3. **Review weak areas** - Identify topics you struggle with and drill them
4. **Study patterns** - Learn common problem-solving patterns
5. **Mock interviews** - Practice with friends or on Pramp.com

### The Day Before
1. Get good sleep - You need to be sharp
2. Review your cheatsheet - Not to memorize, but to feel confident
3. Prepare your environment - Test mic, camera, internet
4. Have water nearby - Stay hydrated

## During the Interview

### First 5 Minutes: Listen & Clarify

**READ THE PROBLEM CAREFULLY**
- Restate the problem in your own words
- Ask clarifying questions:
  - What's the range of inputs?
  - Are there edge cases to consider?
  - What if the input is empty?
  - Can I modify the input?
  - What's the space constraint?

**Example Questions to Ask:**
- "Can there be duplicate elements?"
- "Is the array sorted?"
- "Should I return a new array or modify in place?"
- "What's the maximum size of the input?"

### Next 5-10 Minutes: Plan Your Approach

**Think Out Loud**
- Don't start coding immediately
- Discuss your approach with the interviewer
- Walk through an example manually
- Get feedback before coding

**Consider Multiple Approaches:**
1. Brute force - What's the obvious solution?
2. Optimized - Can we do better? Use patterns?
3. Trade-offs - Time vs. space?

**Example:**
- Brute force: O(n²) nested loop
- Better: O(n) with hash set
- Discuss which is better given constraints

### Next 15-20 Minutes: Code

**While Coding:**
1. Write clean, readable code
2. Use meaningful variable names
3. Add comments for complex logic
4. Ask if you need to handle a specific case
5. Test as you go

**Code Structure:**
```javascript
// 1. Handle edge cases
if (!arr || arr.length === 0) return null;

// 2. Initialize variables
let result = 0;

// 3. Main logic
for (let i = 0; i < arr.length; i++) {
  // ...
}

// 4. Return result
return result;
```

### Last 5-10 Minutes: Review & Test

**Walkthrough:**
- Trace through your code with the example
- Check edge cases:
  - Empty input
  - Single element
  - All same elements
  - Boundary cases
- Fix any bugs you find

**Discuss Complexity:**
- Time complexity - operations proportional to input size
- Space complexity - extra memory used
- Can you optimize further?

## Common Mistakes to Avoid

### ❌ Code-Related
- Off-by-one errors in loops
- Not handling null/undefined
- Integer overflow (not typical in JS)
- Modifying array while iterating
- Infinite loops

### ❌ Communication-Related
- Not thinking out loud
- Starting to code before understanding
- Ignoring edge cases
- Not asking for help when stuck
- Getting defensive about suggestions

### ❌ Strategy-Related
- Jumping to optimal solution immediately
- Not testing your code
- Forgetting to discuss complexity
- Not following up on interviewer hints
- Rushing through explanation

## How to Recover from Mistakes

### If you get stuck:
1. **Ask for a hint** - "Can you give me a direction to think about?"
2. **Simplify** - Solve a simpler version first
3. **Use examples** - Walk through more examples by hand
4. **Brute force** - Start with obvious solution, optimize later

### If your solution is inefficient:
1. **Acknowledge it** - "This is O(n²), let me optimize..."
2. **Try patterns** - Can you use two-pointer? Hash? DP?
3. **Discuss trade-offs** - "We could use more space for less time..."
4. **Implement if time allows**

### If you realize a bug mid-code:
1. **Pause and explain** - "I think there's an issue here..."
2. **Walk through logic** - Use an example to trace
3. **Fix it** - Clearly explain the fix
4. **Move forward** - Don't get stuck

## After the Interview

1. **Send thank you note** - Within 24 hours
2. **Reflect** - What went well? What to improve?
3. **Keep practicing** - Don't stop after one interview
4. **If rejected** - Ask for feedback if possible

## Problem-Solving Framework

### UNDERSTAND (2-3 min)
- [ ] Read problem carefully
- [ ] Ask clarifying questions
- [ ] Write down constraints
- [ ] State problem in your words

### PLAN (2-3 min)
- [ ] Think of brute force
- [ ] Consider optimizations
- [ ] Discuss approaches
- [ ] Choose best approach

### CODE (10-15 min)
- [ ] Write clean code
- [ ] Handle edge cases
- [ ] Add comments
- [ ] Follow best practices

### TEST (3-5 min)
- [ ] Walk through examples
- [ ] Check edge cases
- [ ] Verify output
- [ ] Discuss complexity

## Common Problem Patterns

### 1. Finding a Target
Pattern: Two pointers, binary search
Time: O(n) or O(log n)
Examples: Two Sum, Target Sum

### 2. Subsequences/Substrings
Pattern: Sliding window, DP
Time: O(n) or O(n²)
Examples: Longest Substring, Longest Increasing Subsequence

### 3. Counting Occurrences
Pattern: Hash map/set, frequency counter
Time: O(n)
Examples: Word frequency, Anagrams

### 4. Graph/Tree Traversal
Pattern: DFS, BFS, recursion
Time: O(V + E)
Examples: Number of Islands, Word Ladder

### 5. Optimization Problems
Pattern: DP, greedy
Time: Varies
Examples: Coin Change, House Robber

## Interview Questions to Ask

### Before Starting:
- "Can I ask clarifying questions?"
- "Do you want me to think out loud?"
- "Should I explain as I code?"

### While Coding:
- "Does this approach make sense?"
- "Should I optimize for time or space?"
- "Should I handle [specific edge case]?"

### After Coding:
- "What's the time and space complexity?"
- "Can this be optimized further?"
- "Are there other approaches?"
- "Do you have any questions about my code?"

## Mindset Tips

✅ **Stay calm** - Interviews are nerve-wracking, that's normal
✅ **Ask for help** - It shows good communication skills
✅ **Think out loud** - Interviewer wants to understand your thinking
✅ **Start simple** - Get a working solution first, optimize later
✅ **Accept feedback** - Show you can listen and adapt
✅ **Be confident** - You've prepared for this!

Remember: **No one expects you to solve hard problems perfectly under pressure. They want to see how you think and approach problems.**

Good luck! 🚀
