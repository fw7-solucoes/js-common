const generateSlug = strToReplace => {
  var comAcento = 'áàãâäéèêëíìîïóòõôöúùûüçñÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇÑ'
  var semAcento = 'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'
  var caracteres = '´`¨~.,:=+-!?()[]/_&*@#$%^"\'|<>{};'

  for (const l in strToReplace) {
    for (const l2 in comAcento) {
      if (strToReplace[l] === comAcento[l2]) {
        strToReplace = strToReplace.replace(strToReplace[l], semAcento[l2])
      }
      if (strToReplace[l] === caracteres[l2]) {
        strToReplace = strToReplace.replace(strToReplace[l], '')
      }
    }
  }
  
  return strToReplace.toLowerCase().replace(/\s+/g, '-')
}

module.exports = generateSlug