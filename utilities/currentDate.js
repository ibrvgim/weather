export function getCurrentDateTime() {
  const now = new Date();

  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  const formattedDate = dateFormatter.format(now);

  const dayFormatter = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
  });
  const dayOfWeek = dayFormatter.format(now);

  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const formattedTime = timeFormatter.format(now);

  return { formattedDate, dayOfWeek, formattedTime };
}
