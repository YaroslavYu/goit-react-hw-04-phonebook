import { StyledListItem } from './phonebook.styled';

export function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }, idx) => {
        return (
          <StyledListItem key={id}>
            <span>
              {name} - {number}
            </span>

            <button type="button" onClick={() => onDelete(idx)}>
              Delete
            </button>
          </StyledListItem>
        );
      })}
    </ul>
  );
}
