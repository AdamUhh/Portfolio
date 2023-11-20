import Field from "./Field";
import FormLayout from "./FormLayout";
import MessageField from "./MessageField";

export default function ContactForm() {
  return (
    <FormLayout>
      <h2 className="mb-4 text-3xl font-bold">Or Drop Me a Note</h2>
      <Field label="Name" type="text" id="name" />
      <Field label="Email" type="email" id="email" />
      <MessageField />
    </FormLayout>
  );
}
