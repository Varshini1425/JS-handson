
class Pattern_5{

    pattern_5(n){
        for(let i=1; i<=n; i++){


            for(let j=1; j<=n-i+1; j++){
                process.stdout.write("* ")
            }
            console.log();
        }
    }
}





const N = 7;
const res= new Pattern_5();
res.pattern_5(N);