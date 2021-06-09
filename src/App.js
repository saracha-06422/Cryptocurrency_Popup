import './App.css';
import CryptoItem from './components/CryptoItem';
import cryptos from './data/Cryptos';
import { useState } from 'react'
import CryptoPost from './components/CryptoPost';
import AppSearch from './components/AppSearch';

function App() {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [searchText, setSearchText] = useState('');

  const filterCryptos = cryptos.filter((crypto) => {
    return crypto.title.includes(searchText)
  })

  const cryptoElements = filterCryptos.map((crypto, index)=>{
    return <CryptoItem key={index} crypto = {crypto} onCryptoClick ={onCryptoOpenClick}/>
  })

  const appSearch = <AppSearch value={searchText} onValueChange={setSearchText} />

  function onCryptoOpenClick(theCrypto) {
    setSelectedCrypto(theCrypto)
  }

  function onCryptoClose (){
    setSelectedCrypto(null)
  }

  let cryptoPost = null;
  if(!!selectedCrypto) {
    cryptoPost = <CryptoPost crypto={selectedCrypto} onPostClose ={onCryptoClose}/>
  }

  return (
    <div className="app">
      <header className="app-header">
        Cryptocurrency
      </header>
      <section className="app-section">
        <div className="app-container">
          {appSearch}
          <div className="app-grid">
            {cryptoElements}
          </div>
          {cryptoPost}
        </div>
      </section>
    </div>
  );
}

export default App;
