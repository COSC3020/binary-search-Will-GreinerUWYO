function binarySearch(list, element) {
    for (int i = 0; i < list.length(); i++){
        if (list[i] == element) {
            return i;
        }
    }
    return -1;
}
