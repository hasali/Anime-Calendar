

const ScoreIcon = (props) => {
    var scoreColor;
    var strokeColor;
    var opacityLvl = 1;
    
    if (props.score >= 8.66) {
        scoreColor = '#FFD700';
    } 
    else if (props.score >= 8.3 && props.score < 8.66) {
        scoreColor = '#f1f1f1';
        strokeColor = '#e7e7e7';
    }
    else if (props.score >= 7.7 && props.score < 8.3) {
        scoreColor = '#00ff00';
    }
    else if (props.score >= 6.8 && props.score < 7.7) {
        scoreColor = '#ffd699';
    }
    else if (props.score >= 6 && props.score < 6.8) {
        scoreColor = '#ff0000';
    }
    else if (props.score >= 1 && props.score < 6) {
        scoreColor = '#800000';
    }
    else{
        scoreColor = '#ffffff'
        strokeColor = '#000000'
        opacityLvl = '0.3'
    }
        return (

            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">

                <g class="layer">
                    <title>Layer 1</title>


                    <polygon fill={scoreColor} id="svg_32" opacity={opacityLvl} points="8,2.9444122314453125 9.95710277557373,
                    7.50744104385376 14.966644287109375,7.931210041046143 11.166654586791992,11.175078392028809 12.305620193481445,
                    16 8,13.441793441772461 3.694380283355713,16 4.833345890045166,11.175078392028809 1.033355712890625,
                    7.931210041046143 6.042898178100586,7.50744104385376 8,2.9444122314453125 9.95710277557373,7.50744104385376 "
                        stroke={strokeColor} />

                </g>
            </svg>
        );
    }
    export default ScoreIcon;