import PropTypes from 'prop-types';
import css from './Contact.module.css';

export function Contact({ contact, onDelItem }) {
  const { name, number } = contact;
  return (
    <div className={css.contact}>
      <p>
        {name} : {number}
      </p>
      <button className={css.btn} type="button" onClick={onDelItem}>
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelItem: PropTypes.func.isRequired,
};
