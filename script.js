// Function to normalize input
var normalize = function (strToNormalize) {
  // return the string with no extra whitespace and change case to lower, use more later on
  strToNormalize = strToNormalize || ''
  strToNormalize = strToNormalize.toLowerCase().trim()
  return strToNormalize
}

var weeksToLive = function (randomNum) {
  return Math.ceil(randomNum * 7) + 1
}

var area = window.prompt('Where are you hurting (head or chest)')
area = normalize(area)

if (area === 'head') {
  window.alert('We\'ll get Dr. Shepherd to come check on you.')
  var hallucinations = window.confirm('Dr Shepherd: Have you been experiencing hallucinations?')
  if (hallucinations) {
    window.alert('Dr Shepherd: I\'ll run an MRI to get a better look at what\'s going on.')
    var successPercent = Math.random()
    var surgery = window.confirm('Dr Shepherd: The MRI shows you have a brain tumor. The success rate is ' + Math.ceil(successPercent * 100) + '%. If we do not operate you will have around ' + weeksToLive(successPercent) + ' weeks to live. Would you like to undergo the surgery?')
    if (surgery) {
      window.alert('Okay we are going to get you prepped for surgery')
      var success = Math.random()
      if (successPercent < success) {
        window.alert('************ You died in surgery ************')
      } else {
        window.alert('Dr Shepherd: Congrats, the surgery was a success!')
      }
    } else {
      window.alert('We will have to send you home then. I\'m sorry we couldn\'t do anything more.')
    }
  } else {
    var memoryLoss = window.confirm('Dr Shepherd: Have you been experiencing memory loss?')
    if (memoryLoss) {
      window.alert('Dr Shepherd: I\'ll run an MRI to get a better look at what\'s going on.')
      window.alert('Dr Shepherd: The MRI shows signs of Alzheimers. There is no cure but we can treat it. I can write a prescription to delay the onset of the disease but that is all I can do.')
    } else {
      window.alert('Dr Shepherd: We\'ll run a CT scan to see what we can do.')
      window.alert('We couldn\'t see anything on the CT scan so it is nothing serious and we will send you down to the clinic to see Dr. Bailey')
    }
  }
} else if (area === 'chest') {
  window.alert('We\'ll get Dr. Burke to come check on you.')
  var heartProblems = window.prompt('Dr. Burke: How many people in your family have had a history of heart problems?')
  heartProblems = normalize(heartProblems)
  heartProblems = parseInt(heartProblems)
  if (heartProblems > 2) {
    window.alert('Dr. Burke: We\'ll run an EKG and figure out what is going on.')
    window.alert('Dr. Burke: The EKG shows that you have heart disease. We need to operate heart bypass surgery. There is always a risk associated with surgery but I\'m the best shot you\'ve got.')
    window.alert('Dr. Burke: The surgery was a success!')
  } else if (heartProblems <= 2) {
    window.alert('Dr. Burke: You have an irregular heartbeart. I\'m going to give you a pacemaker and that should fix it.')
    window.alert('Dr. Burke: That was it! The pacemake is installed and we will need you to check in every year so we can make sure it is still working. If you experience any problems be sure to come back.')
  } else {
    window.alert('Dr. Burke: We will have someone from Psych come down and talk to you.')
  }
} else {
  window.confirm('Because it is not the head or chest we will send you down to the clinic with Dr. Bailey')
}
