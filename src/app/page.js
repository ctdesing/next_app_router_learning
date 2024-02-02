"use server";

import * as Name from "./action";
import Display from "./display";

export default async function App() {
  const names = Name.getAll();

  return <Display names={names} />;
}
