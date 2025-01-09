import { type ZodSchema } from 'zod'

interface SuccessResponse<T> {
  data: T
  errorMessage: undefined
  status: number
  success: true
}

interface FailedResponse {
  data: null
  errorMessage: string
  status: number
  success: false
}

export const safeFetch = async <T>(
  schema: ZodSchema<T>,
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<SuccessResponse<T> | FailedResponse> => {
  const response = await fetch(input, init)

  if (response.ok) {
    const data: unknown = await response.json()

    const parsedData = schema.safeParse(data)

    if (!parsedData.success) {
      throw new Error(
        parsedData.error.errors
          .map((error) => `${String(error.path[1])}: ${error.message}`)
          .join(', '),
      )
    }

    return {
      data: data as T,
      errorMessage: undefined,
      status: response.status,
      success: true,
    }
  }

  return {
    data: null,
    errorMessage: response.statusText,
    status: response.status,
    success: false,
  }
}
