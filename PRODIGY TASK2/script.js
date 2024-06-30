        let timerdisp = document.querySelector('.timer');
        let stpbtn =document.getElementById('stopbtn');
        let strtbtn=document.getElementById('strtbtn');
        let rstbtn=document.getElementById('rstbtn');

        let timerId = 0;

        let msec = 0;
        let min = 0;        
        let sec = 0;

        
        strtbtn.addEventListener('click',function(){
            if(timerId !== 0){
                clearInterval(timerId);
            }
           timerId= setInterval(statimer,10);
        });

        rstbtn.addEventListener('click',function(){
            clearInterval(timerId);
            timerdisp.innerHTML='00 : 00 : 00';
            min=msec=sec=0;
        });

        stpbtn.addEventListener('click',function(){
            clearInterval(timerId);
        });
        
        function statimer(){
            msec++;
            if(msec == 100){
                msec = 0;
                sec++;
                if(sec == 60){
                    sec = 0;
                    min++;
                }
            }

            let msecString= msec < 10 ? `0${msec}` : msec;
            let secString= sec < 10 ? `0${sec}` : sec;
            let minString= min < 10 ? `0${min}` : min;
        
       timerdisp.innerHTML= `${minString} : ${secString} : ${msecString}`
        }