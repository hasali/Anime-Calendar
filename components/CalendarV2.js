import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
//import event from './event'
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';

const localizer = momentLocalizer(moment);

const MyCalendar = props => (

    
        
        <div>
            <Calendar
                localizer={localizer}
                // events = {props.shows.map(anime =>{
                //     return(
                //         [
                //             {
                //                 'title':anime.title,
                //                 'start':anime.airing_start,
                //                 'end':anime.airing_start
                //             }
                //         ]
                //     )
                // })}
                //events={props.animeArr}
                events = {[
                    {
                        title: 'hello',
                        start: new Date(),
                        end: new Date()
                    }
                ]}
                startAccessor="start"
                endAccessor="end"
                defaultDate={moment().toDate()}
                style={{ height: 500 }}
            />
        </div>
    
);
MyCalendar.getInitialProps = async function () {
    const res = await fetch('https://api.jikan.moe/v3/season/2020/winter');
    const data = await res.json();

    //console.log(`Show data fetched. Count: ${data.length}`);
    var animeArr = data.anime.map(anime => ({
        title: anime.title,
        start: anime.airing_start,
        end: anime.airing_start
    }

    ));
    console.log(`${animeArr[0].title}`);
    return {
        animeArr
    };
};
export default MyCalendar;


