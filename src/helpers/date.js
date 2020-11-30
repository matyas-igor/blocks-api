export const parseDay = (value) => {
  return value ? new Date(`${value}T00:00:00.000+00:00`) : null
}
export const formatDay = (date) => {
  return date ? `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}` : null
}
export const validateDay = (value) => {
  return /^\d\d\d\d-\d\d-\d\d$/.test(value)
}
