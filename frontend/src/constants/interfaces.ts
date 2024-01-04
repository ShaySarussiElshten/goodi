export type Freeze<T> = {
  readonly [P in keyof T]: Freeze<T[P]>;
};
