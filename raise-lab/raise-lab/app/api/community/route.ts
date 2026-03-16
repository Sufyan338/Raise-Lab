import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import { Application } from '@/models'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  university: z.string().min(2).max(200),
  researchInterests: z.array(z.string()).min(1),
  github: z.string().url().optional().or(z.literal('')),
  motivation: z.string().min(30).max(3000),
  cvUrl: z.string().url().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await connectDB()

    // Check for duplicate application
    const existing = await Application.findOne({ email: data.email })
    if (existing) {
      return NextResponse.json(
        { success: false, message: 'An application with this email already exists.' },
        { status: 409 }
      )
    }

    const application = await Application.create(data)

    return NextResponse.json(
      { success: true, id: application._id.toString() },
      { status: 201 }
    )
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.flatten() },
        { status: 400 }
      )
    }
    console.error('Community API error:', err)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const status = searchParams.get('status')

    const filter = status ? { status } : {}
    const total = await Application.countDocuments(filter)
    const applications = await Application.find(filter)
      .sort({ submittedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .select('-__v')

    return NextResponse.json({ success: true, total, page, applications })
  } catch (err) {
    console.error('Community GET error:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}
