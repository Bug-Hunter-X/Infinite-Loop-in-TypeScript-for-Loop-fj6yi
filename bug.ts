function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will work fine
printNumbers(-5); //This will result in an infinite loop because the condition i <= n will never be false when n is negative. 