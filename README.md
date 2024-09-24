# Binary Search

Implement a binary search function that, given a sorted list and an element to
look for, returns the index of the element in the list or -1 if the element is
not there.

Use the template in `code.js`. The tests in `code.test.js` will be run
automatically every time you push to Github; if they pass you are done.

Sources: I used this website for the basics of how the algorithm works. It has code, but I only used it for their mid logic.
https://www.geeksforgeeks.org/binary-search/

Asked the TA for help with the logic, the TA suggested using floor instead of -1 on my midpoint variable.
I asked Lars for help with figuring out how to make my recursive method work, and he suggested creating a new function to help me track the index value.

After bashing my head into recursion, I decided I should switch to a non-recursive method. The recursive code I wrote is in a seperate .md file and I might come back to it as the wild card.

I emailed Lars about difficulty and he told me the test program only wanted the first valid option.
The breakthrough came from Ishita Patel who gave me the nested for loop, which allowed the code to only return the first correct option. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
