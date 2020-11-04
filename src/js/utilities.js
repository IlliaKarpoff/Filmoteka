import selectMovie from './filmDetailsPage';

export function toStorage (key, value) {
  window.local.Storage.setItem(key,value)
}

export function fromStorage (key) {
  return window.local.Storage.getItem(key)
}