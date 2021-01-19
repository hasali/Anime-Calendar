import React, { Component, useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import widgetMomentLocalizer from 'react-widgets-moment';
import moment from 'moment'
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import { ReactSVG } from 'react-svg';

//import  { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import React, { useState, useEffect } from "react";
//import DatePicker from 'react-datepicker';
import DatePicker from 'react-widgets/lib/DateTimePicker';
//My Components
import events from '../assets/events.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Dailies from '../components/Dailies.js'
import ScoreIcon from '../components/ScoreIcon.js'
//import calIcon from '../assets/img/calIcon.png'
import IconSvg from '../assets/img/score_icon.svg';
import { purple, red } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import eventStyles from '../assets/css/custEvents.module.css'
//My Styles
import styles from '../assets/css/main.module.css'
import { Hidden } from '@material-ui/core';
import calStyles from '../assets/css/rbc.module.css';
import shadows from '@material-ui/core/styles/shadows';
import color from '@material-ui/core/colors/amber';
import {getSeason} from '../assets/Helpers';

moment.locale('en');
widgetMomentLocalizer();
const localizer = momentLocalizer(moment);

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    width: '235px', //Width of MAL images
    height:'430px',
    position: "absolute",
    overflow: "hidden",
    padding: theme.spacing(0.6),
    pointerEvents: 'auto',
    fontFamily: 'Dosis',
    fontSize: '15px'
    
  },
  darkbg:{
    width: '235px', //Width of MAL images
    height:'430px',
    position: "absolute",
    overflow: "hidden",
    padding: theme.spacing(0.6),
    pointerEvents: 'auto',
    fontFamily: 'Dosis',
    fontSize: '15px', 
    background: '#2f3136',
    color: '#f2f3f5'
  },
  
}))

const MyCalendar = props => {
  
  const [state, setState] = useState({isDark: false});
  const [currDate, setCurrDate] = useState(new Date());
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({ anime: [] });
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }; 

  var year = currDate.getFullYear();
  var month = currDate.getMonth()+1;
  var animeArr;
  var textTheme = state.isDark ? 'dark-text':'light-text';
  var bgTheme = state.isDark ? 'dark-bg':'light-bg';
  
  console.log(year);
  console.log(month);
  
  async function fetchData() {
    const res = await fetch(`https://api.jikan.moe/v3/season/${year}/${getSeason(month)}`);
    //const res = await fetch(`https://api.jikan.moe/v3/season/archive`);
    res
        .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));

  }

  useEffect(() => {
      fetchData();

  }, []);

  animeArr = data.anime.map(anime => { 
    return {
            title: anime.title,
            url: anime.url,
            desc: anime.synopsis,
            start: anime.airing_start,
            end: anime.airing_start,
            image: anime.image_url,
            score: anime.score,
            genres: anime.genres
          } 
        });
  function getCustomToolbar(toolbar) {
    
    

    const goToBack = () => {
      
      let mDate = toolbar.date;
      let newDate = new Date(
        mDate.getFullYear(),
        mDate.getMonth() - 1,
        1);
      toolbar.onNavigate('prev', newDate);
      
      fetchData();
      setCurrDate(newDate);

    }

    const goToNext = () => {
      let mDate = toolbar.date;
      let newDate = new Date(
        mDate.getFullYear(),
        mDate.getMonth() + 1,
        1);
      toolbar.onNavigate('next', newDate);
      
      console.log(newDate.getMonth()+1);
      
      fetchData();
      setCurrDate(newDate);
    }

    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate('current');
      fetchData();
      setCurrDate(now);
      
    };

    const datePicker = (date) => {
      //toolbar.onNavigate(date);
      setCurrDate(date);
      fetchData();
    }

    // const monthLabel = () => {
    //   const date = moment(setCurrDate(toolbar.date));
    //   return (
    //     <span className={textTheme}><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
    //   );
    // };
    //const [startDate, setStartDate] = useState(new Date());
    const CustomCalendarIcon = React.forwardRef(({onClick}, ref) => (
      <div ref={ref} onClick={onClick}>
        <img src={"./calIcon.png"} />
      </div>
    ))
    return (
    
      <>
        
        <div className="text-center align-center" >
          <div className="rbc-toolbar" >
            <div className="rbc-btn-group" >
                            
              
               
              
              <button className={bgTheme} type="button" onClick={goToBack}>
                <div className={"prev-icon "+ textTheme}>&#8249;</div>
              </button>
              <button className={bgTheme} type="button" onClick={goToCurrent}>
                <span className={"next-icon "+ textTheme}>Today</span>
              </button>
              <button className={bgTheme} type="button" onClick={goToNext}>
                <span className={"next-icon "+ textTheme}>&#8250;</span>
              </button>
            </div>
          </div >
         
          <div className={"rbc-btn-group"}>
            
            <DatePicker
                containerClassName="rw-btn"
                //dateIcon={CustomCalendarIcon}
                time={false}
                value={currDate}
                defaultView='year'
                views={['year']}
                onChange={value => datePicker(value)}
                format='MMMM YYYY'
                footer={false}
               // css={{ cursor: 'pointer', color:'blue' }}
              />
              <br/>
          </div>
          
        </div>
        
      </>
    )
  };
  
  //Move this into 'components'?
  function EventPop(event) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = event => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    
    return (
      <>
        <div>
          <div
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            aria-controls="simple-menu"
            aria-haspopup={true}
          >
            {event.title}

          </div>
          <Popover

            className={classes.popover}
            classes={state.isDark ? {
              paper: classes.darkbg

            } : {
                paper: classes.paper
              }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}

            disableRestoreFocus
            // onClick={handlePopoverClose}
            // onMouseLeave={handlePopoverClose}
            PaperProps={{ onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose }}
          >

            <div>
              <div className={styles.titleContainer}>
                <a className={state.isDark ? styles.title : null} href={event.event.url} target="_blank">{event.title}</a>
              </div>
              <div className={styles.genres}>
                {event.event.genres.slice(0,3).map((genre) =>
                  <li key={genre.mal_id}>{genre.name}</li>
                )}
              </div>
              <div>
                <ScoreIcon score={event.event.score} />
                {event.event.score}

              </div>
              <br />


              <div className={styles.bind}>

                <img src={event.event.image} alt={event.title} className={styles.blur} />
                <div className={styles.screen}></div>


                <div className={styles.description}>
                  {event.event.desc}
                </div>
                
              </div>
              




            </div>

          </Popover>
        </div>
      </>
    )


  };
  
  return (
    <>

      <div className={`${styles.bgc} ${state.isDark ? styles.light : null}`}>
        <Header isDark={state.isDark} />
        <br/>    
        <div className="grid-x text-center align-center">
          <div>
            <h4 style={{fontFamily:'Dosis'}}>Released Today</h4>

            <Dailies currYear={year} currMonth={month} isDark={state.isDark}/>
          </div>
        </div>
        <br />
        <br />
        <div className={"grid-container"}>
          
          <Calendar
            
            style={{ height: 650 }}
            
            tooltipAccessor={null}
            popup
            localizer={localizer}
            events={animeArr}
            //events={events}
            startAccessor="start"
            endAccessor="end"
            date = {currDate}
            onNavigate = {date => setCurrDate(date)}
            defaultDate={moment().toDate()}
            eventPropGetter={
              (event, start, end, isSelected) =>{
                var newStyle= {backgroundColor: 'rgba(31, 125, 247, 0.7)'};

                if(state.isDark){
                  newStyle.backgroundColor = 'rgba(175, 16, 43, 0.89)'
                };

                return{
                  
                  style: newStyle
                };
              }
            }
            dayPropGetter={
              (event, start, end, isSelected) =>{
                var newStyle= {backgroundColor: 'rgba(255,255,255)'};

                if(state.isDark){
                  newStyle.backgroundColor = '#36393f'
                };

                return{
                  
                  style: newStyle
                };
              }
            }
            components={{
              event: EventPop,
              //event: EventAgenda,
              toolbar: getCustomToolbar
            }}

          />
          
        </div>
        <br />
        <br />
        
        <Footer isDark={state.isDark} name="isDark" change={handleChange}/>

      </div>

    </>
  );
}
export default MyCalendar;


