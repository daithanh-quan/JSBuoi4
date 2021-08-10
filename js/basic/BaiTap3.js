/**
 * Khối 1: inputs
 * 3 số nguyên bất kì
 * Khối 2:
 * B1: tạo biến và lấy các giá trị người dùng nhập vào
 * num1, num2, num3
 * B2: tạo biến chẵn,lẽ
 * even,odd
 * B2: đặt điều kiện các số % 2 === 0 => cộng chẵn lên 1 đơn vị (even++)
 * Ngược lại : số lượng lẻ : (odd++)
 * B3: Nhắc người dùng phải nhập giá trị
 * B4: in kết quả
 * Khối 3: outputs
 * Số lượng số chẵn, số lượng số lẻ
 */
document.getElementById('btnResult').onclick = function () {
  // tạo biến và lấy giá trị
  var num1 = document.getElementById('number4').value
  var num2 = document.getElementById('number5').value
  var num3 = document.getElementById('number6').value

  // tạo biến chẵn, lẻ
  var even = 0
  var odd = 0
  // kiểm tra giá trị người dùng nhập
  if (Number(num1) % 2 === 0) {
    even++
  } else {
    odd++
  }
  if (Number(num2) % 2 === 0) {
    even++
  } else {
    odd++
  }
  if (Number(num3) % 2 === 0) {
    even++
  } else {
    odd++
  }
  // nhắc người dùng nhập giá trị và in kết quả
  var result = document.getElementById('txtResult')
  if (num1 === '' || num2 === '' || num3 === '') {
    result.style.color = '#dc3545cc'
    result.innerHTML = 'Vui lòng nhập giá trị!!'
  } else {
    result.style.color = '#21e539'
    result.innerHTML =
      'Kết quả: ' + 'Có ' + even + ' số chẵn ,' + odd + ' số lẽ'
  }
}
