function binarySearch(list, element) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        
        let mid = Math.floor((low + high) / 2);
        //Found the target!
        if (list[mid] === element) {
            return mid;
        }
        //Undershot the target!
        if (list[mid] < element) {
            low = mid + 1;
        }
        //Overshot the target!
        else if (list[mid] > element) {
            high = mid - 1;
        }
    }
    return -1;
}
