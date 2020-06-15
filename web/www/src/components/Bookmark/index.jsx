import React from 'react';
import styles from './Bookmark.module.css';
import { useObserver } from 'mobx-react-lite';
import Button from '../Button/index.jsx';

const Bookmark = ({bookmark}) => {

    const imgName = bookmark.name.split(' ').join('');

    return useObserver(() => (
      <>
        <article className={styles.bookmark}>
          <div className={styles.bookmark__info}>
            <h3 className={styles.bookmark__name}>{bookmark.name}</h3>
            <p className={styles.bookmark__date}>
              {bookmark.birthdate} - {bookmark.deathdate}
            </p>
          </div>
          <div className={styles.img__wrapper}>
            <img
              className={styles.bookmark__img}
              src={`./assets/img/ancestors/thumbnail/${imgName}.jpg`}
              alt="ancestor"
              width="300"
              height="300"
            />
            <div className={styles.bookmark__hover}>
              <Button text={'Revisit'} to={'link to ancestor'} />
            </div>
          </div>
        </article>
      </>
    ));
};

export default Bookmark;
