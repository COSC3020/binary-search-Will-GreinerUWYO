function binarySearch(list, element) {
    var mid = list[list.length()/2];
    if (mid > element) {
        binarySearch(list.slice(0,(list.length()/2));
    }
    if (mid < element) {
        binarySearch(list.slice((list.length()/2),list.length());
    }
    else if (mid == element) {
        return (list.length()/2);
    }
    return -1;
}
