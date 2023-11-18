import * as nodemailer from "nodemailer";

export const transporte = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: 'any@email',
        pass: 'any@pass'
    },
    tls: { rejectUnauthorized: false }
});