// function to print a very long message with a destination
var travelTo = function (destination) {
  window.confirm('"With your mind thus concentrated, purified, and bright, unblemished, free from defects, pliant, malleable, steady, and attained to imperturbability, you direct and incline it to the modes of supranormal powers. You wield manifold supranormal powers. Having been one you become many; having been many you becomes one. You appear. You vanish. You go unimpeded through walls, ramparts, and mountains as if through space. You dive in and out of the earth as if it were water. You walk on water without sinking as if it were dry land. Sitting cross-legged you fly through the air like a winged bird."')
  window.confirm('We have made it to ' + destination + '!')
}

// function to normalize input
var normalize = function (strToNormalize) {
  // return the string with no extra whitespace and change case to lower, use more later on
  strToNormalize = strToNormalize || ''
  strToNormalize = strToNormalize.toLowerCase().trim()
  return strToNormalize
}

var randomWords = function (numWords, langCode) {
  return numWords
}

//
//  Start of the program
//
var language = window.prompt('Namaste, Great Buddha 🙏🛐. Today you must learn either Chinese, Japanese, or Korean! Which will it be?')
language = normalize(language)

// generate random number
var randomDestinationNumber = Math.random()

// Learning Chinese
if (language === 'chinese') {
  if (randomDestinationNumber > 0.01) {
    window.confirm('A wise choice, Great Buddha. We shall depart for Shanghai immediately.')
    travelTo('Shanghai')

    // How many words to learn
    var number = window.prompt('How many words would you like to know in Chinese?')
    number = parseInt(number)
    if (number > 10) {
      window.confirm('That\'s too much to learn all at once. Let\'s just try 5.')
      number = 5
    }
    // print them out
    randomWords(number, 'ch')
    var specificWord = window.prompt('Now that we have that, is there anything specific you would like to know?')
    specificWord = normalize(specificWord)
    // print that out
    var numWord = window.prompt('Finally, lets learn a number in Chinese')
    numWord = parseInt(numWord)
    // print it out

  } else {
    window.confirm('A wise choice, Great Buddha. We shall depart for Beijing immediately.')
    travelTo('Beijing')
    window.confirm('Hmm, it looks like they are shooting a movie here.')
    window.confirm('"You instead spend your day learning acting from Jet Li."')
  }

// Learning Japanese
} else if (language === 'japanese') {
  if (randomDestinationNumber > 0.01) {
    window.confirm('A wise choice, Great Buddha. We shall depart for Tokyo immediately.')
    travelTo('Tokyo')

    // How many words to learn
    var number = window.prompt('How many words would you like to know in Japanese?')
    number = parseInt(number)
    if (number > 10) {
      window.confirm('That\'s too much to learn all at once. Let\'s just try 5.')
      number = 5
    }
    // print them out
    randomWords(number, 'ja')
    var specificWord = window.prompt('Now that we have that, is there anything specific you would like to know?')
    specificWord = normalize(specificWord)
    // print that out
    var numWord = window.prompt('Finally, lets learn a number in Japanese')
    numWord = parseInt(numWord)
    // print it out

  } else {
    window.confirm('A wise choice, Great Buddha. We shall depart for Okinawa immediately.')
    travelTo('Okinawa')
    window.confirm('Hey its Mr. Miyagi from the Karate Kid!')
    window.confirm('"You instead spend your day learning karate from Mr. Miyagi."')
  }

// Learning Korean
} else if (language === 'korean') {
  if (randomDestinationNumber > 0.01) {
    window.confirm('A wise choice, Great Buddha. We shall depart for Busan immediately.')
    travelTo('Busan')

    // How many words to learn
    var number = window.prompt('How many words would you like to know in Korean?')
    number = parseInt(number)
    if (number > 10) {
      window.confirm('That\'s too much to learn all at once. Let\'s just try 5.')
      number = 5
    }
    // print them out
    randomWords(number, 'ko')
    var specificWord = window.prompt('Now that we have that, is there anything specific you would like to know?')
    specificWord = normalize(specificWord)
    // print that out
    var numWord = window.prompt('Finally, lets learn a number in Korean')
    numWord = parseInt(numWord)
    // print it out

  } else {
    window.confirm('A wise choice, Great Buddha. We shall depart for Seoul immediately.')
    travelTo('Seoul')
    window.confirm('Wow it looks like there is a StarCraft tournament going on!')
    window.confirm('"You instead spend your day learning StarCraft: Brood War from Jaedong."')
  }

// Something other than Chinese, Japanese, or Korean is entered
} else {
  window.confirm('That wasn\'t an option. I\'m sorry, you must not be the Great Buddha. I\'m sorry for the confusion.')
}
