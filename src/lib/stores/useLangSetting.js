import { browser } from "$app/environment";
import { writable } from 'svelte/store';

let lang;

if (browser) {
  const stored = localStorage.getItem('lang');
  const navigatorLanguage = ['es', 'en'].includes(window.navigator.language.split("-")[0])
    ? window.navigator.language.split("-")[0]
    : 'en';

  lang = writable(stored || navigatorLanguage);

  lang.subscribe((value) => {
    localStorage.setItem('lang', value);
  });
} else {
  lang = writable('en');
}

export { lang };