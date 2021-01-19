//import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
//@import '../node_modules/react-big-calendar/lib/sass/styles';
import '../assets/css/rbc.css'
import '../assets/css/custDatePicker.module.css'
import '../assets/css/foundation.css'
import '../assets/css/calendar.module.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import 'react-widgets/dist/css/react-widgets.css';

export default function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}