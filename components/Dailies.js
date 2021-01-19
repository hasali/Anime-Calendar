import React, { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import moment from 'moment'
import styles from '../assets/css/dailies.module.css'
import {getSeason} from '../assets/Helpers.js';
const Dailies = (props) => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState({ anime: [] });
    const today = new Date();

    var dailyArr;
    
    async function fetchData() {
        const res = await fetch(`https://api.jikan.moe/v3/season/${props.currYear}/${getSeason(props.currMonth)}`);
        res
            .json()
            .then(res => setData(res))
            .catch(err => setErrors(err));

    }

    useEffect(() => {
        fetchData();

    }, []);

    function formatDate(date) {
        var newDate = new moment(date);
        return newDate.format('MM/DD/YYYY');
    }

    dailyArr = data.anime.filter(anime => {
        if (formatDate(anime.airing_start) !== formatDate(today)) {
            return false;
        }
        return true;
    }).map(anime => { return anime });

    if (dailyArr.length == 0) {
        return <div className={styles.altmsg}>*No anime released today :(</div>
    }

    console.log(dailyArr);

    return (

        <div>
            {/* <p>{dataArr[0].title}</ p> */}
            <ul className={styles.noBullet}>
                {dailyArr.map(anime => (

                    <li key={anime.mal_id} className={styles.formatList}>
                        <div className={styles.carddimension + " card"} >
                            
                            <div className={styles.title}>
                                <a style={props.isDark?{color:'white'}:null}href={anime.url} >{anime.title}</a>
                            </div>
                            <img src={anime.image_url} style={{height:'212px',width:'150px'}}/>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    );


}

export default Dailies;