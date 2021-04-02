import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Form from './components/Form';
import Lyric from './components/Lyric';

function App() {

  const [searchingLyric, setSearchingLyric] = useState({});
  const [lyric, setLyric] = useState('');

  useEffect(() => {

    if (Object.keys(searchingLyric).length === 0) return;

    const consultApiLyric = async () => {

      const { artist, song } = searchingLyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const resultLyric = await axios.get(url);

      setLyric(resultLyric.data.lyrics);

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
