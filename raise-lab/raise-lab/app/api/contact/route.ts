import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import { ContactMessage } from '@/models'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(5000),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await connectDB()

    const msg = await ContactMessage.create(data)

    return NextResponse.json(
      { success: true, id: msg._id.toString() },
      { status: 201 }
    )
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.flatten() },
        { status: 400 }
      )
    }
    console.error('Contact API error:', err)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API — POST to submit' })
}
