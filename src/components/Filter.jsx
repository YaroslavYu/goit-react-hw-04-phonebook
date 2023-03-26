import { StyledFilter } from './phonebook.styled';

export function Filter({ filter }) {
  return (
    <label>
      Filter
      <StyledFilter type="text" name="filter" onChange={filter} />
    </label>
  );
}
