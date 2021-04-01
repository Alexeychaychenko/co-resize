import React from 'react';
import Rnd from 'react-rnd';

const Box = () => (
  <div
    className="box"
    style={{ margin: 0, height: '100%', paddingBottom: '40px' }}
  >
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="image.png" draggable="false" alt="github avatar" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>ILYA</strong> <small>@ILYA</small> <small>GOOD!</small>
            <br />
            this is my sample resize javascript example.
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small" style={{color: 'red'}}><i className="fa fa-reply" /></span>
            </a>
            <a className="level-item">
              <span className="icon is-small" style={{color: 'red'}}><i className="fa fa-retweet" /></span>
            </a>
            <a className="level-item">
              <span className="icon is-small" style={{color: 'red'}}><i className="fa fa-heart" /></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
);


export default () => (
  <div
    style={{
      width: '800px',
      height: '400px',
    }}
  >
    <Rnd
      default={{
        x: 150,
        y: 205,
        width: 500,
        height: 190,
      }}
      minWidth={500}
      minHeight={190}
      bounds="parent"
    >
      <Box />
    </Rnd>
  </div>
);