function toAscii(string)
{
    let res = "";

    for (let i = 0; i < string.length; i++)
        res += string.charCodeAt(i) + ' ';

    return res;
}

    
