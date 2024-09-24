class Pattern_6{
    pattern_6(n){
        for(let i=0; i<n ;i++){

            for(let j=1; j<n-i; j++){
                process.stdout.write(j.toString() + " ")
            }

            console.log();
        }
    }
}




const N = 7;
const res= new Pattern_6();
res.pattern_6(N);