import ContactForm from "./Form";
import ContactInformation from "./Information";

export default function ContactMe() {
  return (
    <div className="flex h-full w-full items-center justify-center text-main-FOREGROUND">
      <div className="flex min-h-[50%] min-w-[50%] gap-10 2xl:my-auto 2xl:flex-col 2xl:p-6 ">
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  );
}
