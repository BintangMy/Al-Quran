export const masehiDate = () => {
  const dateObj = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = dateObj.toLocaleDateString("id-ID", options);

  return `${today}`;
};

export const hijriahDete = () => {
  const dateObj = new Date();
  const hijriDate = new Intl.DateTimeFormat("id-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateObj);

  return `${hijriDate}`;
};
