let arraySize= Number(prompt('Enter Array Size')),
    array=[],
    target,
    output="";

for(i=0; i<arraySize; ){
  let element=Number(prompt('Enter Array Element'));
  if(element ){   // for NaN and null
    array[i]= element;
    i++;
  }
}

target=Number(prompt('Enter target'));

for(i=0; i<arraySize; i++){
  for(j=i+1; j<arraySize; j++){
    if(array[i]-array[j] === target){
      output+=`(${array[i]},${array[j]})`
    }else if(array[j]-array[i] === target){
      output+=`(${array[j]},${array[i]}) `
    }
  }
}

document.querySelector('#input').innerText=`input : ${array}`;
document.querySelector('.target').innerText=`target : ${target}`;
document.querySelector('strong').innerText=`output : ${output}`;
