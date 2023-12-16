function mapify(obj)
{
    let newObj = {};

    for(let el in obj)
    {
        console.log(obj[el]);
        newObj[obj[el]] = obj[el].length;
    }

    return newObj;
}




let ob = {asdasdsadsa: "xd", b: 'test', wtf: "chipi chipi"};
console.log(mapify(ob));