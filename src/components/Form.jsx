import React, { useState } from 'react';

const Form = () => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });
    const [error, setError] = useState(false);


    const { artist, song } = search;

    const handleSearch = e => {

        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });

    }

    const searchLyric = e => {
        e.preventDefault();

        if (artist.trim() === '' || song.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

    }

    return (

        <div className="bg-info">
            <div className="container">

                {error
                    ? <p className="alert alert-danger text-center p-2">All fields are require.</p>
                    : null
                }
                
                <div className="row">

                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={searchLyric}
                    >
                        <fieldset>
                            <legend className="text-center">Browser Lyrics</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist name"
                                            onChange={handleSearch}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song name"
                                            onChange={handleSearch}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Form;