class Pattern_3{
    pattern_3(n){
        for(let i=1; i<=n; i++){

            for(let j=1; j<=i; j++){
                process.stdout.write(j.toString()+ " ")
            }

            console.log();
        }
    }
}

const N = 7;
const res= new Pattern_3();
res.pattern_3(N);