class Pattern_4{
    pattern_4(n){
        for(let i=1; i<=n; i++){

            for(let j=1; j<=i; j++){
                process.stdout.write(i.toString() +  " ")
            }

            console.log();
        }
    }
}


const N = 7;
const res= new Pattern_4();
res.pattern_4(N);