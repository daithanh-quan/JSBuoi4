/**
 * Khối 1: inputs
 * Thành viên trong gia đình
 *
 * Khối 2:
 * B1: Tạo biến và lấy các giá trị của người dùng chọn
 * ChoosePeople
 * B2: so sánh giá trị người dùng chọn vs value ('','B','M','A','E')
 * B3: xuất ra kết quả chào
 *
 * Khối 3: outputs
 * Chào thành viên trong gia đình
 */
// hàm xuất kết quả

document.getElementById('btnHi').onclick = function () {
  // tạo và
  var select = document.getElementById('select').value
  var ChoosePeople = document.getElementById('people').value
  var dad = document.getElementById('dad').value
  var mom = document.getElementById('mom').value
  var brother = document.getElementById('brother').value
  var sister = document.getElementById('sister').value
  //xuất kết quả chào

  var hello = document.getElementById('txtHi')
  switch (select) {
    case ChoosePeople:
      hello.style.color = '#9d1a27'
      hello.innerHTML = 'Vui lòng Chọn Lại!!'
      break
    case dad:
      hello.innerHTML = 'Xin Chào Bố!!'
      hello.style.color = '#1aa92b'
      break
    case mom:
      hello.innerHTML = 'Xin Chào Mẹ!!'
      hello.style.color = '#1aa92b'
      break
    case brother:
      hello.innerHTML = 'Xin Chào Anh Trai!!'
      hello.style.color = '#1aa92b'
      break
    case sister:
      hello.innerHTML = 'Xin Chào Em Gái!!'
      hello.style.color = '#1aa92b'
      break
    default:
      hello.innerHTML = ''
  }
}
