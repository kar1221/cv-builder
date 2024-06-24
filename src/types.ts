export interface PersonalDetailsType {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  city: string;
  state: string;
  summary: string;
}

/* I wonder if this has the protential to break typescript lsp */
export type DefaultValues<T> = {
  [K in keyof T]: T[K] extends string
    ? ""
    : T[K] extends number
      ? 0
      : T[K] extends boolean
        ? false
        : DefaultValues<T[K]>;
};
