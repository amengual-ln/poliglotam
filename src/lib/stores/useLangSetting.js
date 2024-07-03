import { browser } from "$app/environment";
import { writable } from 'svelte/store'

let stored
export let lang

if (browser) {
  stored = localStorage.getItem('lang')
  const navigatorLanguage = ['es', 'en'].includes(window.navigator.language.split("-")[0]) ? window.navigator.language.split("-")[0] : 'en'
  lang = writable(stored || navigatorLanguage)

  lang.subscribe((value) => localStorage.setItem('lang', value))
}