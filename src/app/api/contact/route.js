import sendgrid from '@sendgrid/mail'
import { NextResponse } from 'next/server'

const SENDGRID_API_KEY_CONTACT = process.env.SENDGRID_API_KEY_CONTACT

sendgrid.setApiKey(SENDGRID_API_KEY_CONTACT)

export async function POST(req) {
  let passedValue = await new Response(req.body).text()
  let body = JSON.parse(passedValue)

  const message = `
    Name: ${body.name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Company: ${body.company}\r\n
    Message: ${body.message}\r\n
    Budget: ${body.budget}\r\n
    `

  const data = {
    to: 'agoyal@ricoretailmedia.com',
    from: 'contact@ricoretailmedia.com',
    subject: 'Website Contact Us Request',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  try {
    await sendgrid.send(data)
  } catch (error) {
    console.error(error)
    if (error.response) {
      console.error(error.response.body)
    }
  }
  return NextResponse.json(
    { message: 'ok' },
    {
      status: 200,
    },
  )
}
