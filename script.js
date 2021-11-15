
    Calculate = () =>
    {
        let p=document.getElementById('amount').value;
        let t=document.getElementById('time').value;
        let r=document.getElementById('rate').value;

        let  Amount = p*Math.pow(1+r/100,t);

        document.getElementById('res').innerHTML="Amount = : Rs. "+Amount;
    }
