export const parseDay = (value?: string | null): Date | null => {
  return value ? new Date(`${value}T00:00:00.000+00:00`) : null
}

export const formatDay = (date?: Date | null): string | null => {
  return date ? `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}` : null
}

export const validateDay = (value?: string | null): boolean => {
  return /^\d{4}-\d{2}-\d{2}$/.test(`${value}`)
}
