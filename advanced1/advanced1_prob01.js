// advanced1_prob01.js

function madlibs(template) {
  let wordObj = {
    noun: ['man', 'woman', 'boy', 'girl', 'infant'],
    verb: ['sleeps', 'spills food', 'cries', 'uses the potty', 'plays'],
    adjective: ['angry', 'happy', 'tired', 'tiny', 'strong'],
    adverb: ['slowly', 'noisely', 'sleepily', 'carefully', 'quietly' ]
  };
  
  Object.keys(wordObj).forEach(key => {
    let regexp = new RegExp(`\\b${key}\\b`, 'g');
    
    template = template.replace(regexp, _ => {
      let randomIndex = Math.floor(Math.random() * wordObj[key].length);
      return wordObj[key][randomIndex];
    });
  });
  
  return template;
}

let template1 = 'The adjective noun verb adverb.';

let template2 = 'Hey, noun! Why are you so adjective? He verb adverb, but ' +
  'you act like a noun. I feel very adjective because my noun, too, ' +
  'verb adverb.';

console.log(madlibs(template2));
  
