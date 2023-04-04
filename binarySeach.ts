{
    const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let start: number = 0, end: number = arr.length - 1;
    const target: number = 2;
    while (start < end) {
        let mid: number = start + Math.floor((end - start) / 2);
        if (arr[mid] === target) {
            console.log(mid);
            break;
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        else
            start = mid + 1;

    }
}
