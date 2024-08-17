function sumAll(a, b) {
    let count = 0;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    while (a <= b) {
        count += a;
        a++;
    }
    console.log(count);
}