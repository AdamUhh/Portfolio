import { FieldProps } from "./types";

export default function Field({ label, type, id }: FieldProps) {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-yellow-300"
        htmlFor={id}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          className="w-full rounded-md border border-gray-600 bg-gray-800 p-2"
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className="w-full rounded-md border border-gray-600 bg-gray-800 p-2"
          required
        />
      )}
    </div>
  );
}
