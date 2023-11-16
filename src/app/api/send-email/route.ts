import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

}

// export default async function handler(
//   req: NextRequest,
// ) {
//   if (req.method === "POST") {
//     const { data } = req.body;

//     // Initialize AWS SES with your credentials
//     const ses = new AWS.SES({
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//       region: "your-aws-region", // replace with your AWS region
//     });

//     // Specify the email content
//     const params = {
//       Destination: {
//         ToAddresses: ["adamuhh.dev@gmail.com"],
//       },
//       Message: {
//         Body: {
//           Text: {
//             Data: JSON.stringify(data, null, 2),
//           },
//         },
//         Subject: {
//           Data: "Contact Form Submission",
//         },
//       },
//       Source: "your-ses-verified-email@your-domain.com", // Replace with your SES verified email
//     };

//     try {
//       // Send the email
//       const result = await ses.sendEmail(params).promise();
//       console.log("Email sent:", result);
//       return new NextResponse(JSON.stringify({ success: true }), {
//         status: 200,
//       });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       return new NextResponse(
//         JSON.stringify({ success: false, error: "Internal Server Error" }),
//         {
//           status: 500,
//         },
//       );
//     }
//   } else {
//     return new NextResponse(
//       JSON.stringify({ success: false, error: "Method Not Allowed" }),
//       {
//         status: 405,
//       },
//     );
//   }
// }
