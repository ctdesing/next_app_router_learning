"use server";

import { revalidatePath } from "next/cache";

let names = ["Mike", "Luis", "Raul"];

export const getAll = () => {
  return names;
};

export const create = (formData) => {
  const name = formData.get("name");
  names.push(name);
  revalidatePath("/");
};

export const remove = (formData) => {
  const name = formData.get("name");
  names = names.filter((n) => n !== name);
  revalidatePath("/");
};
