export function useExtractNumber() {
  const getNumberBeforeLastSlash = (input: string): number | null => {
    if (typeof input !== 'string') return null

    const trimmed = input.replace(/\/+$/, '') // Remove trailing slash(es)
    const segments = trimmed.split('/')
    const last = segments[segments.length - 1]
    const num = parseInt(last, 10)
    return isNaN(num) ? null : num
  }

  return { getNumberBeforeLastSlash }
}
