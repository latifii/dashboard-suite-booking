export type AuthSignup = {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  avatar?: File | null;
};

export type AuthLogin = Omit<AuthSignup, "fullName" | "phone">;
