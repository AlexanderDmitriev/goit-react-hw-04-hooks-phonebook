import { nanoid } from 'nanoid';
import { ContactListItem, DeleteButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(data => (
        <ContactListItem key={nanoid()}>
          {data.name} - {data.number}
          <DeleteButton
            type="button"
            onClick={() => {
              onDeleteContact(data.id);
            }}
          >
            Delete
          </DeleteButton>
        </ContactListItem>
      ))}
    </ul>
  );
};
