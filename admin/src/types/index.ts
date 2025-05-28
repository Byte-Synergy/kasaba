export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type WithRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export type WithOut<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
