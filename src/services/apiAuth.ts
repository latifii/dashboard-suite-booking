import supabase from "../configs/supabase";
import { AuthLogin, AuthSignup } from "../types/auth.types";

export async function signup({ fullName, email, password, phone }: AuthSignup) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        phone,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
export async function login({ email, password }: AuthLogin) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("API Error", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
