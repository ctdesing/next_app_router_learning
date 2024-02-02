"use client";

import * as Name from "./action";

export default function Display({ names }) {
  return (
    <div>
      <h1>Names</h1>
      <form action={Name.create}>
        <input name="name" />
        <button>Submit</button>
      </form>
      <ul>
        {names.map((name) => (
          <li style={{ fontSize: "30px" }} key={name}>
            <span>{name}</span>
            <form
              style={{
                display: "inline",
                marginLeft: ".3rem",
              }}
              action={Name.remove}
            >
              <input name="name" value={name} readOnly={true} hidden={true} />
              <button style={{ padding: ".5rem" }}>X</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
