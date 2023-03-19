import PropTypes from 'prop-types';
import { Label, Input, Span } from './Filter.styled';

const Filter = props => {
  const { value, OnFilterChange } = props;
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={OnFilterChange}
      />
    </Label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  OnFilterChange: PropTypes.func.isRequired,
};

export default Filter;
