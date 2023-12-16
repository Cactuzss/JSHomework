function strToDate(str)
{
    let res = new Date();

    res.setFullYear(str.slice(0, 4), str.slice(5, 7), str.slice(8, 10));

    return res;
}
