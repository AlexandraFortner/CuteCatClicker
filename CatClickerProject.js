// DATA STARTS
var clicks = 0;

// DATA ENDS
// .CLICKS START
$('#clicker').click(function () {
    clicks += 1;
    console.log(clicks);
    $('#click-count').html(clickCounter());
});
// .CLICKS END
// FUNCTIONS START
function clickCounter() {
    var clickTick =
        ["<br><h3>Clicks:" + clicks + "</h3>"
        ].join("");
    return clickTick;
}
// FUNCTIONS END

{/* <br>
        <h3>Clicks:</h3> */}
function main() {
    $('#click-count').html(clickCounter());
}
main();