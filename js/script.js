function init(evt) {
    let svgHours = document.querySelector("#hours");
    let svgMinutes = document.querySelector("#minutes");
    let svgSeconds = document.querySelector("#seconds");

    setInterval(function () {
        let dt = new Date()

        let hours = dt.getHours();
        let minutes = dt.getMinutes();
        let seconds = dt.getSeconds();

        let degSeconds = 180 + 360 / 60 * seconds;
        let degMinutes = 180 + 360 / 60 * minutes;
        let degHours = 180 + 360 / 12 * (hours % 12) + degMinutes / 60;

        svgHours.setAttribute('transform', `translate(6,6) rotate(${degHours} 0 0)`);
        svgMinutes.setAttribute('transform', `translate(6,6) rotate(${degMinutes} 0 0)`);
        svgSeconds.setAttribute('transform', `translate(6,6) rotate(${degSeconds} 0 0)`);
        console.clear();
        console.log(dt.toLocaleTimeString());
    }, 1000);
};