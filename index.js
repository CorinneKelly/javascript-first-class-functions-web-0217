function receivesAFunction(someFunction) {
  someFunction()
}

function someFunction(){
  console.log('something')
}

function returnsAnAnonymousFunction(){
  return () =>{
    console.log('i hope i get it')
  }
}


function returnsANamedFunction(){
  return function bubbles() {
    console.log('i hope i get it still')
  }
}