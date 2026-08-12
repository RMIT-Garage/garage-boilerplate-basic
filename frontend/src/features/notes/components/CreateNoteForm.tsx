'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { createNote } from '@/features/notes/actions/notes.actions'

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  body: z.string().max(10_000),
})

type FormInput = z.infer<typeof schema>

export function CreateNoteForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormInput) => {
    const result = await createNote(data)

    if (result.success) {
      toast.success('Note created')
      reset()
    } else {
      toast.error(result.error ?? 'Failed to create note')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-lg border border-zinc-800 p-5"
    >
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          Title
        </label>

        <input
          id="title"
          type="text"
          placeholder="Note title"
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2"
          {...register('title')}
        />

        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="body" className="text-sm font-medium">
          Body
        </label>

        <textarea
          id="body"
          rows={4}
          placeholder="Write something..."
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2"
          {...register('body')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
      >
        {isSubmitting ? 'Creating...' : 'Create note'}
      </button>
    </form>
  )
}