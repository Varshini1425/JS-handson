
class Pattern_1{
  pattern_1(n){

    //outer loop for rows  
    for(let i=1 ; i<=n; i++){
        for(let j=1; j<=n; j++){
            process.stdout.write("* ");
        }

        console.log();
    }
  }  
}

const number = 9;
const solution = new Pattern_1();
solution.pattern_1(number);

