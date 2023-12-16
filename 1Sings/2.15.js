function cmp(string1, string2)
{
    if (string1.length != string2.length) return false;

    string1.toLowerCase();
    string2.toLowerCase();

    for(let i = 0; i < string1.length && i < string2.length; i++)
        if (string1[i] != string2[i]) return false;

    return true;
}
