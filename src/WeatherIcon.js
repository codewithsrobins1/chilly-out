import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
 
const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 75,
  animate: true
};
 
const WeatherIcon = (props) => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);
 
export default WeatherIcon;