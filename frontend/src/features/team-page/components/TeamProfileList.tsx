'use client'

import { where } from 'firebase/firestore'
import { useCollection } from '@/hooks/useFirestore'
import { useAuth } from '@/hooks/useAuth'
import { getTeamProfilesCollection } from '@/lib/firebase/firestore'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { EmptyState } from '@/components/shared/EmptyState'

export function TeamProfileList() {
  const { user } = useAuth()

  if (!user) {
    return <LoadingSpinner />
  }

  return <TeamProfileListContent uid={user.uid} />
}

function TeamProfileListContent({ uid }: { uid: string }) {
  const { data: profiles, loading } = useCollection(
    getTeamProfilesCollection(),
  )


  if (loading) return <LoadingSpinner />

  if (profiles.length === 0) {
    return <EmptyState title="No Team Profiles yet" />
  }

   return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {profiles.map((profile) => {
        const initials =
          profile.displayName
            ?.split(' ')
            .map((word) => word[0])
            .join('')
            .slice(0, 2)
            .toUpperCase() ?? 'TM'

        return (
          <li
            key={profile.id}
            className="flex items-start gap-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <img
              src={profile.photoURL || '/teamprofiles/default_profile_pic.jpg'}
              alt={profile.displayName ?? 'Team member'}
              className="h-16 w-16 shrink-0 rounded-full object-cover"
            />

            <div className="min-w-0">
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {profile.displayName}
              </h3>

              <p className="text-sm font-medium text-indigo-600">
                {profile.role}
              </p>

              <p className="mt-1 text-sm leading-5 text-zinc-500">
                {profile.blurb}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}