import '../css/CryptoPost.css'

function CryptoPost(props){
    const { crypto,onPostClose } = props;
    return (
        <div className="crypto-post">
            <div className="crypto-post-bg" onClick={onPostClose}>
                <div className="crypto-post-content">
                    <img src={crypto.thumbnailUrl} alt=""/>
                    <h4>{crypto.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default CryptoPost;