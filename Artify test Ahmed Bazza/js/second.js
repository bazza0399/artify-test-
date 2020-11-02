const findAfter = (a,arr)=>{
    let k =0
    while(arr[a]!=0){
        a++
        k++
    }
    return k 
}
const findIndex = (arr)=>{
    if(arr.indexOf(0)==-1){
        return 'pas de zeros dans le tableau'
    }else{
        //let firstZero = -1
        let index = 0
        let seq =0
        let maxSeq = 0
        for(var i ; i<arr.length ; i++){
            if(arr[i]==1){
                Seq++
            }else{
                let a = findAfter(i,arr)
                seq = seq + a
                if(seq>maxSeq){
                    maxSeq=seq 
                    seq =  0 
                    index = i
                }
            }

        }
            return index
    }
        
}

const arr = [0,1,1,0,1,1,1,0,1,1,0,1,1]
console.log(findIndex(arr))