import { expect, test } from 'vitest'
import { snake_to_camel, snake_to_dot, snake_to_kebab, snake_to_pascal, snake_to_path, snake_to_screaming_snake, snake_to_train } from './snakecase-conversions';

test('converts snake_case to camelCase', () => {
  expect(snake_to_camel('my_example_string')).toBe('myExampleString');
});

test('converts snake_case to PascalCase', () => {
  expect(snake_to_pascal('my_example_string')).toBe('MyExampleString');
});

test('converts snake_case to SCREAMING_SNAKE_CASE', () => {
  expect(snake_to_screaming_snake('my_example_string')).toBe('MY_EXAMPLE_STRING');
});

test('converts snake_case to kebab-case', () => {
  expect(snake_to_kebab('my_example_string')).toBe('my-example-string');
});

test('converts snake_case to Train-Case', () => {
  expect(snake_to_train('my_example_string')).toBe('My-Example-String');
});

test('converts snake_case to dot.case', () => {
  expect(snake_to_dot('my_example_string')).toBe('my.example.string');
});

test('converts snake_case to path/case', () => {
  expect(snake_to_path('my_example_string')).toBe('my/example/string');
});
