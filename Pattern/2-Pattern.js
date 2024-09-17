class Pattern_2{
    pattern_2(n){
        for(let i=1; i<=n; i++){

            for(let j=1; j<=i; j++){
                process.stdout.write("* ");
            }

            console.log();
        }

       
    }
}

const Number = 6;
const res = new Pattern_2();
res.pattern_2(Number);