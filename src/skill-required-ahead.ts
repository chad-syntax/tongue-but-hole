import "./comet-azur.css";
import {
  $root,
  $clear,
  $finalString,
  $enableConjunctions,
  $0templates,
  $1templates,
  $0words,
  $1words,
  $finish,
  $conjunctions,
  $activeSelection,
  $editor,
  $message,
} from "./npcs";
import { clearElement, sorcery, ungabunga } from "./didnt-expect-dung";
import {
  renderTemplateSelection,
  renderWordsSelection,
  renderConjunctionsSelection,
  renderFinalString,
  renderMessage,
} from "./seek-rump";
import { soItsNotAnActualRing } from "./the-elden-ring";

soItsNotAnActualRing();

window.state = { conjunctionsEnabled: false };

const enabledConjunctions = () => {
  [$1templates, $1words, $conjunctions].forEach(($elem) => {
    $elem.classList[$enableConjunctions.checked ? "remove" : "add"]("hidden");
    window.state.conjunctionsEnabled = $enableConjunctions.checked;
  });
};

$enableConjunctions.addEventListener("change", enabledConjunctions);

[$0templates, $1templates].forEach(($templates) => {
  $templates.addEventListener("focus", () => {
    renderTemplateSelection($templates);
  });
  $templates.addEventListener("input", (e) => {
    const val = (e?.target as HTMLInputElement)?.value;
    renderTemplateSelection($templates, val);
  });
});

[$0words, $1words].forEach(($words) => {
  $words.addEventListener("focus", () => {
    renderWordsSelection($words);
  });
  $words.addEventListener("input", (e) => {
    const val = (e?.target as HTMLInputElement)?.value;
    renderWordsSelection($words, val);
  });
});

$conjunctions.addEventListener("focus", () => {
  renderConjunctionsSelection();
});

$conjunctions.addEventListener("input", (e) => {
  const val = (e?.target as HTMLInputElement)?.value;
  renderConjunctionsSelection(val);
});

$conjunctions.addEventListener("change", () => {
  renderFinalString();
});

$finish.addEventListener("click", () => {
  const finalString = renderFinalString();
  if (!finalString) return;
  window.location.hash = sorcery(finalString);
  $editor.classList.remove("summon");
  setTimeout(() => {
    $editor.classList.add("hidden");
    $message.classList.remove("hidden");
  }, 300);
  setTimeout(() => {
    $message.classList.add("summon");
    renderMessage(finalString || "");
  }, 500);
});

document.documentElement.addEventListener("click", (e) => {
  if (e.target === document.documentElement || e.target === $root) {
    clearElement($activeSelection);
    $activeSelection.classList.add("hidden");
  }
});

$clear.addEventListener("click", () => {
  window.state = { conjunctionsEnabled: false };
  $finalString.innerHTML = "&nbsp;";
  [$0templates, $0words, $1templates, $1words, $conjunctions].forEach(
    ($elem) => {
      $elem.value = "";
    }
  );
  $enableConjunctions.checked = false;
  enabledConjunctions();
  window.location.hash = "";
});

const { hash } = window.location;

if (hash) {
  const parsed = ungabunga(hash.slice(1, hash.length));
  $message.classList.remove("hidden");
  renderMessage(parsed);
  setTimeout(() => {
    $message.classList.add("summon");
  }, 1);
} else {
  $editor.classList.remove("hidden");
  setTimeout(() => {
    $editor.classList.add("summon");
  }, 1);
}
