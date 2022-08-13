import React from 'react';
import Card from '../card';
import styles from './styles.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

function CardList({data}) {
    return (
        <div className={cx('card-list')}>
        {data.map((monster)=>{
            return (
                <Card monster = {monster} key={monster.id}/>
            )
        })}
        </div>
    );
}

export default CardList;