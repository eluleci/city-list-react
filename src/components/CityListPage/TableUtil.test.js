import { getColumns, sortCities } from './TableUtil'
import { cityList } from '../../reducers/cities'

describe('TableUtil', () => {

  it('returns correct number of columns', () => {
    const columns = getColumns();
    expect(columns.length).toBe(9);
  });

  it('sorts list based on a string field', () => {
    const cities = sortCities(cityList, 'city');
    expect(cities.length).toBe(31);
    expect(cities[0].city).toBe('Atlanta');
    expect(cities[cities.length - 1].city).toBe('Tokyo');
  });

  it('sorts list based on a number field', () => {
    const cities = sortCities(cityList, 'allBuildings');
    expect(cities.length).toBe(31);
    expect(cities[0].city).toBe('Nanjing');
    expect(cities[cities.length - 1].city).toBe('New York City');
  });
})