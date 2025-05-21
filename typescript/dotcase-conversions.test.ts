import { expect, test } from "vitest";
import { dot_to_camel, dot_to_pascal, dot_to_snake, dot_to_screaming_snake, dot_to_kebab, dot_to_train, dot_to_path } from "./dotcase-conversions";

test('converts dot.case to camelCase', () => {
  expect(dot_to_camel('my.example.string')).toBe('myExampleString');
});

test('converts dot.case to PascalCase', () => {
  expect(dot_to_pascal('my.example.string')).toBe('MyExampleString');
});

test('converts dot.case to snake_case', () => {
  expect(dot_to_snake('my.example.string')).toBe('my_example_string');
});

test('converts dot.case to SCREAMING_SNAKE_CASE', () => {
  expect(dot_to_screaming_snake('my.example.string')).toBe('MY_EXAMPLE_STRING');
});

test('converts dot.case to kebab-case', () => {
  expect(dot_to_kebab('my.example.string')).toBe('my-example-string');
});

test('converts dot.case to Train-Case', () => {
  expect(dot_to_train('my.example.string')).toBe('My-Example-String');
});

test('converts dot.case to path/case', () => {
  expect(dot_to_path('my.example.string')).toBe('my/example/string');
});
