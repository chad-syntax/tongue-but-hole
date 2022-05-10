import * as actions from "./actions";
import * as affinites from "./affinities";
import * as battleTactics from "./battle-tactics";
import * as bodyParts from "./body-parts";
import * as concepts from "./concepts";
import * as directions from "./directions";
import * as enemies from "./enemies";
import * as people from "./people";
import * as phrases from "./phrases";
import * as places from "./places";
import * as situations from "./situations";
import * as things from "./things";

export { OPTIONS as allTemplates } from "./templates";
export * as templates from "./templates";
export { OPTIONS as allConjunctions } from "./conjunctions";
export * as conjunctions from "./conjunctions";

export const wordsGroups = [
  actions,
  affinites,
  battleTactics,
  bodyParts,
  concepts,
  directions,
  enemies,
  people,
  phrases,
  places,
  situations,
  things,
];

export const allWords = [
  ...actions.OPTIONS,
  ...affinites.OPTIONS,
  ...battleTactics.OPTIONS,
  ...bodyParts.OPTIONS,
  ...concepts.OPTIONS,
  ...directions.OPTIONS,
  ...enemies.OPTIONS,
  ...people.OPTIONS,
  ...phrases.OPTIONS,
  ...places.OPTIONS,
  ...situations.OPTIONS,
  ...things.OPTIONS,
];
