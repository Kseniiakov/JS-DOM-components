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
    // Partially cloudy
    if(Number(`${options.textTemp}`) < 10 && Number(`${options.textTemp}`) > 5) {
        const article = `
        <article class="item">
            <p>${options.textTime}</p>
            <img src="/imgs/PartiallyCloudy.png" alt="PartiallyCloudy">
            <p>${options.textTemp}</p>
        </article>`;

        return article;
    }

    // Cloudy weather
    const article = `
        <article class="item">
            <p>${options.textTime}</p>
            <img src="/imgs/Cloudy.png" alt="Cloudy">
            <p>${options.textTemp}</p>
        </article>`;

    return article;
};