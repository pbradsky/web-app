const getTodaysDate = () => {
  const today = new Date();
  return formatDate(today);
}

const formatDate = date =>
  `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

export { getTodaysDate, formatDate };