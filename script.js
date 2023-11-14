(function() {
    let convType = "miles"; // Change const to let
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const ans = document.getElementById("answer");
    const form = document.getElementById("convert");

    document.addEventListener('keydown', function (event) {
        const key = event.code;

        if (key === 'KeyK') {
            convType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";

        } else if (key === 'KeyM') {
            convType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";

        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            if (convType == "miles") {
                const conversion = (distance * 1.689344).toFixed(3);
                ans.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;

            } else {
                const conversion = (distance * 0.621371192).toFixed(3);
                ans.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`;

            }
        } else {
            ans.innerHTML = '<h2>Please provide a number.</h2>';
        }
    });
})();
