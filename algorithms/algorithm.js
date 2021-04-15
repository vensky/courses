const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const val = 7;

function binarySearch(a, v) {
    let low = 0;
    let high = a.length - 1;
    let mid;
    let guess = v;

    debug(high)

    while (low <= high) {
        mid = (low + high) / 2;
        guess = a[mid];

        if (guess == v) {
            return mid;
        }

        if (guess > v) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return mid;
}

debug(binarySearch(arr, 4));


// debug(arr);
// debug(val);
