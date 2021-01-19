import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
//import event from './event'
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';

const localizer = momentLocalizer(moment)

export default class MyCalendar extends Component {
  
  static async getInitialProps() {

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


  }
  render() {
    return (
      <>
        <div>

          <Calendar

            localizer={localizer}
            events={this.props.animeArr}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            style={{ height: 500 }}
          />
        </div>
      </>
    )
  }
}
