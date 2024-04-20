import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/serachbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const apiKey = '42409060-380322e351fb08456a6a2d09f';
  const [query, setQuery] = useState(''); //wporwadzane słowo w wyszukiwarke, na początku jest to pusty string

  const handleChange = event => {
    setQuery(event.target.value);
  };
  //Po uzyskaniu tej wartości, funkcja aktualizuje stan komponentu poprzez setQuery(event.target.value), gdzie setQuery jest funkcją ustawiającą nową wartość stanu query. Dzięki temu, kiedy użytkownik wpisuje tekst w polu wyszukiwania, wartość jest przechowywana w stanie komponentu i może być wykorzystana do dalszej obsługi, na przykład do wysłania żądania wyszukiwania do serwera API.

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      onSubmit(response.data.hits);
    } catch (error) {
      return error;
    }
    setQuery('');
  };
  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    </>
  );
};
