//03 Tree - recursion

function fun(n) {
    if (n === 0) {
        return
    } else {
        console.log(n)
        fun(n-1)
        fun(n-1)
    }
}

function main() {
    fun(3)
}
main()

// O / p
// 3
// 2
// 1
// 1 //repeated node f(1)
// 2 //repeated node f(2)
// 1
// 1

/*
                                    f(3)
                                    / | \
                               p(3) f(2) f(2) // for 2nd f(2) tree will repeat
                                    / | \
                                p(2) f(1) f(1) // for 2nd f(1) tree will repeat
                                     / | \
                                 p(1) f(0) f(0)
                                      /     /
                                   return  return 


*/
