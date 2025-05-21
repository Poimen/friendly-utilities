import { expect, test } from "vitest";
import { kebab_to_camel, kebab_to_pascal, kebab_to_snake, kebab_to_screaming_snake, kebab_to_train, kebab_to_dot, kebab_to_path } from "./kebabcase-conversions";

test('converts kebab-case to camelCase', () => {
  expect(kebab_to_camel('my-example-string')).toBe('myExampleString');
});

test('converts kebab-case to PascalCase', () => {
  expect(kebab_to_pascal('my-example-string')).toBe('MyExampleString');
});

test('converts kebab-case to snake_case', () => {
  expect(kebab_to_snake('my-example-string')).toBe('my_example_string');
});

test('converts kebab-case to SCREAMING_SNAKE_CASE', () => {
  expect(kebab_to_screaming_snake('my-example-string')).toBe('MY_EXAMPLE_STRING');
});

test('converts kebab-case to Train-Case', () => {
  expect(kebab_to_train('my-example-string')).toBe('My-Example-String');
});

test('converts kebab-case to dot.case', () => {
  expect(kebab_to_dot('my-example-string')).toBe('my.example.string');
});

test('converts kebab-case to path/case', () => {
  expect(kebab_to_path('my-example-string')).toBe('my/example/string');
});
