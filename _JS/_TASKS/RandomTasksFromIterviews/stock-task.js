/*
 * Верните максимальную прибыль от котировок акций. Котировки акций хранятся в
 * массиве по дате. Прибыль от акций - это разница в ценах на покупку и продажу
 * акций. Каждый день вы можете купить отдну еденицу акций, продать любое количество едениц,
 * которое вы уже купили, или ничего не делать. Следовательно, наибольшая прибыль - это максимальная
 * разница всех пар в последовательноси курсов акции.
 */

// function calc(stockArray) {
//   const profit = 0
//
//   let successPurchasedStock = []
//
//   stockArray.forEach((currentValue, index, array) => {
//     if (index === 0) {
//       // нужно купить что бы чтото продать и первый полюбому покупка
//       return
//     }
//     const prevArray = array.slice(0, index)
//
//     prevArray.forEach((innerValue, innerIndex, innerArray) => {
//       const prevVal = innerArray.slice(innerIndex, innerArray.length)
//       const profitCalc = currentValue * prevVal.length - prevVal.reduce((a, b) => a + b, 0)
//       if (profitCalc > 0) {
//         successPurchasedStock = [...successPurchasedStock, { prevVal, currentValue, profitCalc }]
//       }
//     })
//   })
//
//   if (successPurchasedStock.length <= 0) {
//     return 0
//   }
//
//   return successPurchasedStock
// }

function calc(arr) {
  if (arr.length <= 1) {
    return 0
  }

  const max = Math.max(...arr)
  const maxInd = arr.indexOf(max)

  return (
    arr.slice(0, maxInd).reduce((acc, price) => {
      const diff = max - price
      return acc + diff
    }, 0) + calc(arr.slice(maxInd + 1, arr.length))
  )
}

// console.log(calc([1, 2, 3, 4, 5, 6])) // 15 (покупка по 1, 2, 3, 4, 5 и продажа по 6)
// console.log(calc([6, 5, 4, 3, 2, 1])) // 0 (нельзя заработать)
// console.log(calc([1, 6, 5, 10, 8, 7])) // 18 (покупка по 1, 6, 5  и продажа по 10)
// console.log(calc([1, 2, 10, 2, 4, 6])) // 23 (покупка по 1, 2 продажа на 10, покупка 2, 4 продажа на 6)
// console.log(calc([1, 1, 9, 8, 8, 10])) // 23 (покупка по 1, 2 продажа на 10, покупка 2, 4 продажа на 6)

