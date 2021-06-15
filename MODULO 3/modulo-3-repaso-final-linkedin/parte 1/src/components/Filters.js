import React from 'react';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterByCities from './FilterByCities';

const Filters = props => {
  return (
    <section>
      <form>
        <FilterByName />
        <FilterByGender />
        <FilterByCities />
      </form>
    </section>
  );
};

export default Filters;
