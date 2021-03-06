/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(array) {
    let area = 0;
    let firstV = 0; 
    let SecondV = array.length - 1;

    for (let index = 0; index < array.length; index++) {
        if (firstV == SecondV ) {
            firstV++;
            continue ;
        }
        let min = Math.min(array[firstV] , array[SecondV]) ; 
        let temp = ((SecondV) - firstV) * min;
         area = temp > area ? temp : area;
         if (array[firstV]<= array[SecondV]) {
            firstV++;
         }else
             SecondV--;
        
    }

    return area;
 };