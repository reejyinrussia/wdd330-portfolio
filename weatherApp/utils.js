
export function saveToStore(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function readFromStore(key) {
  return JSON.parse(localStorage.getItem(key));
}