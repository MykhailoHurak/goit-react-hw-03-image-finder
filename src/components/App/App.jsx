import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery';

export default class App extends Component {

    state = {
        imageNameSubmit: '',
        imagesFromAPI: [],
        status: 'idle', // 'pending', 'resolved', 'rejected'
        pageNumber: 1,
        error: null,
    };

    async componentDidUpdate(_, prevState) {
        if (prevState.imageNameSubmit !== this.state.imageNameSubmit || prevState.pageNumber !== this.state.pageNumber) {
            try {
                this.setState({ status: 'pending' });
            
                const fetchResponse = await fetch(`https://pixabay.com/api/?q=${this.state.imageNameSubmit}&page=${this.state.pageNumber}&key=30230359-119840990de5f9a29673d5f1e&image_type=photo&orientation=horizontal&per_page=12`);
                const fetchResponseJson = await fetchResponse.json();
                const imagesList = fetchResponseJson.hits.map(({ id, tags, webformatURL, largeImageURL }) => ({ id, tags, webformatURL, largeImageURL }));

                if (imagesList.length === 0) {
                    this.setState({ status: 'rejected' });
                } else {
                    this.setState((state) => ({ imagesFromAPI: [...state.imagesFromAPI, ...imagesList], status: 'resolved' }));
                }
            } catch (error) {
                alert(error);
            }
        }
    }

    handleSubmitSearchbar = (imageNameSubmit) => {
        console.log(imageNameSubmit);
        this.setState({ imageNameSubmit: imageNameSubmit });
    };

    render() {
        
        return (
            <>
                <Searchbar
                    onSubmitSearchbar={this.handleSubmitSearchbar}
                />

                {this.state.status === 'resolved' && (
                    <ImageGallery
                        imagesFromAPI={this.state.imagesFromAPI}
                    />
                )}
            </>
        )
    }
}