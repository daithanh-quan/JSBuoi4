/**
 * Khối 1: inputs
 * tháng, năm
 * Khối 2:
 * B1: tạo và gán giá trị của người dùng nhập vào
 * month, years
 * B2: kiểm tra giá trị người dùng nhập vào
 * month < 0 && month > 12 || month === "", years > 0 || month === "" => xuất thông báo để người dùng nhập đúng
 *     Ngược lại:
 *     --Nếu: month = 2 && years % 4 === 0 || years % 100 !== 0 || years % 400 === 0 => có 28 ngày
 *     --Nếu month = 2 || 4 || 6 || 9 || 11 => có 30 ngày
 *     Ngược lại có 31 ngày
 *
 *
 *
 * Khối 3: outsput
 * Số ngày trong tháng, năm đó
 */

document.getElementById('btnTotalDay').onclick = function () {
  // tạo biến và lấy giá trị người dùng nhập vào
  var month = document.getElementById('monthX').value
  var years = document.getElementById('yearsX').value
  // kiểm tra và in giá trị
  var txtTotalDay = document.getElementById('txtTotalDay')
  if (
    parseInt(month) <= 0 ||
    parseInt(month) > 12 ||
    month === '' ||
    parseInt(years) < 0 ||
    years === '' ||
    month === ''
  ) {
    txtTotalDay.style.color = '#dc3545cc'
    txtTotalDay.innerHTML = 'Vui lòng nhập đúng giá trị'
  } else {
    if (
      parseInt(month) == 2 &&
      ((parseInt(years) % 4 == 0 && parseInt(years) % 100 != 0) ||
        parseInt(years) % 400 == 0)
    ) {
      txtTotalDay.style.color = '#21e539'
      txtTotalDay.innerHTML = 'Tháng ngày có 28 ngày'
    } else if (
      parseInt(month) == 2 ||
      parseInt(month) == 4 ||
      parseInt(month) == 6 ||
      parseInt(month) == 9 ||
      parseInt(month) == 11
    ) {
      txtTotalDay.style.color = '#21e539'
      txtTotalDay.innerHTML = 'Tháng ngày có 30 ngày'
    } else {
      txtTotalDay.style.color = '#21e539'
      txtTotalDay.innerHTML = 'Tháng ngày có 31 ngày'
    }
  }
}
