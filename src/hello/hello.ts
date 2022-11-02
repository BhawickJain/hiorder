export function hello(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return `Hello, World!`;
  }
}
