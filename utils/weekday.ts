export const weekday = (date: string) => {
  const myDateParts = date.split('/')
  // @ts-ignore
  const myNewDate = new Date(myDateParts[2], myDateParts[1], myDateParts[0])
  const dayIndex = myNewDate.getUTCDay()
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  return days[dayIndex]
}
