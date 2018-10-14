export const getColumns = () => [{
  title: 'City',
  dataIndex: 'city',
  key: 'city',
  width: 200,
}, {
  title: 'Country',
  dataIndex: 'country',
  key: 'country',
  width: 200,
}, {
  title: 'All Buildings',
  dataIndex: 'allBuildings',
  key: 'allBuildings',
  width: 120,
}, {
  title: '100m+',
  dataIndex: '100m+',
  key: '100m+',
  width: 120,
}, {
  title: '150m+',
  dataIndex: '150m+',
  key: '150m+',
  width: 120,
}, {
  title: '200m+',
  dataIndex: '200m+',
  key: '200m+',
  width: 120,
}, {
  title: '300m+',
  dataIndex: '300m+',
  key: '300m+',
  width: 120,
}, {
  title: 'Telecom Towers',
  dataIndex: 'telecomTowers',
  key: 'telecomTowers',
  width: 120,
}, {
  title: 'All Structures',
  dataIndex: 'allStructures',
  key: 'allStructures',
  width: 120,
}];

export const sortCities = (cities = [], column) => {
  if (!column) {
    return cities;
  }

  cities.sort((a, b) => {
    if (typeof a[column] === 'string' && typeof b[column] === 'string') {
      return a[column].localeCompare(b[column])
    } else if (typeof a[column] === 'number' && typeof b[column] === 'number') {
      return a[column]- b[column]
    }
    return 0;
  });
  return cities;
}
