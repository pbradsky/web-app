const formatAddress = addressData => {
  const { address, apt, city, state, zip } = addressData;
  if (!address)
    return null;

  const streetAddress = apt ? `${address}, ${apt}` : address;
  return `${streetAddress}, ${city}, ${state} ${zip}`;
}

export default formatAddress;