import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      )
    }

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
    ]

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Only JPG, PNG and WEBP images are allowed' },
        { status: 400 }
      )
    }

    if (file.size > 4 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Image must be smaller than 4MB' },
        { status: 400 }
      )
    }

    const blob = await put(
      `teamprofiles/${file.name}`,
      file,
      {
        access: 'public',
        addRandomSuffix: true,
      }
    )

    return NextResponse.json({
      photoURL: blob.url,
    })
  } catch (error) {
    console.error('Blob upload failed:', error)

    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}