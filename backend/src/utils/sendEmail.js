const nodeMailer = require('nodemailer');

module.exports = {
   send(props) {
        const account = nodeMailer.createTransport({
            service: 'Gmail',
            auth: {
                user: '',
                pass: '',
            }
        });

        account.sendMail({
            from: 'Jocimar <carossomeister@gmail.com>',
            to: props.email,
            subject: 'Dados Login',
            html: `<strong>Olá ${props.name}!</strong><p> Segue seu ID: ${props.id}, para ter acesso ao sistema.</p>`
        }, (err) => {
            if (err) {
                throw erro;
            }
            console.log('Envio com sucesso')
        });
    }
}