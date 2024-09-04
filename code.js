function binarySearch(list, element) {
    var midpoint = list.length()/2 ;
    var mid = list[midpoint];
    if (mid > element) {
        binarySearch(list.slice(0,midpoint);
    }
    if (mid < element) {
        binarySearch(list.slice(midpoint,list.length());
    }
    else if (mid == element) {
        return (midpoint);
    }
    return -1;
}
