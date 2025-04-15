abbreviations = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc']



function formatnumber(num) {
    absnum = Math.abs(num)
    if (absnum < 1000) {return num.toString()}
    tier = (Math.floor(Math.log10(absnum)/3)-1)
    suffex = abbreviations[tier] || ''
    scaled = (num/(10**(3*tier+3)))
    switch(Math.floor(Math.log10(scaled))) {
        case 0: 
            roundedscaled = (Math.floor(100*scaled))/100
            break;
        case 1:
            roundedscaled = (Math.floor(10*scaled))/10
            break;
        case 2:
            roundedscaled = Math.floor(scaled)
            break;
        default:
            console.log('switch is broken')
            console.log(Math.floor(Math.log10(scaled)))
            console.log(scaled)
    }
    return roundedscaled+suffex
}
