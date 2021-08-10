/**
 * Khối 1: inputs
 * Độ dài 3 cạnh
 *
 * Khối 2:
 * B1: tạo và lấy giá trị người dùng nhập vào
 * edge1,edge2,edge3
 * B2: nhắc người dùng nhập giá trị
 * B3: So sánh 3 cạnh
 * edge1 = edge2 = edge3 => tam giác đều
 * edge1 = edge2 != edge3 => tam giác cân
 * edge1 ** 2 = edge2 **2 + edge3 **3 => tam giác vuông
 * Ngược lại là tam giác bình thường
 *
 *
 *
 * Khối 3: outputs
 * Tam giác gì (cân, vuông, đều)
 */

document.getElementById('btnGuess').onclick = function () {
  // tạo biến và lấy giá trị người dùng nhập
  var edge1 = document.getElementById('edge1').value
  var edge2 = document.getElementById('edge2').value
  var edge3 = document.getElementById('edge3').value
  // in kết quả
  var txtGuess = document.getElementById('txtGuess')
  if (edge1 === '' || edge2 === '' || edge3 === '') {
    txtGuess.style.color = '#dc3545cc'
    txtGuess.innerHTML = 'Vui lòng nhập giá trị!!'
  } else if (edge1 < 0 || edge2 < 0 || edge3 < 0) {
    txtGuess.style.color = '#dc3545cc'
    txtGuess.innerHTML = 'Vui lòng nhập giá trị lớn hơn 0!!'
  } else if (edge1 === edge2 && edge1 === edge3) {
    txtGuess.style.color = '#21e539'
    txtGuess.innerHTML = 'Đây là tam giác đều'
  } else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
    txtGuess.style.color = '#21e539'
    txtGuess.innerHTML = 'Đây là tam giác cân'
  } else if (
    edge1 ** 2 == edge2 ** 2 + edge3 ** 2 ||
    edge2 ** 2 == edge1 ** 2 + edge3 ** 2 ||
    edge3 ** 2 == edge1 ** 2 + edge2 ** 2
  ) {
    txtGuess.style.color = '#21e539'
    txtGuess.innerHTML = 'Đây là tam giác vuông'
  } else {
    txtGuess.style.color = '#21e539'
    txtGuess.innerHTML = 'Đây là tam giác thường'
  }
}
