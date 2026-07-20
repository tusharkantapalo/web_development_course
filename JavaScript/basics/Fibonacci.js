function fibonacciSeries(limit) {

    var a = 0;
    var b = 1;
    var c;

    for (var i = 1; i <= limit; i++) {

        console.log(a)
        
        c = a + b;
        a = b;
        b = c;
        
    }
}

var limit = prompt("Enter the limit: ");

fibonacciSeries(limit);
