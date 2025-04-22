function abbrev(num) {
  const abbreviationssimple = ["", "K", "M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "No"]
  const Complex1 = ["","U","D","T","Qa","Qn","Sx","Sp","O","N"]
  const Complex2 = ["", "Dc", "Vg", "Tg", "Ug", "Qi", "Se", "Sg", "Ot", "Nn",]
  const Complex3 = ["","Ce", "Du", "Tr", "Qu", "Qt", "Sc", "St", "Og", "Ng"]
  if (num < 10) {return(abbreviationssimple[num])}
  else { 
    const var1 = num%10
    const var2 = (Math.floor((num%100)/10))
    const var3 = (Math.floor((num%1000)/100))
    const output = ((Complex1[var1])+(Complex2[var2])+(Complex3[var3]))
    return output
  }

}

