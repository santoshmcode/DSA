// 1 Tail- Recursion

function fun(n){
    if (n === 0) { return }
    else {
        console.log(n);
        fun(n-1);
    }
}

function main() {
    fun(4)
}

main()

// O / p
// 4
// 3
// 3
// 2
// 1

/*
               fun(4)
                / \
            p(4)   fun(3)
                    / \
                 p(3)  fun(2)
                         /\
                     p(2)  fun(1)
                              /\
                          p(1)  fun(0)
                                  \
                                  return

*/
