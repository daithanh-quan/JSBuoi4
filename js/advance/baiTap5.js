/**
 * Khối 1: inputs
 * Ngày, Tháng, Năm
 *
 * Khối 2:
 * B1: Tạo biến và lấy giá trị của người dùng nhập vào
 * date, month, year
 *
 * B2: TH: Ngày tiếp theo:
 * kiểm tra: giá trị rỗng || bằng không || vượt quá giá trị => nhắc người dùng nhập
 *       Ngược lại:---Nếu date == 28 và month = 2  =>  date = 1 và month++
 *                 ---Nếu date = 30 và month = 4 || 6 || 9 || 11 => date = 1 và month++
 *                 ---Nếu date = 31 và month = 1 || 3 || 5 || 7 || 8 || 10  => date = 1, month++
 *                 ---Nếu date 31 và month = 12 => date = 1, month= 1, year++
 *                 Ngược lại date++
 *     TH: Ngày hôm qua ( thay đổi phần Ngược lại):
 *         --Nếu date = 1 và month = 3  => date = 28 và month--
 *         --Nếu date = 1 và month = 1 || 3 || 5 || 7 || 8 || 10 || 12 => date = 30 ,month--
 *         --Nếu date =1  và month = 1 => date = 31, month= 12, year--
 *         --Nếu date = 1 và month = 4 || 6 || 9 || 11 => date = 31 và month--
 *         Ngược lại date--
 * Khối 3 : outputs
 * Ngày hôm qua, ngày tiếp theo
 */

// nút ngày tiếp theo
document.getElementById('btnNextDay').onclick = function () {
  // tạo biến và lấy giá trị
  var date = document.getElementById('date').value
  var month = document.getElementById('month').value
  var years = document.getElementById('years').value
  // kiểm tra giá trị người dùng nhập và in kết quả
  var txtNextDay = document.getElementById('txtNextDay')
  // kiểm tra người dùng nếu chưa nhập và nhập số 0
  if (
    date === '' ||
    date <= 0 ||
    month === '' ||
    month > 12 ||
    month <= 0 ||
    years === '' ||
    years <= 0
  ) {
    txtNextDay.style.color = '#dc3545cc'
    txtNextDay.innerHTML = 'Vui lòng nhập lại giá trị!!'
  }
  // kiểm tra người dùng là tháng này nhuận
  else if (date > 29 && month == 2) {
    txtNextDay.style.color = '#dc3545cc'
    txtNextDay.innerHTML = 'Tháng này chỉ có 29 ngày, nhập lại giá trị!!'
  }
  // kiểm tra người dùng  những tháng này chỉ có 30 ngày
  else if (
    date > 30 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    txtNextDay.style.color = '#dc3545cc'
    txtNextDay.innerHTML = 'Tháng này chỉ có 30 ngày, nhập lại giá trị!!'
  }
  // kiểm tra người dùng những  tháng này chỉ có 31 ngày
  else if (
    date > 31 &&
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12)
  ) {
    txtNextDay.style.color = '#dc3545cc'
    txtNextDay.innerHTML = 'Tháng này chỉ có 31 ngày, nhập lại giá trị!!'
  }
  //Ngược lại:
  else {
    if (date == 29 && month == 2) {
      date = 1
      month++
    } else if (
      date == 30 &&
      (month == 4 || month == 6 || month == 9 || month == 11)
    ) {
      date = 1
      month++
    } else if (
      date == 31 &&
      (month == 1 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 9 ||
        month == 10)
    ) {
      date = 1
      month++
    } else if (date == 31 && month == 12) {
      date = 1
      month = 1
      years++
    } else {
      date++
    }
    txtNextDay.style.color = '#21e539'
    txtNextDay.innerHTML =
      'Ngày/Tháng/Năm: ' +
      parseInt(date) +
      '/' +
      parseInt(month) +
      '/' +
      parseInt(years)
  }
}

//Nút ngày hôm qua
document.getElementById('btnYesterday').onclick = function () {
  // tạo biến và lấy giá trị
  var date = document.getElementById('date').value
  var month = document.getElementById('month').value
  var years = document.getElementById('years').value
  // kiểm tra giá trị người dùng nhập và in kết quả
  var txtYesterday = document.getElementById('txtYesterday')
  // kiểm tra người dùng nếu chưa nhập và nhập số 0
  if (
    date === '' ||
    date <= 0 ||
    month === '' ||
    month > 12 ||
    month <= 0 ||
    years === '' ||
    years <= 0
  ) {
    txtYesterday.style.color = '#dc3545cc'
    txtYesterday.innerHTML = 'Vui lòng nhập lại giá trị!!'
  }
  // kiểm tra người dùng là tháng này nhuận
  else if (date > 29 && month == 2) {
    txtYesterday.style.color = '#dc3545cc'
    txtYesterday.innerHTML = 'Tháng này chỉ có 29 ngày, nhập lại giá trị!!'
  }
  // kiểm tra người dùng  những tháng này chỉ có 30 ngày
  else if (
    date > 30 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    txtYesterday.style.color = '#dc3545cc'
    txtYesterday.innerHTML = 'Tháng này chỉ có 30 ngày, nhập lại giá trị!!'
  }
  // kiểm tra người dùng những  tháng này chỉ có 31 ngày
  else if (
    date > 31 &&
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12)
  ) {
    txtYesterday.style.color = '#dc3545cc'
    txtYesterday.innerHTML = 'Tháng này chỉ có 31 ngày, nhập lại giá trị!!'
  }
  //Ngược lại:
  else {
    if (date == 1 && month == 3) {
      date = 29
      month--
    } else if (
      date == 1 &&
      (month == 4 || month == 2 || month == 6 || month == 9 || month == 11)
    ) {
      date = 31
      month--
    } else if (
      date == 1 &&
      (month == 12 || month == 5 || month == 7 || month == 9 || month == 10)
    ) {
      date = 30
      month--
    } else if (date == 1 && month == 1) {
      date = 31
      month = 12
      years--
    } else {
      date--
    }
    txtYesterday.style.color = '#21e539'
    txtYesterday.innerHTML =
      'Ngày/Tháng/Năm: ' +
      parseInt(date) +
      '/' +
      parseInt(month) +
      '/' +
      parseInt(years)
  }
}
