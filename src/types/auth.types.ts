export type AuthSignup = {
  email: string;
  password: string;
  fullName: string;
  phone: string;
};

export type AuthLogin = Omit<AuthSignup, "fullName" | "phone">;
