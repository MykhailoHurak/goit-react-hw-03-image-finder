import React from 'react';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends React.Component {
    // state = {};

    render() {
        return (
            // <div>Searchbar</div>

            <header className={css.Searchbar}>
                <form className={css.SearchForm}>
                    <button type="submit" className={css.SearchForm_button}>
                        <span className={css.SearchForm_button_label}>Search</span>
                    </button>
                    
                    <input
                        className={css.SearchForm_input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;