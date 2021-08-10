/**
 * Khối 1: inputs
 * 3 số nguyên
 * Khối 2:
 * B1: tạo và lấy giá trị người dùng nhập
 * Num1,Num2,Num3
 * B2: So sánh các giá trị với nhau
 * TH1: num1, num2, num3 đều rỗng thì xuất thông báo
 * TH2: num1 >= num2 && num1 >= num3 ( tiếp tục so sánh num2 vs num3) => num2 < num3 (num2 , num3, num1) ngược lại (num3, num2 ,num1)
 * TH3: num2 >= num1 && num2 >= num3 ( tiếp tục so sánh num1 vs num3) => num1 < num3 (num1 , num3, num2) ngược lại (num3, num1 ,num2)
 * TH4: num3 >= num1 && num3 >= num2 (tiếp tục so sánh num1 vs num2) => num2 < num3 (num1, num2, num3) ngược lại (num1, num3, num2)
 *B3: từ các điều kiện và xuất kết quả
 * Khối 3:  outputs
 * số nguyên tăng dần
 */
// hàm check giá trị chung và in kết quả
function Result(value1, value2, value3, message) {
  if (parseInt(value1) >= parseInt(value2)) {
    return (message.innerHTML =
      'Kết quả: ' +
      parseInt(value2) +
      '<' +
      parseInt(value1) +
      '<' +
      parseInt(value3))
  } else {
    return (message.innerHTML =
      'Kết quả: ' +
      parseInt(value1) +
      '<' +
      parseInt(value2) +
      '<' +
      parseInt(value3))
  }
}
// hàm check lấy số lớn nhất
function maxNumber(num1, num2, num3) {
  return parseInt(num1) >= parseInt(num2) && parseInt(num1) >= parseInt(num3)
}

document.getElementById('btnRange').onclick = function () {
  //tạo và lấy giá trị
  var num1 = document.getElementById('number1').value
  var num2 = document.getElementById('number2').value
  var num3 = document.getElementById('number3').value
  // in kết quả
  var txt = document.getElementById('txtRange')
  if (num1 === '' || num2 === '' || num3 === '') {
    txt.style.color = '#9d1a27'
    txt.innerHTML = 'Vui lòng nhập số vào ô!!'
  } else if (maxNumber(num1, num2, num3)) {
    Result(num2, num3, num1, txt)
  } else if (maxNumber(num2, num1, num3)) {
    Result(num1, num3, num2, txt)
  } else if (maxNumber(num3, num2, num1)) {
    Result(num2, num1, num3, txt)
  } else {
    txt.innerHTML = ''
  }
}
