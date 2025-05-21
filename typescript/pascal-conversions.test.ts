import { expect, test } from "vitest";
import { pascal_to_camel, pascal_to_snake, pascal_to_screaming_snake, pascal_to_kebab, pascal_to_train, pascal_to_dot, pascal_to_path } from "./pascalcase-conversions";

test('converts PascalCase to camelCase', () => {
  expect(pascal_to_camel('MyExampleString')).toBe('myExampleString');
});

test('converts PascalCase to snake_case', () => {
  expect(pascal_to_snake('MyExampleString')).toBe('my_example_string');
});

test('converts PascalCase to SCREAMING_SNAKE_CASE', () => {
  expect(pascal_to_screaming_snake('MyExampleString')).toBe('MY_EXAMPLE_STRING');
});

test('converts PascalCase to kebab-case', () => {
  expect(pascal_to_kebab('MyExampleString')).toBe('my-example-string');
});

test('converts PascalCase to Train-Case', () => {
  expect(pascal_to_train('MyExampleString')).toBe('My-Example-String');
});

test('converts PascalCase to dot.case', () => {
  expect(pascal_to_dot('MyExampleString')).toBe('my.example.string');
});

test('converts PascalCase to path/case', () => {
  expect(pascal_to_path('MyExampleString')).toBe('my/example/string');
});

test('converts Capital PascalCase to kebab-case', () => {
  expect(pascal_to_kebab('XMLHttpRequest')).toBe('xml-http-request');
});
