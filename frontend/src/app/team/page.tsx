'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'
import { useAuth } from '@/hooks/useAuth'

const members = [
  {
    initials: 'JL',
    name: 'Jianqi Lu',
    role: 'PM',
    blurb: 'Drives the product roadmap and aligns the team around priorities that matter most.',
    photo: '/team/Lu.jpg',
    avatarClass: 'border-blue-100 bg-blue-50 text-blue-500',
    roleClass: 'bg-blue-50 text-blue-600',
  },
  {
    initials: 'CH',
    name: 'Chan Hoang Truong',
    role: 'DEV',
    blurb: 'Builds robust, scalable solutions and keeps the codebase clean and maintainable.',
    photo: '/team/chan.jpg',
    avatarClass: 'border-violet-100 bg-violet-50 text-violet-500',
    roleClass: 'bg-violet-50 text-violet-600',
  },
  {
    initials: 'FJ',
    name: 'Faridullah Jabbar Khil',
    role: 'UX',
    blurb:
      'Shapes the user experience from research to final interaction, ensuring every flow feels intuitive.',
    photo: '/team/faridullah.png',
    avatarClass: 'border-cyan-100 bg-cyan-50 text-cyan-500',
    roleClass: 'bg-cyan-50 text-cyan-600',
  },
  {
    initials: 'SS',
    name: 'Shakthijhaa Sivagnanam',
    role: 'BA',
    blurb:
      'Bridges business needs and technical delivery by translating requirements into clear, actionable specs.',
    photo: '/team/Z.png',
    avatarClass: 'border-emerald-100 bg-emerald-50 text-emerald-500',
    roleClass: 'bg-emerald-50 text-emerald-600',
  },
]

export default function TeamPage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth/signin')
    }
  }, [loading, router, user])

  if (loading || !user) {
    return <FullPageSpinner />
  }

  return (
    <main className="min-h-screen bg-white bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.22)_1px,transparent_0)] [background-size:18px_18px]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <p className="font-serif text-lg font-bold text-slate-900">
          Team <span className="text-blue-500">40</span>
        </p>

        <section className="flex flex-1 flex-col items-center justify-center py-12 text-center">
          <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wide text-blue-500 uppercase">
            Sprint Team
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold text-slate-900 md:text-5xl">
            Meet <span className="text-blue-500">Team 40</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
            Four specialists. One shared goal. Built to move fast, ship with quality, and make every
            sprint count.
          </p>

          <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-slate-100 bg-white/90 p-6 text-left shadow-sm shadow-blue-100/60"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <Image
                    src={member.photo}
                    alt={`${member.name} profile photo`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                <h2 className="mt-5 text-base font-bold text-slate-900">{member.name}</h2>

                <span
                  className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${member.roleClass}`}
                >
                  {member.role}
                </span>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-500">
                  {member.blurb}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
