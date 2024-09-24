function binarySearch(list, element) {
    var low = 0;
    var high = list.length - 1;
    var mid = high/2 - 1;
    var temp;

    while (low <= high) {
        if (list[mid] > element) {
            temp = mid;
            low = temp;
            mid = low + (high - low) / 2; 
            System.out.println(mid);
            if (list[mid] == element) {
                System.out.println("yay")
                return mid;
            }
        }
        if (list[mid] < element) {
            temp = mid;
            high = temp
            mid = low + (high - low) / 2;
            System.out.println(mid);
            if (list[mid] == element) {
                System.out.println("yay")
                return mid;
            }
        }
    }
    return -1;
}

