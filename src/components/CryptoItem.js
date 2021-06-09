function CryptoItem(props){
    const {crypto, onCryptoClick } = props;
    return (
        <div className="crypto-item">
            <img src={crypto.thumbnailUrl} className="img-crypto" alt="" onClick={()=>{onCryptoClick(crypto)}}/>
            <h4>{crypto.title}</h4>
      </div>
    );
}

export default CryptoItem;