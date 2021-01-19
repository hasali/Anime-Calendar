function getSeason(month)
{
    var season='';
    if(month==1||month==2||month==3)
    {
        season= 'winter';
    }
    else if(month==4 || month==5||month==6)
    {
        season= 'spring';
    }
    else if(month==7||month==8||month==9)
    {
        season= 'summer';
    }
    else if(month==10||month==11||month==12)
    {
        season= 'fall';
    }
    return season;

}
export { getSeason }