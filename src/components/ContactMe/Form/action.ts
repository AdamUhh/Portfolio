"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

export default async function sendEmail(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parse.success) {
    return { message: "Missing Fields!" };
  }

  const data = parse.data;

  try {
    // ? AWS SES Here

    revalidatePath("/contact");
    return { success: true, message: `Email Sent!` };
  } catch (e) {
    return { success: false, message: "Failed to send email" };
  }
}
