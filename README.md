# TypeScript For Loop Bug

This repository demonstrates a common bug in TypeScript for loops that can lead to infinite loops.  The issue occurs when the loop condition isn't carefully considered for all possible input values.

## Bug Description

The `printNumbers` function aims to print numbers from 1 to n. However, if a negative number is passed as input, the loop condition `i <= n` will always be true (since `i` starts at 1), leading to an infinite loop. 

## Solution

The solution involves adding a check to ensure that n is a positive number before entering the loop.  If n is negative or zero, an appropriate message is printed instead of attempting the loop.