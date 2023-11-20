"use client";
import { useState } from "react";
import Field from "./Field";

export default function MessageField() {
  const [charLength, setCharLength] = useState(0);

  return (
    <>
      <Field
        label="Message"
        type="textarea"
        id="message"
        onChange={(e) => setCharLength(e.target.value.length)}
      />
      {charLength !== 0 && (
        <span className={charLength > 1000 ? "text-red-400" : ""}>
          {charLength}/1000
        </span>
      )}
    </>
  );
}
