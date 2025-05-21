
export function snake_to_camel(str: string) {
  const words = str.split('_');
  return words[0] + words.slice(1).map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

export function snake_to_pascal(str: string) {
  const words = str.split('_');
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

export function snake_to_screaming_snake(str: string) {
  const words = str.split('_');
  return words.map(w => w.toUpperCase()).join('_');
}

export function snake_to_kebab(str: string) {
  const words = str.split('_');
  return words.join('-');
}

export function snake_to_train(str: string) {
  const words = str.split('_');
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join('-');
}

export function snake_to_dot(str: string) {
  const words = str.split('_');
  return words.join('.');
}

export function snake_to_path(str: string) {
  const words = str.split('_');
  return words.join('/');
}
