import { $activeSelection, $editor } from "./npcs";

export const clearElement = ($element: HTMLElement) => {
  if (!$element) return;
  while ($element.firstChild) {
    $element.removeChild($element.firstChild);
  }
};

export const appendChildren = (
  $rootElem: HTMLElement,
  $children: HTMLElement[]
) => {
  if (!$rootElem) return;
  for (const $child of $children) {
    $rootElem.appendChild($child);
  }
};

export const moveActiveSelection = ($targetElement: HTMLInputElement) => {
  $editor.removeChild($activeSelection);
  $targetElement.insertAdjacentElement("afterend", $activeSelection);
};

export const sorcery = (str: string) => {
  let h = "";
  for (let i = 0; i < str.length; i++) {
    h = `${h}${str.charCodeAt(i).toString(16)}`;
  }
  return h;
};

const stealth = (str: string) => {
  let h = str;
  h = `%${h.replace(/.{2}/g, "$&%")}`.slice(0, -1);
  return h;
};

export const ungabunga = (str: string) => decodeURIComponent(stealth(str));
