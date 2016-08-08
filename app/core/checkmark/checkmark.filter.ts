export function checkmarkFilterFactoryFunction() {
  return function (input: string) {
    return input ? '\u2713' : '\u2718';
  }
}
