function takeANumber(array, person){
  array.push(person)
  return `Welcome, ${person}. You are number ${array.length} in line.`

  if (array.length === 0){
    array.push(person)
    return `Welcome, ${person}. You are numner ${array.length} in line. `
  }return array
}

function nowServing(array){
  var i = 0
  if(array.length === 0){
    return `There is nobody waiting to be served!`
  }else{
  return `Currently serving ${array[i]}.`
  //var varray = array
  array.shift()
  return array
  }
}
