const generateSlug = (strToReplace: string): string => {
  var comAcento = 'áàãâäéèêëíìîïóòõôöúùûüçñÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇÑ'
  var semAcento = 'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'
  var caracteres = '´`¨~.,:=+-!?()[]/_&*@#$%^"\'|<>{};'

  strToReplace.split('').forEach((_, l) => {
    comAcento.split('').forEach((_, l2) => {
      if (strToReplace[l] === comAcento[l2]) {
        strToReplace = strToReplace.replace(strToReplace[l], semAcento[l2])
      }

      if (strToReplace[l] === caracteres[l2]) {
        strToReplace = strToReplace.replace(strToReplace[l], '')
      }
    })
  })
  
  return strToReplace.toLowerCase().replace(/\s+/g, '-')
}

export default generateSlug