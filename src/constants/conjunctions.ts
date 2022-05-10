export const LABEL = "Conjunctions";
export const OPTIONS = [
  (a: string, b: string) => `${a} and then ${b}`,
  (a: string, b: string) => `${a} or ${b}`,
  (a: string, b: string) => `${a} but ${b}`,
  (a: string, b: string) => `${a} therefore ${b}`,
  (a: string, b: string) => `${a} in short ${b}`,
  (a: string, b: string) => `${a} except ${b}`,
  (a: string, b: string) => `${a} by the way ${b}`,
  (a: string, b: string) => `${a} so to speak ${b}`,
  (a: string, b: string) => `${a} all the more ${b}`,
  (a: string, b: string) => `${a}, ${b}`,
];
