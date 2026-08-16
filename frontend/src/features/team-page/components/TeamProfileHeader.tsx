'use client'

import { useState } from 'react'
import { CreateTeamProfileForm } from './CreateTeamProfileForm'

export function TeamProfileHeader() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Team Members
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Meet the team behind 78-Humanoid Robot Simulation in VXLab
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
        >
          + Add Member
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-900">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              ✕
            </button>

            <h2 className="mb-4 text-xl font-semibold">
              Add Team Member
            </h2>

            <CreateTeamProfileForm />
          </div>
        </div>
      )}
    </>
  )
}