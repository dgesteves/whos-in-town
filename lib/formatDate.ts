export function formatDate(datetime: string, locale: string): string {
  return new Date(datetime).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
