"use server";

require("aws-sdk/lib/maintenance_mode_message").suppress = true;

import SES from "aws-sdk/clients/ses";
import { z } from "zod";

interface I_SendEmailReturn {
  status: string;
  returnMessage: string;
}

const ses = new SES({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default async function sendEmail(
  _: any,
  formData: FormData,
): Promise<I_SendEmailReturn> {
  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Name field has to be filled." })
      .max(50, { message: "Name too long! Max Characters: 50" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Email field has to be filled." })
      .email("This is not a valid email.")
      .max(256, { message: "Email too long! Max Characters: 256" }),
    company: z
      .string()
      .trim()
      .max(50, { message: "Company name too long! Max Characters: 50" })
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(1, { message: "Message field has to be filled." })
      .max(1000, { message: "Message too long! Max Characters: 1000" }),
  });
  const parse = schema.safeParse({
    name: formData.get("name")?.toString().trim(),
    email: formData.get("email")?.toString().trim(),
    company: formData.get("company")?.toString().trim(),
    message: formData.get("message")?.toString().trim(),
  });

  if (!parse.success) {
    return {
      status: "false",
      returnMessage: parse.error.errors?.[0]?.message || "Missing Fields!",
    };
  }

  const data = parse.data;

  try {
    const params = {
      Destination: {
        ToAddresses: ["adamuhh.dev@gmail.com"],
      },
      Message: {
        Body: {
          Text: {
            Data: `
Name: ${data.name}\n${!!data.company?.length ? `Company: ${data.company}\n` : ""}
Email: ${data.email}\n
Message:\n\n${data.message}`,
          },
        },
        Subject: {
          Data: "Message from: " + data.name,
        },
      },
      Source: "Portfolio Contact Form <contact@adamuhh.dev>",
    };

    await ses.sendEmail(params).promise();

    return {
      status: "true",
      returnMessage: "Email Sent!",
    };
  } catch (e) {
    return {
      status: "false",
      returnMessage: "Failed to send email",
    };
  }
}
