import styles from '../assets/css/footer.module.css';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
export default function Footer(props){
    const ThemeSwitch = withStyles({
        switchBase: {
            color: 'rgb(78, 123, 182)',
            '&$checked': {
              color: 'rgb(206, 57, 82)',
            },
            '&$checked + $track': {
              backgroundColor: 'red',
            },
          },
          checked: {},
          track: {backgroundColor: 'blue'},
        
    })(Switch);
    return(
        <>
            <div className={styles.footerbgc + " grid-container"}>
                <div className="grid-x">
                <div className="">
                    <div className="" >
                        <div>Theme:
                        <ThemeSwitch
                            checked={props.isDark}
                            onChange={props.change}
                            name={props.name}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        </div>
                    </div>
                    </div>
                    <div className="grid-x align-self-center small-5 text-right">
                    <div className={"cell "+styles.copyright} >
                    &copy;2020 H-Man.
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}