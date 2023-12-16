function lcm(x, y) 
{
    return Math.abs((x * y) / gcd(x, y));
}

function gcd(x, y) 
{
    x = Math.abs(x);
    y = Math.abs(y);
   
    while(y) 
    {
        let t = y;
        y = x % y;
        x = t;
    }

    return x;
}


 