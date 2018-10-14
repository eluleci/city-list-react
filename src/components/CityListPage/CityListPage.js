import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

import { getColumns, sortCities } from './TableUtil'

class CityListPage extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const { cities, match } = this.props;
    const { params } = match;

    // 'city' is the default column to sort
    const columnToSort = params.column || 'city';

    // get columns and add <Link/> as title
    const columns = getColumns().map(column => ({
      ...column,
      title: <Link to={`/${column.key}`}>{column.title}</Link>
    }));

    return (
      <Table
        pagination={false}
        columns={columns}
        dataSource={sortCities(cities, columnToSort)}
      />
    )
  }
}

/**
 * Gets the values from the redux store and passes as props to the component.
 * @param state
 */
const mapStateToProps = state => {
  return {
    cities: state.cities.list,
  }
}

export default connect(mapStateToProps)(CityListPage);
