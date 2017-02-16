var travelTo = function (destination) {
  window.confirm('"With your mind thus concentrated, purified, and bright, unblemished, free from defects, pliant, malleable, steady, and attained to imperturbability, you direct and incline it to the modes of supranormal powers. You wield manifold supranormal powers. Having been one you become many; having been many you becomes one. You appear. You vanish. You go unimpeded through walls, ramparts, and mountains as if through space. You dive in and out of the earth as if it were water. You walk on water without sinking as if it were dry land. Sitting cross-legged you fly through the air like a winged bird."')
  window.confirm('We have made it to ' + destination + '! To be continued...')
}

var normalize = function (strToNormalize) {
  // return the string with no extra whitespace and change case to lower, use more later on
  strToNormalize = strToNormalize || ''
  strToNormalize.toLowerCase().trim()
  return strToNormalize
}

var googleTranslateElementInit = function (language = 'en') {
  window.google.translate.TranslateElement({pageLanguage: language}, 'google_translate_element')
}

var translate = document.getElementById('google_translate_element')

var language = window.prompt('Namaste, Great Buddha 🙏🛐. Today you must learn either Chinese, Japanese, or Korean! Which will it be?')
language = normalize(language)

var randomDestinationNumber = Math.random()

if (language === 'chinese') {
  if (randomDestinationNumber > 0.5) {
    window.confirm('A wise choice, Great Buddha. We shall depart for Shanghai immediately.')
    travelTo('Shanghai')
  } else {
    window.confirm('A wise choice, Great Buddha. We shall depart for Beijing immediately.')
    travelTo('Beijing')
  }
  var first = window.prompt('What would you like to know in Chinese?')
  first = normalize(first)
  translate.textContent = first
  googleTranslateElementInit('zh-TW')
  window.prompt('Nice, whats next?')
} else if (language === 'japanese') {
  if (randomDestinationNumber > 0.01) {
    window.confirm('A wise choice, Great Buddha. We shall depart for Tokyo immediately.')
    travelTo('Tokyo')
  } else {
    window.confirm('A wise choice, Great Buddha. We shall depart for Okinawa immediately.')
    travelTo('Okinawa')
  }
} else if (language === 'korean') {
  if (randomDestinationNumber > 0.5) {
    window.confirm('A wise choice, Great Buddha. We shall depart for Seoul immediately.')
    travelTo('Seoul')
  } else {
    window.confirm('A wise choice, Great Buddha. We shall depart for Busan immediately... But I don\'t really know where that is... the only place in South Korea that I know is Seoul. Let\'s go there instead.')
    travelTo('Seoul')
  }
  // window.confirm('I hear Seoul has a really big StarCraft Brood War scene, and theres an ASL Brood War tournament tonight! Let\'s go Buddha!')
  // var hello = window.prompt('Okay, so the standard greeting in Korean is 안녕, pronounced anyoung. Now say it back to me.')
  // hello = normalize(hello)
  // while (hello !== 'anyoung') {
  //   hello = window.prompt('No it is anyoung. ANYOUNG. Say it with me.')
  //   hello = normalize(hello)
  // }
  // var me = window.prompt('Me in korean is 나를, or naleul. Try that one')
  // me = normalize(me)
  // var you = window.prompt('You in korean is 당신, or dangsin. Go ahead.')
  // you = normalize(you)
} else {
  window.confirm('That wasn\'t an option. I\'m sorry, you must not be the Great Buddha. I\'m sorry for the confusion.')
}
