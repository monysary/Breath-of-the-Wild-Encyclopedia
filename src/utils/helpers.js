export const capitalize = (string) => {
    const stringArr = string?.split(' ');
    const finalString = []
    stringArr?.forEach((item) => {
        const newItem = item[0].toUpperCase() + item.slice(1)
        finalString.push(newItem)
    });
    return finalString.join(' ');
}
