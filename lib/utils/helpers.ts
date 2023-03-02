export const toReadableDate = (date: string): string => {
  return new Date(date).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
};

export const setCookieExpiresInXHours = (hours: number): string => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = ";expires=" + date.toUTCString();
  return expires;
};
