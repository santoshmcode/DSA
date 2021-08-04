//5 in Direct- recursion

function f1(n) {
    if (n === 0) {
        return;
    } else {
        console.log(n);
        f2(n - 1);
    }
}

function f2(n) {
    if (n < 1) {
        return;
    } else {
        console.log(n);
        f1(Math.floor(n / 2));
    }
}

function main() {
    f1(10);
}

main();

// O / p
// 10
// 9
// 4
// 3
// 1

/*
                    f1(10)
                    / \
                p(10) f2(9)
                        / \
                     p(9) f1(4)
                            / \
                        p(4) f2(3)
                               / \
                           p(3) f1(1)
                                  / \
                              p(1) f2(0)
                                    /
                                  return


*/
