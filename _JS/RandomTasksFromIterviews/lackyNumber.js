const humanYearsCatYearsDogYears = (humanYears) => {
    const catYears = [...Array(humanYears).keys()].reduce((previousValue, currentValue, index) => {
        const multiplyBy = (index === 0) ? 15 : (index === 1) ? 9 : 4
        return previousValue + multiplyBy
    }, 0)

    const dogYears = [...Array(humanYears).keys()].reduce((previousValue, currentValue, index) => {
        const multiplyBy = index === 0 ? 15 : (index === 1) ? 9 : 5
        return previousValue + multiplyBy
    }, 0)

    return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(2))
