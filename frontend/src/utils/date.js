const getTodaysDate = () => {
  const d = new Date();
  return d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
}

export default getTodaysDate;