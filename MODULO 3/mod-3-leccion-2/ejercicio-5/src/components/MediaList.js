import React from 'react';
import MediaCard from './MediaCard';

class MediaList extends React.Component {
  render() {
    return (
      <section>
        <h1>Mi Lista de MediaCard</h1>
        <ul>
          <li>
            <MediaCard name='Patricia Vaquero' date='Lunes 31 de mayo de 2021'
              content='Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...' />
          </li>
          <li>
            <MediaCard name='Patricia Vaquero' date='Lunes 31 de mayo de 2021'
              content='Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...' />
          </li>
          <li>
            <MediaCard name='Patricia Vaquero' date='Lunes 31 de mayo de 2021'
              content='Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...' />
          </li>
        </ul>
      </section>

    );
  }
}

export default MediaList;