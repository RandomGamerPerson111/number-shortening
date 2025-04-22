const abbreviationssimple = ["M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "No"]
const ComplexEarly = ["","U","D","T","Qa","Qn","Sx","Sp","O","N"]
const ComplexLate = ["Dc", "Vg", "Tg", "Ug", "Qi", "Se", "Sg", "Og", "Ng", "Ce"]
var abbreviations = []
for (var item in abbreviationssimple) {
  abbreviations.push(abbreviationssimple[item])
}
for (var item2 in ComplexLate) {
  for (var Early in ComplexEarly) {
    abbreviations.push(ComplexEarly[Early]+ComplexLate[item2])
  }
}
for (var thingy in abbreviations) {
  console.log(abbreviations[thingy])
}
