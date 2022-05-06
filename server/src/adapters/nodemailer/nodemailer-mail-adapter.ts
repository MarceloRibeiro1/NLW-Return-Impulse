import { MailAdapter, SendMailData } from "../mail-adapter"
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "55cc1cc79e703d",
    pass: "cc8db597b0a548"
    }
});


export class NodemailerMailAdapter implements MailAdapter {

  async sendMail ({ subject, body}: SendMailData){
    await transport.sendMail({
        from: 'Equipe Feedget <oi@fidget.com>',
        to: 'Marcelo Henrique <smurfdarosquinha@gmail.com>',
        subject,
        html: body,
    })
  };
}