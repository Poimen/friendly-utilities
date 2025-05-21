import { expect, test } from "vitest";
import { train_to_camel, train_to_pascal, train_to_snake, train_to_screaming_snake, train_to_kebab, train_to_dot, train_to_path } from "./traincase-conversions";

test('converts Train-Case to camelCase', () => {
  expect(train_to_camel('My-Example-String')).toBe('myExampleString');
});

test('converts Train-Case to PascalCase', () => {
  expect(train_to_pascal('My-Example-String')).toBe('MyExampleString');
});

test('converts Train-Case to snake_case', () => {
  expect(train_to_snake('My-Example-String')).toBe('my_example_string');
});

test('converts Train-Case to SCREAMING_SNAKE_CASE', () => {
  expect(train_to_screaming_snake('My-Example-String')).toBe('MY_EXAMPLE_STRING');
});

test('converts Train-Case to kebab-case', () => {
  expect(train_to_kebab('My-Example-String')).toBe('my-example-string');
});

test('converts Train-Case to dot.case', () => {
  expect(train_to_dot('My-Example-String')).toBe('my.example.string');
});

test('converts Train-Case to path/case', () => {
  expect(train_to_path('My-Example-String')).toBe('my/example/string');
});
