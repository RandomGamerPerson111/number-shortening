const abbreviationssimple = ["M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "No"]
const Complex1 = ["","U","D","T","Qa","Qn","Sx","Sp","O","N"]
const Complex2 = ["Dc", "Vg", "Tg", "Ug", "Qi", "Se", "Sg", "Og", "Ng",]
const Complex3 = ["Ce", "Du", "Tr", "Qu", "Qt", "Sc", "St", "Ot", "Nn"]
var abbreviations = []
for (var item in abbreviationssimple) {
  abbreviations.push(abbreviationssimple[item])
}
for (var item2 in Complex2) {
  for (var Early in Complex1) {
    abbreviations.push(Complex1[Early]+Complex2[item2])
  }
}
for (var thingy in abbreviations) {
  console.log(abbreviations[thingy])
}
