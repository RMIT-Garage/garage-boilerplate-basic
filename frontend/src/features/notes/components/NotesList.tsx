'use client'

import { useMemo } from 'react'
import { where } from 'firebase/firestore'
import { useCollection } from '@/hooks/useFirestore'
import { useAuth } from '@/hooks/useAuth'
import { getNotesCollection } from '@/lib/firebase/firestore'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { EmptyState } from '@/components/shared/EmptyState'

export function NotesList() {
  const { user } = useAuth()

  if (!user) {
    return <LoadingSpinner />
  }

  return <UserNotesList userId={user.uid} />
}

function UserNotesList({ userId }: { userId: string }) {
  const notesCollection = useMemo(() => getNotesCollection(), [])

  const ownerConstraint = useMemo(
    () => where('uid', '==', userId),
    [userId]
  )

  const { data: notes, loading, error } = useCollection(
    notesCollection,
    ownerConstraint
  )

  if (loading) return <LoadingSpinner />

  if (error) {
    return (
      <p className="text-sm text-red-500">
        Failed to load notes: {error.message}
      </p>
    )
  }

  if (notes.length === 0) {
    return <EmptyState title="No notes yet" />
  }

  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <li key={note.id} className="rounded-lg border p-4">
          <h3 className="font-medium">{note.title}</h3>
          <p className="text-sm text-zinc-500">{note.body}</p>
        </li>
      ))}
    </ul>
  )
}