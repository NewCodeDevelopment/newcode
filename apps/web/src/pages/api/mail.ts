import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { MailData } from "utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

    const { subject, body } = req.body as MailData;

    const msg = {
        to: process.env.ADMIN_EMAIL,
        from: "info@newcode.be",
        subject: subject,
        html: body,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ success: true });
    } catch (err: any) {
        console.log(`
        
        
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
