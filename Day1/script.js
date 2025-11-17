function add(a, b, cb) {
    let resu = a + b;
    cb(resu);
}

add(2, 3, function (val) {
    console.log(val);
})