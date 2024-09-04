function binarySearch(list, element) {
    var midpoint = (list.length() / 2) - 1;
    var mid = list[midpoint];
    if (element > mid) {
        //low = mid;
        list = list.slice(list[midpoint+1], list.length());
        binarySearch(list, element);
    if (element < mid) {
        list = list.slice(0, list[midpoint]);
        binarySearch(list, element);
    if (element == mid) { 
        return -1;
    }
}
