
function splitPascal(str: string): string[] {
  return str.match(/([A-Z]+(?=[A-Z][a-z])|[A-Z]?[a-z]+|[A-Z]+)/g)?.map(w => w.toLowerCase()) ?? [];
}

export function pascal_to_camel(str: string): string {
  const words = splitPascal(str);
  return words[0] + words.slice(1).map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

export function pascal_to_snake(str: string): string {
  const words = splitPascal(str);
  return words.join('_');
}

export function pascal_to_screaming_snake(str: string): string {
  const words = splitPascal(str);
  return words.map(w => w.toUpperCase()).join('_');
}

export function pascal_to_kebab(str: string): string {
  const words = splitPascal(str);
  return words.join('-');
}

export function pascal_to_train(str: string): string {
  const words = splitPascal(str);
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join('-');
}

export function pascal_to_dot(str: string): string {
  const words = splitPascal(str);
  return words.join('.');
}

export function pascal_to_path(str: string): string {
  const words = splitPascal(str);
  return words.join('/');
}
