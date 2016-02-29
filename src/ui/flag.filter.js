app.filter('flag', function() {
    return function(input) {
        if (input) {
            input = 1;
        } else {
            input = 0;
        }
        return input.toString().toUpperCase();
    };
});
