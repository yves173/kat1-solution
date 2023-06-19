var filterString = function(value) {
    return Number.parseInt(value.split('').filter(a=>!isNaN(a)).join(''))
  }