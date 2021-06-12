const Handler = {
    Number:(event)=>{
        let x = event.keyCode || event.which;
        if(x<=47||x>=58 ) event.preventDefault();  

    },
    Email:(event)=>{
        let x = event.keyCode || event.which;
        // if(x===39||x=== 34) event.preventDefault(); ky tu ' va "
        if(x<48) event.preventDefault();
        else if(x>57) {
            if(x>57&&x<64) event.preventDefault();
            else if(x>90) {
                if(x<97||x>122) event.preventDefault();
            }
        }
    },
    Char:(event)=>{
        let x = event.keyCode || event.which;
        // if(x===39||x=== 34) event.preventDefault(); ky tu ' va "
        // 63 == @
        // 32 = phim cach

        if(x>33&&x<48) event.preventDefault(); 
        else if(x>57) {
            if(x>57&&x<65) event.preventDefault();
            else if(x>90) {
                if(x<97||x>122) event.preventDefault();
            }
        }
    },
    Now_Date:() => {
        var today = new Date();     
        return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
         +' '+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }

}
export default Handler;

