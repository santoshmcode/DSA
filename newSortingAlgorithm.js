// Q https://pdfhost.io/v/rgOOVzrZI_New_Sorting_Algorithmpdf.pdf

function newSortingAlgorithm(array, k) {
    for(let x = 0; x < array.length; x++){
    	let i = 0
        let j = 1
        let temp = null
          for(; j < array.length; j++){
          	if((array[i] % k) > (array[j] % k)){
            	temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
            i++
          }
    }
    
	
  return array.join(" ")
}

function runProgram(input){
     let newInput = input.trim().split("\n");
  	 let nk = newInput[0].trim().split(" ").map(Number)
     let k = nk[1]
     let array = newInput[1].trim().split(" ").map(Number)
     console.log(newSortingAlgorithm(array, k))
     
}

let input = `100 1000
9384 887 2778 6916 7794 8336 5387 493 6650 1422 2363 28 8691 60 7764 3927 541 3427 9173 5737 5212 5369 2568 6430 5783 1531 2863 5124 4068 3136 3930 9803 4023 3059 3070 8168 1394 8457 5012 8043 6230 7374 4422 4920 3785 8538 5199 4325 8316 4371 6414 3527 6092 8981 9957 1874 6863 9171 6997 7282 2306 926 7085 6328 337 6506 847 1730 1314 5858 6125 3896 9583 546 8815 3368 5435 365 4044 3751 1088 6809 7277 7179 5789 3585 5404 2652 2755 2400 9933 5061 9677 3369 7740 13 6227 8587 8095 7540`;

runProgram(input);