import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import { Project } from '@/models'

export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const tag = searchParams.get('tag')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const filter: Record<string, unknown> = {}
    if (status) filter.status = status
    if (tag) filter.tags = { $in: [tag] }

    const total = await Project.countDocuments(filter)
    const projects = await Project.find(filter)
      .sort({ updatedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('members', 'name role avatar')

    return NextResponse.json({ success: true, total, page, projects })
  } catch (err) {
    console.error('Projects GET error:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    const existing = await Project.findOne({ slug: body.slug })
    if (existing) {
      return NextResponse.json(
        { success: false, message: 'Project with this slug already exists' },
        { status: 409 }
      )
    }

    const project = await Project.create(body)
    return NextResponse.json({ success: true, project }, { status: 201 })
  } catch (err) {
    console.error('Projects POST error:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}
