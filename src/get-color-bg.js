export function getRandomColor() {
  let list = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += list[Math.floor(Math.random() * 16)];
  }
  return color;
}
