import { expect, test } from "vitest";
import { camel_to_pascal, camel_to_snake, camel_to_screaming_snake, camel_to_kebab, camel_to_train, camel_to_dot, camel_to_path } from "./camelcase-conversions";

test('converts camelCase to PascalCase', () => {
  expect(camel_to_pascal('myExampleString')).toBe('MyExampleString');
});

test('converts camelCase to snake_case', () => {
  expect(camel_to_snake('myExampleString')).toBe('my_example_string');
});

test('converts camelCase to SCREAMING_SNAKE_CASE', () => {
  expect(camel_to_screaming_snake('myExampleString')).toBe('MY_EXAMPLE_STRING');
});

test('converts camelCase to kebab-case', () => {
  expect(camel_to_kebab('myExampleString')).toBe('my-example-string');
});

test('converts camelCase to Train-Case', () => {
  expect(camel_to_train('myExampleString')).toBe('My-Example-String');
});

test('converts camelCase to dot.case', () => {
  expect(camel_to_dot('myExampleString')).toBe('my.example.string');
});

test('converts camelCase to path/case', () => {
  expect(camel_to_path('myExampleString')).toBe('my/example/string');
});
