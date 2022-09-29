import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const rootModal = document.querySelector('#root-modal');

class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleCloseModalEscape);
    };

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleCloseModalEscape);
    };

    handleCloseModalEscape = event => {
        if (event.code === 'Escape') {
            this.props.onCloseModal();
        }
    };

    handleCloseModalBackdrop = event => {
        console.log('Клікнули в Бекдроп');
        console.log('event.target', event.target);
        console.log('event.currentTarget', event.currentTarget);
        if (event.currentTarget === event.target) {
            this.props.onCloseModal();
        }
    };

    render() {
        
        return createPortal (
            <div className="Overlay" onClick={this.handleCloseModalBackdrop}>
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>,
            rootModal,
        );
    };
};

export default Modal;