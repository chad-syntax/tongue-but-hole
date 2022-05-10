import { wordsGroups, conjunctions, templates } from "./constants";
import { wordsIds, templateIds } from "./maidens";
import {
  $root,
  $message,
  $activeSelection,
  $noMaidens,
  $conjunctions,
  $finalString,
  $lmshTheme,
} from "./npcs";
import {
  clearElement,
  appendChildren,
  moveActiveSelection,
} from "./didnt-expect-dung";
// fuck you typescript
// @ts-ignore
import messageIcon from "./visions/message-icon.png";
// I added the declarations but it errors on THIS file when I import here instead of skill-required-ahead.ts
// wtf fuck you typescript suck my ass how is this not a default behavior for file loader with webpack
// in the year of our lord 2022 I'm still doing ts-ignores on stupid ass shit
// GET IT TOGETHER MICHAELSOFT
// if you are reading this and find a fix please submit PR because I literally cannot be arsed.
// @ts-ignore
import THE_IRON_FIST_ALEXANDER_THE_WARRIOR_JAR from "./visions/pot-dude.jpg";
// @ts-ignore
import lmsh0 from "./visions/lmsh-0.png";
// @ts-ignore
import lmsh1 from "./visions/lmsh-1.png";
// @ts-ignore
import lmsh2 from "./visions/lmsh-2.png";
// @ts-ignore
import lmsh3 from "./visions/lmsh-3.png";
// @ts-ignore
import lmsh4 from "./visions/lmsh-4.png";
// @ts-ignore
import lmsh5 from "./visions/lmsh-5.png";

export const renderTemplateSelection = (
  $templatesInput: HTMLInputElement,
  filterTerm?: string
) => {
  moveActiveSelection($templatesInput);
  const children = templates.OPTIONS.map((option) => {
    const $option = document.createElement("button");
    const content = option("***");
    if (
      filterTerm &&
      !content.toLowerCase().includes(filterTerm.toLowerCase())
    ) {
      return null;
    }
    $option.textContent = content;
    $option.addEventListener("click", () => {
      $templatesInput.value = content;
      window.state[$templatesInput.id as templateIds] = option;
      clearElement($activeSelection);
      $activeSelection.classList.add("hidden");
      $templatesInput.blur();
      renderFinalString();
    });
    return $option;
  }).filter((s) => s !== null);
  clearElement($activeSelection);
  if (children.length > 0) {
    appendChildren($activeSelection, children as HTMLElement[]);
  } else {
    $activeSelection.appendChild($noMaidens);
  }
  $activeSelection.classList.remove("hidden");
};

export const renderWordsSelection = (
  $wordsInput: HTMLInputElement,
  filterTerm?: string
) => {
  moveActiveSelection($wordsInput);
  const children = wordsGroups
    .map((wordsGroup) => {
      const $optionWrapper = document.createElement("div");
      const $optionLabel = document.createElement("h4");
      $optionLabel.textContent = wordsGroup.LABEL;
      const options = wordsGroup.OPTIONS.map((option) => {
        if (
          filterTerm &&
          !option.toLowerCase().includes(filterTerm.toLowerCase())
        ) {
          return null;
        }
        const $option = document.createElement("button");
        $option.addEventListener("click", () => {
          $wordsInput.value = option;
          window.state[$wordsInput.id as wordsIds] = option;
          clearElement($activeSelection);
          $activeSelection.classList.add("hidden");
          $wordsInput.blur();
          renderFinalString();
        });
        $option.textContent = option;
        return $option;
      }).filter((s) => s !== null);
      if (options.length === 0) return null;
      $optionWrapper.appendChild($optionLabel);
      appendChildren($optionWrapper, options as HTMLElement[]);
      return $optionWrapper;
    })
    .filter((e) => e !== null);
  clearElement($activeSelection);
  if (children.length > 0) {
    appendChildren($activeSelection, children as HTMLElement[]);
  } else {
    $activeSelection.appendChild($noMaidens);
  }
  $activeSelection.classList.remove("hidden");
};

export const renderConjunctionsSelection = (filterTerm?: string) => {
  moveActiveSelection($conjunctions);
  const conjunctionElements = conjunctions.OPTIONS.map((conjunction) => {
    const $conjunction = document.createElement("button");
    const content = conjunction("***", "***");
    if (
      filterTerm &&
      !content.toLowerCase().includes(filterTerm.toLowerCase())
    ) {
      return null;
    }
    $conjunction.textContent = content;
    $conjunction.addEventListener("click", () => {
      $conjunctions.value = content;
      window.state.conjunction = conjunction;
      $activeSelection.classList.add("hidden");
      $conjunctions.blur();
      renderFinalString();
    });
    return $conjunction;
  }).filter((s) => s !== null);
  clearElement($activeSelection);
  if (conjunctionElements.length > 0) {
    appendChildren($activeSelection, conjunctionElements as HTMLElement[]);
  } else {
    $activeSelection.appendChild($noMaidens);
  }
  $activeSelection.classList.remove("hidden");
};

export const renderFinalString = () => {
  const { state } = window;
  if (!state["0-templates"] || !state["0-words"]) return;
  const firstStatement = state["0-templates"](state["0-words"]);
  if (!state.conjunctionsEnabled) {
    $finalString.textContent = firstStatement;
    return firstStatement;
  } else {
    if (!state.conjunction || !state["1-templates"] || !state["1-words"])
      return;
    const secondStatement = state["1-templates"](state["1-words"]);
    const finalString = state.conjunction(firstStatement, secondStatement);
    $finalString.textContent = finalString;
    return finalString;
  }
};

export const renderMessage = (message: string) => {
  const $messageWrapper = document.createElement("div");
  $messageWrapper.id = "message-wrapper";
  $messageWrapper.classList.add("borderino");
  const $messageIcon = document.createElement("div");
  $messageIcon.id = "message-icon";
  $messageIcon.style.backgroundImage = `url(${messageIcon})`;
  const $messageContent = document.createElement("div");
  $messageContent.id = "message-content";
  const $messageText = document.createElement("div");
  $messageText.id = "message-text";
  $messageText.textContent = message;
  const $messageAppraisals = document.createElement("div");
  $messageAppraisals.id = "message-appraisals";
  const $messageAppraisalsCount = document.createElement("div");
  // yeah I'm not making actual appraisal counting. Do I look like Miyazaki to you?
  // servers aren't free but github pages is
  const appraisalCount = Math.floor(Math.random() * 9999);
  $messageAppraisalsCount.textContent = `Appraisals ${appraisalCount}`;
  const $messageAppraisalsRating = document.createElement("div");
  $messageAppraisalsRating.id =
    "i-rated-it-poor-because-it-was-on-top-of-a-site-of-grace";
  $messageAppraisalsRating.classList.add("phantom");
  const $mayDenless = document.createElement("a");
  $mayDenless.id = "may-denless";
  $mayDenless.textContent = "← Write Message";
  $mayDenless.href = "/";
  const $messageRated = document.createElement("div");
  $messageRated.id = "message-rated";
  const $actionWrapper = document.createElement("div");
  $actionWrapper.id = "action-wrapper";
  const $actions = ["Close", "Good", "Poor", "Share"].map((action) => {
    const $action = document.createElement("button");
    $action.classList.add("action");
    $action.id = `action-${action.toLowerCase()}`;
    $action.textContent = action;
    if (action === "Good" || action === "Poor") {
      $action.addEventListener("click", () => {
        $messageAppraisalsRating.classList.add("summon");
        $messageAppraisalsRating.textContent = `Rated ${action}`;
        const newCount = appraisalCount + (action === "Good" ? 1 : -1);
        $messageAppraisalsCount.textContent = `Appraisals ${
          newCount === 69
            ? `${newCount} nice`
            : newCount === 420
            ? `${newCount} ayy`
            : newCount === 9000
            ? `it's over ${newCount}!`
            : newCount
        }`;
        $actionWrapper.removeChild(
          document.getElementById(`action-good`) as HTMLButtonElement
        );
        $actionWrapper.removeChild(
          document.getElementById(`action-poor`) as HTMLButtonElement
        );
      });
    }
    if (action === "Share") {
      $action.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(location.href);
          $action.textContent = "Copied to clipboard!";
        } catch (e) {
          alert(
            "Margit's Beard! I couldn't copy to your clipboard! That sucks. Git Gud I guess"
          );
        }
      });
    }
    if (action === "Close") {
      $action.addEventListener("click", () => {
        $root.style.backgroundImage = `url(${THE_IRON_FIST_ALEXANDER_THE_WARRIOR_JAR})`;
        $message.classList.remove("summon");
        $root.insertAdjacentElement("afterbegin", $mayDenless);
        setTimeout(() => {
          $message.classList.add("hidden");
        }, 1000);
      });
    }
    return $action;
  });
  appendChildren($messageAppraisals, [
    $messageAppraisalsRating,
    $messageAppraisalsCount,
  ]);
  appendChildren($actionWrapper, $actions);
  appendChildren($messageContent, [$messageText, $messageAppraisals]);
  appendChildren($messageWrapper, [$messageIcon, $messageContent]);
  appendChildren($message, [$mayDenless, $messageWrapper, $actionWrapper]);
};

export const renderTheKingOfAllTarnished = () => {
  $lmshTheme.play();
  $lmshTheme.classList.add("its-boss-time");
  const $jar = document.createElement("div");
  $jar.id = "jar";
  const $innerJar = document.createElement("div");
  $innerJar.id = "inner-jar";
  const $visions = [lmsh0, lmsh1, lmsh2, lmsh3, lmsh4, lmsh5].map((url, i) => {
    const $img = document.createElement("img");
    $img.id = `lmsh-${i}`;
    $img.src = url;
    $img.classList.add("phantom");
    if (i === 0) {
      $img.classList.add("summon");
    }
    return $img;
  });
  let current = 0;
  let currentTimeout: NodeJS.Timeout;
  const interval = setInterval(() => {
    const $activeImg = document.getElementById(
      `lmsh-${current}`
    ) as HTMLImageElement;
    const $targetImg = document.getElementById(
      `lmsh-${current === $visions.length - 1 ? 0 : current + 1}`
    ) as HTMLImageElement;
    $activeImg.classList.remove("summon");
    currentTimeout = setTimeout(() => {
      $targetImg.classList.add("summon");
    }, 500);
    if (current === $visions.length - 1) {
      current = 0;
    } else {
      current++;
    }
  }, 5000);
  $jar.appendChild($innerJar);
  appendChildren($innerJar, $visions);
  document.body.appendChild($jar);
  const lmshThemeListener = () => {
    document.body.removeChild($jar);
    clearInterval(interval);
    clearTimeout(currentTimeout);
    $lmshTheme.classList.remove("its-boss-time");
    $lmshTheme.removeEventListener("pause", lmshThemeListener);
    $lmshTheme.removeEventListener("ended", lmshThemeListener);
  };
  $lmshTheme.addEventListener("pause", lmshThemeListener);
  $lmshTheme.addEventListener("ended", lmshThemeListener);
};
