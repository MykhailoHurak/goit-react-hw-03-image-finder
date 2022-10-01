import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Loader from 'components/Loader';

export default class App extends Component {

    state = {
        imageNameSubmit: '',
        imagesFromAPI: [],
        largeImage: '',
        status: 'idle', // 'pending', 'resolved', 'rejected'
        pageNumber: 1,
        error: null,
        showModal: false,
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
                    console.log([...this.state.imagesFromAPI])
                    this.setState((state) => ({ imagesFromAPI: [...imagesList], status: 'resolved' }));
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

    handleClickGalleryItem = img => {
        this.setState({
            largeImage: img,
            showModal: true,
        });
    };

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal, largeImage: '' })
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
                        onImageClick={this.handleClickGalleryItem}
                    />
                )}
                    {this.state.showModal && (
                    <Modal onCloseModal={this.toggleModal}>
                        <img src={this.state.largeImage} alt="" />
                    </Modal>
                )}
                {this.state.status === 'pending' && <Loader />}
            </>
        )
    }
}