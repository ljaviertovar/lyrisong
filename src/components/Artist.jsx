import React, { Fragment } from 'react';

const Lyric = ({ artistInfo }) => {

    if (Object.keys(artistInfo).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyEN } = artistInfo;

    return (
        <Fragment>
            <div className="card border-light">
                <div className="card-header bg-primary text-light font-weight-bold">
                    Artist Bio
                </div>
                <div className="card-body">
                    <img src={strArtistThumb} alt="Artist img" />
                    <p className="card-text"> Genre: {strGenre}</p>
                    <h2 className="card-text">Biography:</h2>
                    <p className="card-text">{strBiographyEN}</p>
                    <p className="card-text">
                        <a href={`https://${artistInfo.strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${artistInfo.strTwitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`${artistInfo.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default Lyric;