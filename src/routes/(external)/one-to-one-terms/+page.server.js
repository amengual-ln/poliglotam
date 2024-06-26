import { GOOGLE_EMAIL } from "$env/static/private"
import transporter from "$lib/emailSetup.js"

export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData()
      const studentName = formData.get("student-name")

      let html = `${studentName} has succesfully accepted the terms for one to one courses`

      const message = {
        from: GOOGLE_EMAIL,
        to: "madrid.poliglotam@gmail.com",
        subject: `Poliglotam - ${studentName} accepted the terms`,
        text: `${studentName} has succesfully accepted the terms for the one to one courses`,
        html: html
      }

      const sendEmail = async (message) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(message, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          })
        })
      }

      await sendEmail(message)

      return {
        success: "Email sent"
      }
    } catch (error) {
      console.error(error)
    }
  }
}