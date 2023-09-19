import nodemailer from 'nodemailer';

export default class MailService {
  private transporter: nodemailer.Transporter;

  private static instance: MailService;

  private constructor() {
    this.createLocalConnection();
  }

  static async getInstance() {
    if (!MailService.instance) {
      MailService.instance = new MailService();
    }
    if (!this.instance.transporter) {
      await this.instance.createLocalConnection();
    }
    return MailService.instance;
  }

  async createLocalConnection() {
    const account = await nodemailer.createTestAccount();
    this.transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
  }

  async sendMail(options: {
    from?: string;
    to: string;
    subject: string;
    text: string;
    html: string;
  }) {
    const info = await this.transporter.sendMail({
      from: `"Fred Foo" ${options.from}`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
    console.log(`ethereal url: ${nodemailer.getTestMessageUrl(info)}`);
    return info;
  }
}
