'use server'

import { z } from 'zod'
import { adminDb } from '@/lib/firebase/admin'
import { requireAuth } from '@/actions/auth.actions'
import { Timestamp } from 'firebase-admin/firestore'
import type { ActionResult } from '@/types'

const createTeamProfileSchema = z.object({
  displayName: z.string().min(1).max(200),
  photoURL: z.string().nullable(),
  blurb: z.string().max(10_000),
  role: z.string().min(1).max(10)
})

export async function createTeamProfile(input: unknown): Promise<ActionResult<string>> {
  const session = await requireAuth()

  const parsed = createTeamProfileSchema.safeParse(input)
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0]?.message ?? 'Invalid input' }
  }

  try {
    const now = Timestamp.now()
    const ref = await adminDb.collection('teamprofiles').add({
      ...parsed.data,
      uid: session.uid,
      createdAt: now,
      updatedAt: now,
      _schemaVersion: 1,
    })
    return { success: true, data: ref.id }
  } catch {
    return { success: false, error: 'Failed to create note' }
  }
}