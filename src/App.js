import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Form from './components/Form';
import Lyric from './components/Lyric';
import Artist from './components/Artist';

function App() {

  const [searchingLyric, setSearchingLyric] = useState({});
  const [lyric, setLyric] = useState('');
  const [artistInfo, setArtistInfo] = useState({});

  useEffect(() => {

    if (Object.keys(searchingLyric).length === 0) return;

    const consultApiLyric = async () => {

      const { artist, song } = searchingLyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [resultLyric, resultArtist] = await Promise.all([
        axios.get(url),
        axios.get(url2),
      ]);

      setLyric(resultLyric.data.lyrics);
      setArtistInfo(resultArtist.data.artists[0]);

    }

    consultApiLyric();

  }, [searchingLyric]);

  return (
    <Fragment>
      <Form
        setSearchingLyric={setSearchingLyric}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artist
              artistInfo={artistInfo}
            />
          </div>
          <div className="col-md-6">
            <Lyric
              lyric={lyric}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
