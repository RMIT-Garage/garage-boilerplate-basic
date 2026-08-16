import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { TeamProfileList } from '@/features/team-page/components/TeamProfileList'
import { TeamProfileHeader } from '@/features/team-page/components/TeamProfileHeader'

export const metadata: Metadata = { title: 'Team Members', }

export default async function TeamProfilesPage() {
  await requireAuth()

  return (
    <div className="space-y-6">
      <TeamProfileHeader />
      <TeamProfileList />
    </div>
  )
}