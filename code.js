function binarySearch(list, element) {
    var midpoint = (list.length / 2)-1;
    var mid = list[midpoint];
    if (element > mid) {
        list = list.slice(list[midpoint+1], list.length);
        binarySearch(list, element);
    }
    else if (element < mid) {
        list = list.slice(0, list[midpoint]);
        binarySearch(list, element);
    }
    else (element == mid) { 
        return midpoint;
    }
    return -1;
}