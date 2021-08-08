/**
 * Khối 1: inputs
 * tên sv1 , tọa độ x1, y1
 * tên sv2 , tọa độ x2, y2
 * tên sv3 , tọa độ x3, y3
 * tọa độ trường x,y
 *
 * Khối 2:
 * B1: tạo biến và lấy giá trị người dùng nhập
 * name1,name2,name3 (tên 3 học sinh)
 * x,x1,x2,x3,y,y1,y2,y3(tọa độ của từng học sinh và trường)
 * B2:
 * giả sử người dùng nhập đúng (ko kiểm tra giá trị đầu vào)
 * điều kiện 1: x - x1 > x - x2 > x - x3 && y-y1 > y-y2 > y-y3 => name1 xa trường nhất
 * điều kiện 2: x - x2 > x - x1 > x - x3 && y-y2 > y-y1 > y-y3 => name2 xa trường nhất
 * ngược lại : name3 xa trường nhất
 * Khối 3: outputs
 * học sinh xa nhất trường
 */

document.getElementById('btnFind').onclick = function () {
  // hàm lấy giá trị từng ô input
  function takeValue(value) {
    return document.getElementById(value).value
  }
  // tạo biến và lấy giá trị người dùng nhập
  var name1 = takeValue('name1')
  var name2 = takeValue('name2')
  var name3 = takeValue('name3')
  var x = takeValue('SchoolX')
  var y = takeValue('SchoolY')
  var x1 = takeValue('x1')
  var y1 = takeValue('y1')
  var x2 = takeValue('x2')
  var y2 = takeValue('y2')
  var x3 = takeValue('x3')
  var y3 = takeValue('y3')
  // kiểm tra và in kết quả
  var txtFind = document.getElementById('txtFind')
  if (
    x - x1 > x - x2 &&
    x - x1 > x - x3 &&
    y - y1 > y - y2 &&
    y - y1 > y - y3
  ) {
    txtFind.style.color = '#21e539'
    txtFind.innerHTML = 'Sinh viên xa trường nhất: ' + name1
  } else if (
    x - x2 > x - x1 &&
    x - x2 > x - x3 &&
    y - y2 > y - y1 &&
    y - y2 > y - y3
  ) {
    txtFind.style.color = '#21e539'
    txtFind.innerHTML = 'Sinh viên xa trường nhất: ' + name2
  } else {
    txtFind.style.color = '#21e539'
    txtFind.innerHTML = 'Sinh viên xa trường nhất: ' + name3
  }
}
