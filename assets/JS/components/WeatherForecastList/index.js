function weatherForecastList(options = {}) {
    listString = '';

    for (let i = 0; i < options.hourWeather.length; i++) {
        const value = options.hourWeather[i];

        listString += weatherForecastItem(value);
    }

    const listHoursWeather = `
    <section>
        ${listString}
    </section>
    `;

    return listHoursWeather;
}