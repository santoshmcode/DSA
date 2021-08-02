// Question Link: https://pdfhost.io/v/wCM13krJY_Vowel_sort.pdf

function main(array) {
    let vQueue = [];
    let cQueue = [];
    let result;
    for (let i = 0; i < array.length; i++) {
        let string = array[i];
        if (
            string[0] === "a" ||
            string[0] === "e" ||
            string[0] === "i" ||
            string[0] === "o" ||
            string[0] === "u"
        ) {
            vQueue.push(array[i]);
        } else {
            cQueue.push(array[i]);
        }
    }

    result = vQueue.join("\n").trim() + "\n" + cQueue.join("\n").trim();
    return result.trim();
}
function runProgram(input) {
    let input_arr = input.trim().split("\n");

    for (let i = 1; i < input_arr.length; i++) {
        let line1 = input_arr[i].trim().split(" ").map(Number);
        let no_rows = line1[0];

        let array = [];
        for (let j = i + 1; j <= i + no_rows; j++) {
            let row = input_arr[j];
            array.push(row);
        }
        console.log(main(array));

        i = i + no_rows;
    }
}

let input = `10
3 8
vgyjbody
iciiirfz
lyyfhqlj
2 2
xj
uf
2 9
xkwgfqfjb
ikgswgtpx
7 3
xwc
mnx
swt
uwe
lvy
smb
sqd
9 2
tc
tq
dj
va
kk
vb
kk
qd
mz
8 9
aoeidrkod
trngbodmw
eetrvintb
ecywgtxsy
rvhheafnl
zfbwshgnp
vsexhwgpg
igrkwvxae
8 4
wnyt
jlbg
pone
uaab
cnpe
yjqz
oata
yhko
10 6
gondzw
dydzje
zysmfu
sdhuet
bfqlou
dnnlru
pxzhif
exlfgf
ylsrvp
qnstud
7 1
x
n
t
j
u
z
a
9 6
zjvyhq
thbrqb
leoxzx
cljbfm
nzmvum
abflup
skpyke
eokjor
gmpgph`;

runProgram(input);

// Expected Output:
// iciiirfz
// vgyjbody
// lyyfhqlj
// uf
// xj
// ikgswgtpx
// xkwgfqfjb
// uwe
// xwc
// mnx
// swt
// lvy
// smb
// sqd
// tc
// tq
// dj
// va
// kk
// vb
// kk
// qd
// mz
// aoeidrkod
// eetrvintb
// ecywgtxsy
// igrkwvxae
// trngbodmw
// rvhheafnl
// zfbwshgnp
// vsexhwgpg
// uaab
// oata
// wnyt
// jlbg
// pone
// cnpe
// yjqz
// yhko
// exlfgf
// gondzw
// dydzje
// zysmfu
// sdhuet
// bfqlou
// dnnlru
// pxzhif
// ylsrvp
// qnstud
// u
// a
// x
// n
// t
// j
// z
// abflup
// eokjor
// zjvyhq
// thbrqb
// leoxzx
// cljbfm
// nzmvum
// skpyke
// gmpgph