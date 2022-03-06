export function getDateData(time) {
  const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const moment = new Date(time),
    year = moment.getFullYear().toString(),
    month = monthName[moment.getMonth()],
    date = ("0" + moment.getDate()).slice(-2),
    day = dayName[moment.getDay()],
    hours = ("0" + moment.getHours()).slice(-2),
    minutes = ("0" + moment.getMinutes()).slice(-2)

  return {
      year: year,
      month: month,
      date: date,
      day: day,
      hours: hours,
      minutes: minutes
  };
} 