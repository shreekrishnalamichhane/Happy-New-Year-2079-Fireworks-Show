const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const text_container = document.querySelector('.text-container .text-center');

let year = 2079;
let makeDoubleDigit = (val) => {
    return (val >= 0 && val < 10) ? '0' + val : val;
}
let renderCountdown = (d, h, m, s) => {
    days.innerHTML = makeDoubleDigit(d);
    hours.innerHTML = makeDoubleDigit(h);
    minutes.innerHTML = makeDoubleDigit(m);
    seconds.innerHTML = makeDoubleDigit(s);
}


let countdown = (date) => {
    var countDownDate = new Date(date).getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
        var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        renderCountdown(d, h, m, s);

        if (distance > 90000 && distance < 10000) {
            seqRandomShell();
        }
        if (distance > 2000 && distance < 4000) {
            seqPyramid();
            setTimeout(seqSmallBarrage, 2000);
            setTimeout(seqTriple, 4000);
            setTimeout(seqTwoRandom, 6000);
        }
        // If the count down is over, write some text 
        if (distance < 0 && distance > -5000) { //distance in milliseconds
            store.state.config.autoLaunch = true;
            clearInterval(x);
            text_container.innerHTML =
                `<h1 class="heading">Happy New Year</h1> 
                <h2 class="subheading">${year}</h2>`
            // document.getElementById("demo").innerHTML = "EXPIRED";
        }
        if (distance < -5000) {
            text_container.innerHTML =
                `<h1 class="heading">You're late. <br> You missed the show.</h1> 
            <h2 class="subheading">By the way, Happy Late New Year ${year}</h2>`
        }
    }, 1000);
}
store.state.config.autoLaunch = false;

// seqRandomShell();
// seqTwoRandom();
// seqTriple();
// seqPyramid();
// seqSmallBarrage();