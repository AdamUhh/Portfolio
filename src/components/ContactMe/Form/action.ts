"use server";

import { z } from "zod";

export default async function sendEmail(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().trim().min(1, { message: "Name field has to be filled." }),
    email: z
      .string()
      .min(1, { message: "Email field has to be filled." })
      .email("This is not a valid email."),
    message: z
      .string()
      .trim()
      .min(1, { message: "Message field has to be filled." }),
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parse.success) {
    return {
      success: false,
      message: parse.error.errors?.[0]?.message || "Missing Fields!",
    };
  }

  const data = parse.data;

  try {
    // ? AWS SES Here
    console.log(data);

    // revalidatePath("/contact");
    return { success: true, message: "Email Sent!" };
  } catch (e) {
    return { success: false, message: "Failed to send email" };
  }
}
