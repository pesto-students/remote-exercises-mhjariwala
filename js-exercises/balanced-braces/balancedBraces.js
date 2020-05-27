function balancedBraces(str) {
  if (!str || !str.trim()) {
      return null
  }

  const characters = str.split('')
  const stack = []

  const openCloseBraces = {
      '{': '}',
      '[': ']',
      '(': ')'
  }

  const closeBraces = {
      '}': true,
      ')': true,
      ']': true
  }

  for (let char of characters) {
      if (openCloseBraces[char]) {
          stack.push(char)
      } else if (closeBraces[char]) {
          const lastChar = stack.pop()

          if (openCloseBraces[lastChar] !== char) {
              return false
          }
      }
  }

  return !stack.length
}

export {
  balancedBraces,
};
