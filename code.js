function binarySearch(list, element) {
    var low = 0;
    var high = list.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        //Found the target!
        if (list[mid] == element) {
            return mid;
        }
        //Undershot the target!
        else if (list[mid] > element) {
            low = mid + 1;
        }
        //Overshot the target!
        else if (list[mid] < element) {
            high = mid - 1;
        }
    }
    return -1;
}

