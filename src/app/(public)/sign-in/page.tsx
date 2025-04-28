'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useFormState } from '@/hooks/use-form-state'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from './_actions/sign-in'

export default function SignIn() {
  const router = useRouter()

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword
  )

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {success === false && message && (
            <Alert variant="destructive">
              <AlertTriangle className="size-4" />
              <AlertTitle>Login failed!</AlertTitle>
              <AlertDescription>
                <p>{message}</p>
              </AlertDescription>
            </Alert>
          )}

          <Button variant="outline" className="w-full">
            <Icons.google className="w-4 h-4 mr-2" />
            Login with Google
          </Button>
          <Button variant="outline" className="w-full">
            <Icons.github className="w-4 h-4 mr-2" />
            Login with GitHub
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              defaultValue="user@example.com"
            />
            {errors?.email && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.email[0]}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <label htmlFor="password">Password</label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              defaultValue="string"
            />
            {errors?.password && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.password[0]}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            {isPending ? <Loader2 className="size-4 animate-spin" /> : 'Login'}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
