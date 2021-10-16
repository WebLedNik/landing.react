const express = require('express')
const app = express()
const server = require('http').createServer(app)
const jsonParser = require('body-parser').json()
const config = require('./server.config.json')
const path = require("path");
const nodemailer = require("nodemailer")

const PORT = config.port

app.use(jsonParser)

class RequsetSendMail {
    constructor(data) {
        this.name = data.name
        this.email = data.email
        this.phone = data.phone || "не указан"
        this.text = data.text
    }
}

app.post('/api/v1/send-mail', async (req, res) => {
    try {
        let message = new RequsetSendMail(req.body)

        let transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true,
            auth: {
                user: config.yandex_mail.user,
                pass: config.yandex_mail.pass
            }
        });

        let mail = {
            subject: `Письмо от ${message.name}`,
            html: `<div style="background:#f9f9f9;margin:0;padding:0"><div style="background-color:#f9f9f9">
  <div style="border-radius:4px;margin:0 auto 0 auto;max-width:640px;overflow:hidden">
    <div style="background:#ffffff;margin:0px auto 0px auto;max-width:640px">
      <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="background:#ffffff;border-collapse:collapse;font-size:0px;width:100%">
        <tbody>
          <tr>
            <td
              style="border-collapse:collapse;direction:ltr;font-size:0px;padding:40px 50px 40px 50px;text-align:center;vertical-align:top">
              <div
                style="direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%">
                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                  style="border-collapse:collapse">
                  <tbody>
                    <tr>
                      <td align="left"
                        style="border-collapse:collapse;font-size:0px;padding:0px;word-break:break-word">
                        <div
                          style="color:#737f8d;font-family:'roboto', sans-serif;font-size:16px;line-height:24px;text-align:left">
                            <p style="display:block;margin:13px 0 13px 0;color:#4f545c;font-weight:600">Имя: ${message.name}</p>
                            <p style="display:block;margin:13px 0 13px 0;color:#4f545c;font-weight:600">Почта: ${message.email}</p>
                            <p style="display:block;margin:13px 0 13px 0;color:#4f545c;font-weight:600">Телефон: ${message.phone}</p>
                            <p style="display:block;">${message.text}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div></div>`
        }

        await transporter.sendMail({
            from: config.yandex_mail.user,
            to: config.yandex_mail.user,
            subject: mail.subject,
            html: mail.html
        });

        res.status(200).end()
    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
})

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(PORT, () => console.log(`Server start on ${PORT}`))