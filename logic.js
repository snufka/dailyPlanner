

for (var i = 0; i < 8; i++) {
    var hoursEL = $("<input>");
    hoursEL.addClass("hours");
    hoursEL.attr("data-hour", i + 9);
    $(".container").append(hoursEL);
    console.log(i + 9);
}