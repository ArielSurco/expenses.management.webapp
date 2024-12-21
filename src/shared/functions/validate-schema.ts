import { type z } from 'zod'

export const validateSchema = <T>(schema: z.ZodSchema<T>, data: unknown): T | null => {
  const result = schema.safeParse(data)

  if (!result.success) {
    return null
  }

  return result.data
}
