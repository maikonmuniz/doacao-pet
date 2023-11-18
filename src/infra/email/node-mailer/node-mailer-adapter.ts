import { EnvioEmailContratoProvider } from "../../../shared/application/provider/email/envio-email";
import { transporte } from "./node-mailer-config";

export class Email implements EnvioEmailContratoProvider {

    constructor(
        readonly para?: string,
        readonly assunto?: string,
        readonly mensagem?: string
    ) { }

    async enviarEmail(): Promise<boolean> {

        const opcoesEmail = {
            from: "enviando para ",
            to: this.para,
            subject: this.assunto,
            html: `<h1>${this.mensagem}</h1>`
        };

        transporte.sendMail(opcoesEmail, function (error, info) {
            if (error) {
                return false
            }
            return true
        });
    }
}