import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import { Member } from '@/models'

export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const active = searchParams.get('active')

    const filter: Record<string, unknown> = {}
    if (active !== null) filter.isActive = active === 'true'

    const members = await Member.find(filter)
      .sort({ joinedAt: 1 })
      .select('-__v -email')

    return NextResponse.json({ success: true, members })
  } catch (err) {
    console.error('Members GET error:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    const existing = await Member.findOne({ email: body.email })
    if (existing) {
      return NextResponse.json(
        { success: false, message: 'Member with this email already exists' },
        { status: 409 }
      )
    }

    const member = await Member.create(body)
    return NextResponse.json({ success: true, member }, { status: 201 })
  } catch (err) {
    console.error('Members POST error:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}
