
export function screaming_snake_to_camel(str: string): string {
  const words = str.split('_').map(w => w.toLowerCase());
  return words[0] + words.slice(1).map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

export function screaming_snake_to_pascal(str: string): string {
  const words = str.split('_').map(w => w.toLowerCase());
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

export function screaming_snake_to_snake(str: string): string {
  const words = str.split('_').map(w => w.toLowerCase());
  return words.join('_');
}

export function screaming_snake_to_kebab(str: string): string {
  const words = str.split('_').map(w => w.toLowerCase());
  return words.join('-');
}

export function screaming_snake_to_train(str: string): string {
  const words = str.split('_').map(w => w.toLowerCase());
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join('-');
}

export function screaming_snake_to_dot(str: string): string {
  const words = str.split('_').map(w => w.toLowerCase());
  return words.join('.');
}

export function screaming_snake_to_path(str: string): string {
  const words = str.split('_').map(w => w.toLowerCase());
  return words.join('/');
}
