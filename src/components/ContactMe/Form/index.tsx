import FormLayout, { Field } from "./FormLayout";

interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
  return (
    <FormLayout>
      <h2 className="mb-4 text-3xl font-bold">Or Drop Me a Note</h2>
      <Field label="Name" type="text" id="name" />
      <Field label="Email" type="email" id="email" />
      <Field label="Message" type="textarea" id="message" />
    </FormLayout>
  );
}
