const userSearchOptions = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 0,
  keys: [
    'username',
    'fullName',
    'email',
    'phone'
  ],
};

const vehicleSearchOptions = {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 0,
  keys: [
    'vin',
    'make',
    'model',
    'status',
    'license'
  ],
}

export { userSearchOptions, vehicleSearchOptions };