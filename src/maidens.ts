export interface State {
  [key: string]: any;
  "0-templates"?: (s: string) => string;
  "0-words"?: string;
  "1-templates"?: (s: string) => string;
  "1-words"?: string;
  conjunction?: (a: string, b: string) => string;
  conjunctionsEnabled: boolean;
}

export type templateIds = "0-templates" | "1-templates";
export type wordsIds = "1-words" | "0-words";
