function groupById(arr){
  return arr.reduce((obj,item) => {
    obj[item.id] = item
    return obj
  },{})
}

