import nodemailer from 'nodemailer'
import { WELCOME_EMAIL_TEMPLATE } from './templates'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    }
})

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro)

    const mailOptions = {
        from: `"InvestApp" <support@investapp.pro>`,
        to: email,
        subject: `Welcom to InvestApp - your invest goals are save with us`,
        text: 'Thanks for joining InvestApp',
        html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions);
}