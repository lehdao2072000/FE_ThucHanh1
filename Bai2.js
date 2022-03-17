// 1. Viết hàm random(start, end) trả về kết quả là 1 số nguyên trong khoảng start-end

function random(start, end) {
    const result = Math.floor(Math.random() * (end - start + 1)) + start;
    return result;
}
console.log(" 1. số nguyên ngẫu nhiên là " + random(0, 10));

//2. Tạo 1 mảng init gồm 10 phẩn tử ngẫu nhiên lấy từ hàm random

function randomListNumber(start, end) {

    const init = [];
    for (let i = 0; i < 10; i++) {
        const value = Math.floor(Math.random() * (end - start + 1)) + start;
        init.push(value);
    }
    return init;
}
console.log(" 2. mảng gồm 10 phần tử : " + random2(0, 10));


//3. Viết hàm getOddNumbers với đầu vào là mảng array, trả về kết quả là mảng con gồm các số lẻ trong mảng array
//input: [1, 2, 3, 4, 5]
//output: [1, 3, 5]
//suggest: 
//function getOddNumbers(array) {
//   return …
//}
const array1 = [1, 2, 3, 4, 5];

//const newArray1 = array1.filter(number => number % 2 != 0);
function getOddNumbers(array) {

    return array % 2 !== 0;
}
console.log(" 3. Mảng gồm các phần tử lẻ : " + array1.filter(getOddNumbers));

//4. Viết hàm double với đầu vào là mảng array, trả về kết quả là mảng mới gồm các phần tử là gấp đôi phần tử của mảng array
//input: [1, 2, 3, 4, 5]
//output: [2, 4, 6, 8, 10]
const array = [1, 2, 3, 4, 5];
const double = array.map(function(value) {
    return value * 2;
});
console.log(" 4. mảng gồm các phần tử là gấp đôi phần tử của mảng array : " + double);

//5. Dùng hàm reduce để kiểm tra số lượng phần tử có trong mảng
//input: [1, 3, 4, 5, 1, 3, 1] 
//output: { 1: 3, 3: 2, 4: 1, 5: 1}

const array2 = [1, 3, 4, 5, 1, 3, 1];

const newArray2 = array2.reduce(function(total, number) {
    total[number] = (total[number] || 0) + 1;
    return total;
}, {});
console.log(newArray2);