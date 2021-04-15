function isSubset(arr1,arr2) {
    for(i=0;i<arr2.length;i++)
    {
        for(j=0;j<arr1.length;j++) {
            if(arr2[j]== arr1[i]){
                break;
            }
        }
        if(j==arr2.length) {
            return false;
        }
        
    }
    return true;
}
const arr1=[1,6,18,20,3,5,7];
const arr2=[18,3,7,6,15];
console.log(isSubset(arr1,arr2));