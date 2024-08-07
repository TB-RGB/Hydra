// Month will be fed from missingMonths function
// store will be your object from useSelector

const monthCheck = (month, store)=>{
    for (let entry of store) {
       if (month != entry.month){
        return false
       }
    }
}