let mesec = prompt("Unesite mesec:");

switch (mesec) {
    case 'januar':
    case 'mart':
    case 'maj':
    case 'jul':
    case 'avgust':
    case 'oktobar':
    case 'decembar': 
    alert('Uneti mesec ima 31 dan')
    break;

    case 'april':
    case 'jun':
    case 'septembar':
    case 'novembar':
    alert('Uneti mesec ima 30 dana')
    break;
    
    case 'februar':
    alert('Uneti mesec ima 28 dana')
    break;

    default:
    break;
}
