import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
})

if (!_env.success) {
  console.error('❌ Invalid environment variables')
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
