/**
 * Khối 1: inputs
 * Số có ba chữ số
 *
 * Khối 2 :
 * B1: tạo biến và lấy giá trị người dùng nhập
 * number
 * B2: tạo các biến hàng trăm, chục, đơn vị
 * hundred, dozen, unit
 * B2: kiểm tra giá trị người dùng đã nhập đúng chưa =>  xuất kết quả nhắc nhở
 * ngược lại: nếu đã nhập đúng
 * kiểm tra switch(number / 100){case1,2,3,4,5,6,7,8,9.}=> hundred ="Một", "Hai"....
 *kiểm tra switch((number % 100)/10){case0,1,2,3,4,5,6,7,8,9.}=> dozen ="", "Một", "Hai"...
 *kiểm tra switch((number % 100)%10 ){case0,1,2,3,4,5,6,7,8,9} => unit ="", "Một", " Hai" ...
 *B3: Xuất kết quả
 * Khối 3: outputs
 * Đọc số
 */
// hàm kiểm tra các giá trị
function checkValue(value1, zero, one, five, name) {
  var result = ''
  switch (value1) {
    case 0:
      result = zero
      break
    case 1:
      result = one
      break
    case 2:
      result = 'Hai' + name
      break
    case 3:
      result = 'Ba' + name
      break
    case 4:
      result = 'Bốn' + name
      break
    case 5:
      result = five + name
      break
    case 6:
      result = 'Sáu' + name
      break
    case 7:
      result = 'Bảy' + name
      break
    case 8:
      result = 'Tám' + name
      break
    case 9:
      result = 'Chín' + name
      break
    default:
      result = ''
  }
  return result
}
document.getElementById('btnRead').onclick = function () {
  // tạo biến và lấy giá trị người dùng nhập
  var number = document.getElementById('threeDigit').value
  // tạo biến hàng trăm , hàng chục, hàng đơn vị
  var hundred = ''
  var dozen = ''
  var unit = ''
  // kiểm tra và in ra kết quả
  var txtRead = document.getElementById('txtRead')
  if (number < 100 || number === '' || number > 999) {
    txtRead.style.color = '#dc3545cc'
    txtRead.innerHTML = 'Vui lòng nhập vào ba chữ số!!'
  } else {
    // kiểm tra hàng trăm
    hundred = checkValue(parseInt(number / 100), '', 'Một', 'Năm', '')
    // kiểm tra hàng chục
    dozen = checkValue(
      parseInt((number % 100) / 10),
      ' lẻ ',
      ' mười ',
      'Năm',
      ' mươi '
    ).toLowerCase()
    // kiểm tra hàng đơn vị
    unit = checkValue(
      parseInt((number % 100) % 10),
      '',
      'một',
      'lăm',
      ''
    ).toLowerCase()
    txtRead.style.color = '#21e539'
    txtRead.innerHTML = hundred + ' trăm ' + dozen + unit
  }
}
