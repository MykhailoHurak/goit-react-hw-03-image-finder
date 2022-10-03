import './ButtonLoadMore.css';

function ButtonLoadMore({ loadMore }) {
    return (
        <div className='ButtonLoadMore__Box'>
            <button
                className='ButtonLoadMore'
                type="button"
                onClick={loadMore}
            >
                Load more
            </button>
        </div>
    )
};

export default ButtonLoadMore;