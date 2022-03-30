function weatherForecastItem(options = {}) {

    // Sunny weather
    if(Number(`${options.textTemp}`) > 10) {
        const article = `
        <article class="item">
            <p>${options.textTime}</p>
            <img src="/imgs/sunny.png" alt="sunny">
            <p>${options.textTemp}</p>
        </article>`;

        return article;
    }
    // Cloudy weather
    const article = `
        <article class="item">
            <p>${options.textTime}</p>
            <img src="/imgs/cloudy.png" alt="cloudy">
            <p>${options.textTemp}</p>
        </article>`;

    return article;
};