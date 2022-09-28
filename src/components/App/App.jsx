import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';

export default class App extends Component {

    state = {
        imageNameSubmit: '',
        status: 'idle', // 'pending', 'resolved', 'rejected'
    };

    componentDidUpdate(_, prevState) {
        if (prevState.imageNameSubmit !== this.state.imageNameSubmit) {

            this.setState({ status: 'pending' }); // loading: true, pokemon: null

            setTimeout(() => {
                fetch(`https://pixabay.com/api/?q=${this.state.imageNameSubmit}&page=1&key=30230359-119840990de5f9a29673d5f1e&image_type=photo&orientation=horizontal&per_page=12`)
                    .then(response => response.json())
                    .then(console.log)
                    // .then(() => this.setState({ request, status: 'resolved' }))
                    // .catch(error => this.setState({ error, status: 'rejected' }))
            }, 3000);
        }
    }

    handleSubmitSearchbar = (imageNameSubmit) => {
        console.log(imageNameSubmit);
        this.setState({ imageNameSubmit: imageNameSubmit });
    };

    render() {
        
        return (
            <Searchbar
                onSubmitSearchbar={this.handleSubmitSearchbar}
            />
        )
    }
}