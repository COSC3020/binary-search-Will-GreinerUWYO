function binarySearch(list, element) {
    var low = 0;
    var high = list.length - 1;
    var mid = list.lenght()/2;
    while (low < high) {
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

