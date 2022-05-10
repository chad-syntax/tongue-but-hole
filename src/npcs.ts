export const $root = document.getElementById("root") as HTMLDivElement;
export const $finalString = document.getElementById(
  "final-string"
) as HTMLDivElement;
export const $enableConjunctions = document.getElementById(
  "enable-conjunctions"
) as HTMLInputElement;
export const $0templates = document.getElementById(
  "0-templates"
) as HTMLInputElement;
export const $1templates = document.getElementById(
  "1-templates"
) as HTMLInputElement;
export const $0words = document.getElementById("0-words") as HTMLInputElement;
export const $1words = document.getElementById("1-words") as HTMLInputElement;
export const $finish = document.getElementById("finish") as HTMLButtonElement;
export const $conjunctions = document.getElementById(
  "conjunctions"
) as HTMLInputElement;
export const $activeSelection = document.getElementById(
  "active-selection"
) as HTMLDivElement;
export const $noMaidens = document.createElement("div");
$noMaidens.id = "no-maidens";
const $noSimping = document.createElement("div");
$noSimping.textContent = "You, I am afraid, are maidenless";
const $okAlittleSimping = document.createElement("div");
$okAlittleSimping.textContent = "(no results)";
$noMaidens.appendChild($noSimping);
$noMaidens.appendChild($okAlittleSimping);
export const $clear = document.getElementById("clear") as HTMLButtonElement;
export const $editor = document.getElementById(
  "i-use-summons-fight-me"
) as HTMLDivElement;
export const $message = document.getElementById(
  "hold-on-let-me-summon-first"
) as HTMLDivElement;
export const $lmshTheme = document.getElementById(
  "giga-jarnished"
) as HTMLAudioElement;
