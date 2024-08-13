
        function evennumber(){
                document.getElementById('even').innerHTML="1 to 50 even number"
                for (i=1;i<=50;i++){
                        if (i%2==0){
                                console.log(i);
                        }
                }
        }
        function series(){
                document.getElementById('fibonacci').innerHTML="result"
                let num=parseInt(document.getElementById('num').value)
                let n1 = 0, n2 = 1 ,nextterm;
                for(let i=1;i<=num;i++){
                        console.log(n1);
                        nextterm=n1+n2;
                        n1=n2;
                        n2=nextterm;
                }
        }
        function pn(){
                let pn=parseInt(document.getElementById('num').value)
                let (n<2)
                for(let i=2;i<=pn;i++){
                        if(n% 1===0){
                                return '${n} is not a prime number'
                        }
                }
                return '${n} is prime number'
        }