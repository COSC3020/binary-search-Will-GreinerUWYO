function binarySearch(list, element) {
    int low = 0;
    int high = list.length - 1;
    int mid = high/2 - 1;
    int temp;

    while (list[mid] != element) {
        if (list[mid] > element) {
            temp = mid;
            low = temp;
            mid = low + (high - low) / 2; 
        }
        if (list[mid] < element) {
            temp = mid;
            high = temp
            mid = low + (high - low) / 2;
        }
    }
    return mid;
    
    
    return -1;
}
