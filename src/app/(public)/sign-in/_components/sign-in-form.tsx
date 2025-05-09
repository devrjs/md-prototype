'use client'

import { Icons } from '@/components/global/icons'
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
import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { signInWithEmailAndPassword } from '../_actions/sign-in-with-password'

export default function SignInForm() {
  const router = useRouter()

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword
  )

  useEffect(() => {
    if (success) {
      console.log('success')
      router.push('/dashboard')
    }
  }, [success, router])

  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Entrar</CardTitle>
        <CardDescription>
          Digite seu email abaixo para acessar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {success === false && message && (
            <Alert variant="destructive">
              <AlertTriangle className="size-4" />
              <AlertTitle>Falha no login!</AlertTitle>
              <AlertDescription>
                <p>{message}</p>
              </AlertDescription>
            </Alert>
          )}

          <Button variant="outline" className="w-full">
            <Icons.google className="mr-2 h-4 w-4" />
            Entrar com Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              placeholder="m@exemplo.com"
              defaultValue="user@example.com"
            />
            {errors?.email && (
              <p className="font-medium text-red-500 text-xs dark:text-red-400">
                {errors.email[0]}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <label htmlFor="password">Senha</label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Esqueceu sua senha?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              defaultValue="string"
            />
            {errors?.password && (
              <p className="font-medium text-red-500 text-xs dark:text-red-400">
                {errors.password[0]}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <Loader2 className="size-4 animate-spin" /> : 'Entrar'}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            Não possui uma conta?{' '}
            <Link
              href="/register"
              className="font-medium text-primary transition-colors hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
