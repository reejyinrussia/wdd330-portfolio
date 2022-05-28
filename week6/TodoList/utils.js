export function qs(selectorName) {
  return document.querySelector(selectorName);
}

export function readStore(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function writeStore(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function bind(selector, callback) {
  const element = qs(selector);
  element.addEventListener("click", callback);
}