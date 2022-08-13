import React from 'react';
import styles from './styles.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

function SearchBox({onChangeHandler, className, placeholder}) {
    return (
        <div>
            <input className={cx('search-box',className)} type='search' placeholder={placeholder} onChange={onChangeHandler}/>
        </div>
    );
}

export default SearchBox;