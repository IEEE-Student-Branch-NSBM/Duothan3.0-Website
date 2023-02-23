import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class Countdown extends React.Component {
	state = {
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
	}
	
	componentDidMount() {
		this.interval = setInterval(() => {
			const { timeTillDate, timeFormat } = this.props;
			const then = moment(timeTillDate, timeFormat);
			const now = moment();
			const countdown = moment(then - now);
			const days = countdown.format('D');
			var hours = '00';
            var minutes = "00";
            var seconds = "00";
            console.log(days);
            if(days === '1') {
            hours = countdown.format('HH');
			minutes = countdown.format('mm');
			seconds = countdown.format('ss');
            }
			this.setState({ days, hours, minutes, seconds });
		}, 1000);
	}

	componentWillUnmount() {
		if(this.interval) {
			clearInterval(this.interval);
		}
	}
	
	render() {
		const { days, hours, minutes, seconds } = this.state;
		const daysRadius = mapNumber(days, 30, 0, 0, 360);
		const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
		const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
		const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

		if(!seconds) {
			return null;
		}
		
		return (
			<div>
				<div className='countdown-wrapper text-white flex items-center justify-center flex-wrap'>
					{hours && (
						<div className='countdown-item text-4xl flex items-center justify-center flex-col leading-7 m-2 pt-2 relative w-[100px] h-[100px]'>							
							<SVGCircle radius={hoursRadius} />
							{hours} 
							<span className='text-xs font-semibold uppercase'>hours</span>
						</div>
					)}
					{minutes && (
						<div className='countdown-item text-4xl flex items-center justify-center flex-col leading-7 m-2 pt-2 relative w-[100px] h-[100px]'>
							<SVGCircle radius={minutesRadius} />
							{minutes} 
							<span className='text-xs font-semibold uppercase'>minutes</span>
						</div>
					)}
					{seconds && (
						<div className='countdown-item text-4xl flex items-center justify-center flex-col leading-7 m-2 pt-2 relative w-[100px] h-[100px]'>
							<SVGCircle radius={secondsRadius} />
							{seconds} 
							<span className='text-xs font-semibold uppercase'>seconds</span>
						</div>
					)}
				</div>
			</div>
		);
	}
}

const SVGCircle = ({ radius }) => (
	<svg className='countdown-svg absolute top-0 left-0 w-[100px] h-[100px]'>
		<path fill="none" stroke="#EA1154" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)}/>
	</svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export default Countdown;