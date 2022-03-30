"use strict";

const mainElem = document.querySelector('main');

const hourWeather = [
    {textTime: '10:00', textTemp: '+14'},
    {textTime: '14:00', textTemp: '+12'},
    {textTime: '18:00', textTemp: '+9'},
    {textTime: '22:00', textTemp: '+2'}
];

mainElem.innerHTML = weatherForecastList({hourWeather: hourWeather});