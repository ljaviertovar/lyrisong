import React, { Fragment } from 'react';

const Lyric = ({ lyric }) => {

    if (lyric.length === 0) return null;

    return (
        <Fragment>
            <h2>Lyric</h2>
            <p className="letra">{lyric}</p>
        </Fragment>
    );
};

export default Lyric;