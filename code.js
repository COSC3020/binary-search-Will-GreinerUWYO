function binarySearch(list, element) {
    var low = 0;
    var high = list.length - 1;
    var mid = high/2 - 1;
    var temp;

    while (low <= high) {
        //Found the target!
        if (list[mid] == element) {
            return mid;
        }
        //Undershot the target!
        if (list[mid] > element) {
            low = mid + 1;
        }
        //Overshot the target!
        if (list[mid] < element) {
            high = mid - 1;
        }
    }
    return -1;
}

