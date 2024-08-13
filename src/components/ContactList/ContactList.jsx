import css from './ContactList.module.css';
import Contact from "../Contact/Contact.jsx";
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectNameFilter);

    const visibleContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filters.toLowerCase()),
    );

    return (
        <ul className={css.list}>
            {visibleContacts.map((contact => (
                <div key={contact.id} className={css['contact-list-item']}>
                    <Contact contact={contact} />
                </div>
            )))}
        </ul>
    )
}
