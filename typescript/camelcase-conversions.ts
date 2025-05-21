
function splitCamel(str: string): string[] {
  return str.match(/([A-Z]+(?=[A-Z][a-z])|[A-Z]?[a-z]+|[A-Z]+)/g)?.map(w => w.toLowerCase()) ?? [];
}

export function camel_to_pascal(str: string): string {
  const words = splitCamel(str);
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

export function camel_to_snake(str: string): string {
  const words = splitCamel(str);
  return words.join('_');
}

export function camel_to_screaming_snake(str: string): string {
  const words = splitCamel(str);
  return words.map(w => w.toUpperCase()).join('_');
}

export function camel_to_kebab(str: string): string {
  const words = splitCamel(str);
  return words.join('-');
}

export function camel_to_train(str: string): string {
  const words = splitCamel(str);
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join('-');
}

export function camel_to_dot(str: string): string {
  const words = splitCamel(str);
  return words.join('.');
}

export function camel_to_path(str: string): string {
  const words = splitCamel(str);
  return words.join('/');
}
