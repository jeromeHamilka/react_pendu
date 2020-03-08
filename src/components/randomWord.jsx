
function randomWord() {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }
    const words = [
        'abaisser',
        'bonjour',
        'bouteil',
        'figue',
        'poire',
        'maison',
        'chips',
        'camion',
        'test',
        'jaune',
        'casque',
        'bonbon',
        'cannette',
        'assiete',
        'tabac',
        'verre',
        'abaisser',
        'abattoir',
        'apprivoiser',
        'argumentation',
        'aristocratique',
        'broderie',
        'calculatrice',
        'excessivement',
        'fluctuation',
        'foisonnement',
        'guillotine',
        'habitudes',
        'heureusement',
        'hippopotame',
        'kidnapper'


        ]
    let i = getRandomInt(words.length)
    return words[i];
  }

  export default randomWord;