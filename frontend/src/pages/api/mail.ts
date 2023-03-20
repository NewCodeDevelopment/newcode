import { MailData } from "@/utils/types/mail";
import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

  const { email, subject, body } = req.body as MailData;

  const adminMsg: MailDataRequired = {
    to: process.env.ADMIN_EMAIL,
    from: "no-reply@newcode.be",
    subject: subject,
    html: body,
  };

  const clientMsg: MailDataRequired = {
    to: email,
    from: "no-reply@newcode.be",
    templateId: "d-688527a41b7449c3ac7c285189cc546c",
  };

  try {
    await sgMail.send(adminMsg);
    await sgMail.send(clientMsg);
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error(`
        
        
            MAIL ERROR
            **********
            **********
            **********

            ERROR: ${err}

        
        `);
    res.status(500).json({
      error: err,
    });
  }
}
