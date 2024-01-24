const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('gym workout');
        break;
    case 'saturday':
    case 'sunday':
        console.log('chillax on the weekend');
        break;
    default:
        console.log('Thats not a day');
}

//challenge from jonas
const day2 = 'monday';

if (day2 === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day2 === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day2 === 'wednesday' || day2 === 'thursday') {
    console.log('Write code examples');
} else if (day2 === 'friday') {
    console.log('gym workout');
} else if (day2 === 'saturday' || day2 === 'sunday') {
    console.log('chillax on the weekend');
} else {
    console.log('That\'s not a day');
}
