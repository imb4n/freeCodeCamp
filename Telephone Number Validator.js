function telephoneCheck(str) {
  
  let regex = /^[1]?[-\s]?([(][\d]{3}[)]|[\d]{3})[-\s]?[\d]{3}[\s\D]?[\d]{4}$/mg
  return regex.test(str)
  
}
