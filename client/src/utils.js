export const filterArrayBasedOnInputString = (array, input, key) => {
    return array.filter((item) => {
        const inputUpperCase = input.toUpperCase();
        const itemFieldUpperCase = item[`${key}`].toUpperCase();
        return (itemFieldUpperCase.includes(inputUpperCase));
    })
}