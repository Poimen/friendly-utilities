import { expect, test } from "vitest";
import { screaming_snake_to_camel, screaming_snake_to_pascal, screaming_snake_to_snake, screaming_snake_to_kebab, screaming_snake_to_train, screaming_snake_to_dot, screaming_snake_to_path } from "./screaming-snake-conversions";

test('converts SCREAMING_SNAKE_CASE to camelCase', () => {
  expect(screaming_snake_to_camel('MY_EXAMPLE_STRING')).toBe('myExampleString');
});

test('converts SCREAMING_SNAKE_CASE to PascalCase', () => {
  expect(screaming_snake_to_pascal('MY_EXAMPLE_STRING')).toBe('MyExampleString');
});

test('converts SCREAMING_SNAKE_CASE to snake_case', () => {
  expect(screaming_snake_to_snake('MY_EXAMPLE_STRING')).toBe('my_example_string');
});

test('converts SCREAMING_SNAKE_CASE to kebab-case', () => {
  expect(screaming_snake_to_kebab('MY_EXAMPLE_STRING')).toBe('my-example-string');
});

test('converts SCREAMING_SNAKE_CASE to Train-Case', () => {
  expect(screaming_snake_to_train('MY_EXAMPLE_STRING')).toBe('My-Example-String');
});

test('converts SCREAMING_SNAKE_CASE to dot.case', () => {
  expect(screaming_snake_to_dot('MY_EXAMPLE_STRING')).toBe('my.example.string');
});

test('converts SCREAMING_SNAKE_CASE to path/case', () => {
  expect(screaming_snake_to_path('MY_EXAMPLE_STRING')).toBe('my/example/string');
});
