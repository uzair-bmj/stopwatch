let msc = 0;
let sec = 0;
let min = 0;
let hr = 0;
let watch;


function start() {
    watch = setInterval(wtc, -1);
    function wtc() {
        msc++;
        document.getElementById("msc").innerText = msc;
        document.getElementById("sec").innerText = sec;
        document.getElementById("min").innerText = min;
        document.getElementById("hr").innerText = hr;

        if (msc == 1000) {
            msc = 0;
            sec++;
            if (sec == 60) {
                sec = 0;
                min++;
                if (min == 60) {
                    min = 0;
                    hr++;

                }

            }
        }


    }
}

function reset(){
    document.getElementById("msc").innerText = 0;
    document.getElementById("sec").innerText = 0;
    document.getElementById("min").innerText = 0;
    document.getElementById("hr").innerText =0;
} 
function stop() {
    clearInterval(watch);
}
  