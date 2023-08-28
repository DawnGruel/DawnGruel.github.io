/**
 * The function checks if the current time is between 6:00 and 18:00.
 * @returns a boolean value. It returns true if the current time is between 6:00 and 18:00 (inclusive),
 * and false otherwise.
 */
function isTimeBetween6to18() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  // 判断当前时间是否在6:00到18:00之间
  if (currentHour >= 6 && currentHour < 18) {
    return true;
  } else {
    return false;
  }
}

/**
 * The function checks the user agent string to determine if the user is using a mobile device or a PC.
 * @returns either 1 or 2.
 */
function checkagent() {
  let sUserAgent = navigator.userAgent.toLowerCase(),
    bIsIpad = sUserAgent.match(/ipad/i) == "ipad",
    bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os",
    bIsMidp = sUserAgent.match(/midp/i) == "midp",
    bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
    bIsUc = sUserAgent.match(/ucweb/i) == "ucweb",
    bIsAndroid = sUserAgent.match(/android/i) == "android",
    bIsCE = sUserAgent.match(/windows ce/i) == "windows ce",
    bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile",
    bIsPC = !(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM == true)
  // console.log(sUserAgent)
  let equipment = {
    isIpad: bIsIpad,
    isPhone: bIsIphoneOs,
    isAndroid: bIsAndroid,
    isPc: bIsPC
  };
  // console.log('equipment', equipment)
  if (equipment.isAndroid || equipment.isPhone || equipment.isWechat || equipment.isIpad) {
    return 1;
  } else if (equipment.isPc) {
    return 2;
  }
}

/**
 * The function "timepiece" checks the value of an element with the id "time" and if it is equal to 0,
 * it redirects the user to a specific URL, otherwise it decreases the value by 1 and sets a timeout to
 * call itself again after 1 second.
 */
function timepiece(url) {
  var time = document.getElementById('time').innerText;
  if (time == 0) {
    clearTimeout(timeout)
    document.getElementById('text-value').innerText = '正在跳转...'
    window.location.href = url
  } else {
    document.getElementById('time').innerText = time - 1
    timeout = setTimeout(function() {
      timepiece(url)
    }, 1000)
  }
}