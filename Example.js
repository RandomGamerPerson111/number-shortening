const abbreviationssimple = ["M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "No"]
const ComplexEarly = ["","U","D","T","Qa","Qn","Sx","Sp","O","N"]
const ComplexLate = ["Dc", "Vg", "Tg", "Ug", "Qi", "Se", "Sg", "Og", "Ng", "Ce"]
var abbreviations = {}
for (var item in abbreviationssimple) {
  abbreviations.push(item)
}
for (var item in ComplexLate) {
  for (var Early in ComplexEarly) {
    abbreviations.push(Early+item)
  }
}
console.log(abbreviations)
