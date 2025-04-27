import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    MODE: z.enum(['development', 'production', 'test']),
    API_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_MODE: z.enum(['development', 'production', 'test']),
    NEXT_PUBLIC_API_URL: z.string().url(),
  },

  runtimeEnv: {
    MODE: process.env.MODE,
    NEXT_PUBLIC_MODE: process.env.NEXT_PUBLIC_MODE,
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
