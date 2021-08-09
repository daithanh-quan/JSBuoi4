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
 *kiểm tra switch((number % 100)/10){case1,2,3,4,5,6,7,8,9.}=> dozen = "Một", "Hai"...
 *kiểm tra switch((number % 100)%10 ){case1,2,3,4,5,6,7,8,9} => unit = "Một", " Hai" ...
 *B3: Xuất kết quả
 * Khối 3: outputs
 * Đọc số
 */

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
    switch (parseInt(number / 100)) {
      case 1:
        hundred = 'Một'
        break
      case 2:
        hundred = 'Hai'
        break
      case 3:
        hundred = 'Ba'
        break
      case 4:
        hundred = 'Bốn'
        break
      case 5:
        hundred = 'Năm'
        break
      case 6:
        hundred = 'Sáu'
        break
      case 7:
        hundred = 'Bảy'
        break
      case 8:
        hundred = 'Tám'
        break
      case 9:
        hundred = 'Chín'
        break
      default:
        hundred = ''
    }
    switch (parseInt((number % 100) / 10)) {
      case 0:
        if (parseInt((number % 100) % 10) !== 0) {
          dozen = 'lẻ '
        } else {
          dozen = ''
        }
        break
      case 1:
        dozen = 'mười '
        break
      case 2:
        dozen = 'hai mươi '
        break
      case 3:
        dozen = 'ba mươi '
        break
      case 4:
        dozen = 'bốn mươi '
        break
      case 5:
        dozen = 'năm mươi '
        break
      case 6:
        dozen = 'sáu mươi '
        break
      case 7:
        dozen = 'bảy mươi '
        break
      case 8:
        dozen = 'tám mươi '
        break
      case 9:
        dozen = 'chín mươi '
        break
      default:
        dozen = ''
    }
    switch (parseInt((number % 100) % 10)) {
      case 0:
        unit = ''
        break
      case 1:
        unit = 'một'
        break
      case 2:
        unit = 'hai'
        break
      case 3:
        unit = 'Ba'
        break
      case 4:
        unit = 'bốn'
        break
      case 5:
        unit = 'năm'
        break
      case 6:
        unit = 'sáu'
        break
      case 7:
        unit = 'bảy'
        break
      case 8:
        unit = 'tám'
        break
      case 9:
        unit = 'chín'
        break
      default:
        unit = ''
    }
    txtRead.style.color = '#21e539'
    txtRead.innerHTML = hundred + ' trăm ' + dozen + unit
  }
}
