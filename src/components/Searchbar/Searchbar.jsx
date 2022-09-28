import { Component } from 'react';
import './Searchbar.css';

export default class Searchbar extends Component {

    state = {
        imageNameInput: ''
    };

    handleInput = event => {
        this.setState({ imageNameInput: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageNameInput.trim() === '') {
      alert("Поле не повинно бути пустим");
      return;
    }

    this.props.onSubmitSearchbar(this.state.imageNameInput);
    this.setState({ imageNameInput: '' });
  };

    render() {
        return (
            <header className='Searchbar'>

                <form
                    onSubmit={this.handleSubmit}
                    className='SearchForm'>

                    <button type="submit" className='SearchForm_button'>
                        <span className='SearchForm_button_label'>Search</span>
                    </button>
                    
                    <input
                        onChange={this.handleInput}
                        value={this.state.imageNameInput}
                        className='SearchForm_input'
                        type="text"
                        placeholder="Search images and photos"
                    />

                </form>

            </header>
        )
    }
}