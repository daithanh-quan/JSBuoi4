/**
 * Khối 1: inputs
 * 3 số nguyên
 * Khối 2:
 * B1: tạo và lấy giá trị người dùng nhập
 * Num1,Num2,Num3
 * B2: So sánh các giá trị với nhau
 * TH1: num1 > num2 && num1 > num3 ( tiếp tục so sánh num2 vs num3) => num2 < num3 (num2 , num3, num1) ngược lại (num3, num2 ,num1)
 * TH2:   num2 > num1 && num2 > num3 ( tiếp tục so sánh num1 vs num3) => num1 < num3 (num1 , num3, num2) ngược lại (num3, num1 ,num2)
 * TH3: num1, num2, num3 đều rỗng thì xuất thông báo
 * Ngược lại (tiếp tục so sánh num2 vs num3) => num2 < num3 (num1, num2, num3) ngược lại (num1, num3, num2)
 * Khối 3:  outputs
 * số nguyên tăng dần
 */

document.getElementById('btnRange').onclick = function () {
  //tạo và lấy giá trị
  var num1 = document.getElementById('number1').value
  var num2 = document.getElementById('number2').value
  var num3 = document.getElementById('number3').value
  // in kết quả
  var txt = document.getElementById('txtRange')
  if (parseInt(num1) > parseInt(num2) && parseInt(num1) > parseInt(num3)) {
    if (parseInt(num2) > parseInt(num3)) {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num3) +
        '<' +
        parseInt(num2) +
        '<' +
        parseInt(num1)
    } else if (parseInt(num2) == parseInt(num3)) {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num3) +
        '<' +
        parseInt(num2) +
        '<' +
        parseInt(num1)
    } else {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num2) +
        '<' +
        parseInt(num3) +
        '<' +
        parseInt(num1)
    }
  } else if (num1 === '' || num2 === '' || num3 === '') {
    txt.style.color = '#9d1a27'
    txt.innerHTML = 'Vui lòng nhập số vào ô!!'
  } else if (
    parseInt(num2) > parseInt(num1) &&
    parseInt(num2) > parseInt(num3)
  ) {
    if (parseInt(num1) > parseInt(num3)) {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num3) +
        '<' +
        parseInt(num1) +
        '<' +
        parseInt(num2)
    } else if (parseInt(num1) == parseInt(num3)) {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num3) +
        '<' +
        parseInt(num1) +
        '<' +
        parseInt(num2)
    } else {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num1) +
        '<' +
        parseInt(num3) +
        '<' +
        parseInt(num2)
    }
  } else if (
    parseInt(num3) > parseInt(num2) &&
    parseInt(num3) > parseInt(num1)
  ) {
    if (parseInt(num2) > parseInt(num1)) {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num1) +
        '<' +
        parseInt(num2) +
        '<' +
        parseInt(num3)
    } else if (parseInt(num2) == parseInt(num1)) {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num1) +
        '<' +
        parseInt(num2) +
        '<' +
        parseInt(num3)
    } else {
      txt.style.color = '#21e539'
      txt.innerHTML =
        'Kết quả: ' +
        parseInt(num2) +
        '<' +
        parseInt(num1) +
        '<' +
        parseInt(num3)
    }
  } else if (
    parseInt(num3) == parseInt(num2) &&
    parseInt(num3) == parseInt(num1)
  ) {
    txt.style.color = '#21e539'
    txt.innerHTML =
      'Kết quả: ' + parseInt(num2) + '<' + parseInt(num1) + '<' + parseInt(num3)
  } else {
    txt.innerHTML = ''
  }
}
