import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Title } from 'components/Title';

const Contacts = () => {
  return (
    <div>
      <Title title="Add new contact" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
