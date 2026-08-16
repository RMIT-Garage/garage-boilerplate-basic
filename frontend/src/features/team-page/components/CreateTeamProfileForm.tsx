'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

import { createTeamProfile } from '@/features/team-page/actions/teamprofiles.actions'
import { useAuth } from '@/hooks/useAuth'




const createTeamProfileFormSchema = z.object({
  displayName: z.string().min(1, 'Display name is required').max(200),
  blurb: z.string().max(10_000),
  role: z.string().min(1, 'Role is required').max(10),
})

type CreateTeamProfileFormInput = z.infer<
  typeof createTeamProfileFormSchema
>

export function CreateTeamProfileForm() {
  const { user } = useAuth()
  
  const [photo, setPhoto] = useState<File | null>(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateTeamProfileFormInput>({
    resolver: zodResolver(createTeamProfileFormSchema),
  })

   const onSubmit = async (data: CreateTeamProfileFormInput) => {
  if (!user) {
    toast.error('You must be logged in')
    return
  }

  try {
    let photoURL: string | null = null

    if (photo) {
      const formData = new FormData()
      formData.append('file', photo)

      const response = await fetch('/api/teamprofile/upload', {
        method: 'POST',
        body: formData,
      })

      const uploadResult = await response.json()

      if (!response.ok) {
        throw new Error(
          uploadResult.error ?? 'Failed to upload image'
        )
      }

      photoURL = uploadResult.photoURL
    }

    const result = await createTeamProfile({
      ...data,
      photoURL,
    })

    if (result.success) {
      toast.success('Team Profile created')
      reset()
      setPhoto(null)
    } else {
      toast.error(result.error ?? 'Failed to create Team Profile')
    }
  } catch (error) {
    console.error(error)

    toast.error(
      error instanceof Error
        ? error.message
        : 'Failed to create Team Profile'
    )
  }
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 rounded-lg border p-4"
    >
      {/* Display Name */}
      <div className="space-y-1.5">
        <label htmlFor="displayName" className="text-sm font-medium">
          Display Name
        </label>

        <input
          id="displayName"
          type="text"
          placeholder="Display Name"
          aria-invalid={!!errors.displayName}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:outline-none aria-invalid:border-red-500 dark:border-zinc-700 dark:bg-zinc-900"
          {...register('displayName')}
        />

        {errors.displayName && (
          <p className="text-xs text-red-500" role="alert">
            {errors.displayName.message}
          </p>
        )}
      </div>

     {/* Photo */}
      <div className="space-y-1.5">
        <label htmlFor="photo" className="text-sm font-medium">
          Profile Photo
        </label>

        <input
          id="photo"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={(event) => {
            const file = event.target.files?.[0]

            if (file) {
              setPhoto(file)
            }
          }}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm"
        />
      </div>


      {/* Role */}
      <div className="space-y-1.5">
        <label htmlFor="role" className="text-sm font-medium">
          Role
        </label>

        <select
          id="role"
          {...register('role')}
          aria-invalid={!!errors.role}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm"
        >
          <option value="">Select a role</option>

          <option value="DEV">Developer</option>
          <option value="UX">UX Designer</option>
          <option value="PM">Project Manager</option>
          <option value="BA">BA</option>
        </select>

        {errors.role && (
          <p className="text-xs text-red-500">
            {errors.role.message}
          </p>
        )}
      </div>

      {/* Blurb */}
      <div className="space-y-1.5">
        <label htmlFor="blurb" className="text-sm font-medium">
          Blurb
        </label>

        <textarea
          id="blurb"
          rows={3}
          placeholder="Write something about this team member..."
          aria-invalid={!!errors.blurb}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:outline-none aria-invalid:border-red-500 dark:border-zinc-700 dark:bg-zinc-900"
          {...register('blurb')}
        />

        {errors.blurb && (
          <p className="text-xs text-red-500" role="alert">
            {errors.blurb.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        {isSubmitting ? 'Saving…' : 'Add Team Profile'}
      </button>
    </form>
  )
}