function sortByLenght(array)
{
    for(let i = 0; i < array.length; i++)
        for (let j = 0; j < array.length - i - 1; j++)
            if (array[j].length > array[j + 1].length)
            {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }

    return array;
}
