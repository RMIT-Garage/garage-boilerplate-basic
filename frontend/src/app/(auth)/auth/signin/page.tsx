'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'

export default function SignInPage() {
  const router = useRouter()
  const { user, loading, signInWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (!loading && user) {
      router.replace('/team')
    }
  }, [loading, user, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('verification') === 'sent') {
      toast.success('Verification email sent. Verify your email, then sign in.')
    }
  }, [])

  if (loading) return <FullPageSpinner />

  const onSubmit = async (data: LoginInput) => {
    try {
      await signInWithEmail(data.email, data.password)
      toast.success('Signed in successfully')
      router.replace('/team')
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-not-verified')) {
        toast.error('Please verify your email before signing in.')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/team')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  return (
    <main className="fixed inset-0 overflow-y-auto bg-[#f8fbff] bg-[radial-gradient(circle_at_center,_#c7d7fe_1px,_transparent_1px)] [background-size:22px_22px] text-slate-950">
      <div className="flex min-h-full items-center justify-center px-4 py-10 sm:px-6 sm:py-14">
        <div className="w-full max-w-md">
          <header className="mb-6 text-center sm:mb-8">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              Team <span className="text-blue-500">40</span>
            </h1>
            <p className="mt-2 text-sm text-slate-500">Sign in to your workspace</p>
          </header>

          <section
            aria-label="Sign in form"
            className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/10 sm:p-8"
          >
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex min-h-11 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <svg className="size-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <div className="relative my-6" aria-hidden="true">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-slate-400">or sign in with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold tracking-wide text-slate-600 uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'login-form-error' : undefined}
                  className="min-h-11 w-full rounded-xl border border-slate-200 bg-blue-50/30 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 aria-invalid:border-red-400 aria-invalid:ring-red-100"
                  placeholder="you@example.com"
                  {...register('email')}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold tracking-wide text-slate-600 uppercase"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'login-form-error' : undefined}
                  className="min-h-11 w-full rounded-xl border border-slate-200 bg-blue-50/30 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 aria-invalid:border-red-400 aria-invalid:ring-red-100"
                  placeholder="••••••••"
                  {...register('password')}
                />
              </div>

              {(errors.email || errors.password) && (
                <div
                  id="login-form-error"
                  className="space-y-1 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700"
                  role="alert"
                >
                  {errors.email && <p>{errors.email.message}</p>}
                  {errors.password && <p>{errors.password.message}</p>}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="min-h-11 w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-600 hover:to-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <Link
                href="/auth/signup"
                className="font-semibold text-blue-600 hover:text-blue-700 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Create one
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
