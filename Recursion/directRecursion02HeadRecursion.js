//2 Head recursion

function fun(n) {
    if (n === 0) {
        return;
    } else {
        fun(n - 1);
        console.log(n);
    }
}

function main() {
    fun(4);
}

main();

// O / p
// 1
// 2
// 3
// 4

/*
                            fun(4)
                             / \
                        fun(3) p(4)   
                           / \
                      fun(2)  p(3)  
                       / \
                  fun(1)  p(2)  
                    / \
              fun(0)   p(1)  
                /
            return
*/
