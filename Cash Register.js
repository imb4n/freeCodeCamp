function checkCashRegister(price, cash, cid) {

  let currencyAmount = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
    }


  let totalCid = cid.map(x => x[1]).reduce((a, b) => a + b).toFixed(2)

  let change = (cash - price).toFixed(2)

  if (change === totalCid) {
    return {status: "CLOSED", change: cid}
  }

  cid = cid.reverse()
  let denomination = 0
  let denominationArr = []
  let keys = Object.keys(currencyAmount)
  let values = Object.values(currencyAmount)


  for (let i = 0; i < keys.length; i++) {
    
    let denominationArrItem = [cid[i][0], 0]
    
    while (change >= values[i] && cid[i][1] > 0 && (change - denomination.toFixed(2)).toFixed(2) >= values[i]) {
      
      denomination += values[i]

      denominationArrItem[1] += values[i]

      cid[i][1] -= values[i]
      console.log(cid[i][1])
      console.log(change - denomination.toFixed(2))
    }

    denominationArr.push(denominationArrItem)
  }

  if (change !== denomination.toFixed(2)) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else {
    return {status: "OPEN", change: denominationArr.filter(item => item[1] > 0)}
  }
  
}
