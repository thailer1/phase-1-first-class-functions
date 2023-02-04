function receivesAFunction(callBack){
     return  callBack()
}
function callBack(){
    callBack = 'Spy'
}


const returnsANamedFunction = () =>{ return callBack
}


const returnsAnAnonymousFunction = () => {
   return function(){
        // function body
    }
 }