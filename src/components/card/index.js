import React from 'react';
import styles from './styles.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

function Card({monster}) {
    const {name, email, id} = monster; 
    return (
        <div className={cx('card-container')} key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;