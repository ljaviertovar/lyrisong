import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Form from './components/Form';

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
    </Fragment>
  );
}

export default App;
