import { FieldProps } from "./types";

export default function Field({ label, type, id, onChange }: FieldProps) {
  const inputClass =
    "w-full rounded-md border-2 bg-transparent border-main-FOREGROUND/20 p-2";

  return (
    <div className="mb-4">
      <label
        className="mb-2 block  text-sm font-bold text-contactme-CLASS"
        htmlFor={id}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          className={inputClass}
          required
          onChange={onChange}
        />
      ) : (
        <input type={type} id={id} name={id} className={inputClass} required />
      )}
    </div>
  );
}
