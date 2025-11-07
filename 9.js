function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome(101));