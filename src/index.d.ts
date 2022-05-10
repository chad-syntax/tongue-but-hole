import { State } from "./maidens";

declare global {
  interface Window {
    state: State;
  }
}

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.jpg" {
  const value: string;
  export = value;
}
