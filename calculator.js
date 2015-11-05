$(document).ready(function () {
    $("div.calculator.key").click(function () {
        if ($(this).attr("value") != "") {
            var keyValue = $(this).attr("value");
            $("input.calculator.screen").val($("input.calculator.screen").val() + keyValue);
        } else {
            switch ($(this).attr("id")) {
                case "calc_key_equal":
                    var expression = $("input.calculator.screen").val();
                    $("input.calculator.screen").val(eval(expression));
                    break;
                case "calc_key_backspace":
                    var currentString = $("input.calculator.screen").val();
                    $("input.calculator.screen").val(currentString.substring(0, currentString.length - 1));
                    break;
                case "calc_key_clear":
                    $("input.calculator.screen").val("");
                    break;
                default :
                    break;
            }
        }
    });
});