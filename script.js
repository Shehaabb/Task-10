function inchToMeter() {
    let inches = document.getElementById("input").value;
    let meters = inches  * 0.0254;
    document.getElementById("result").innerHTML = meters +" meters";
}
