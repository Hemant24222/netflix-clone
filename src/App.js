import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title = "TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title = "TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
