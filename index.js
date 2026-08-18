const role = 'Admin'
const password = 'TheMaster'

if (role == 'Admin') {
    console.log('Kindly type in your password');
    if (password == 'TheMaster') {
        console.log('Welcome')

    } else if (password == '') {
        console.log('Cancelled')
    }
    else {
        console.log('Wrong password')
    }

} else {
    console.log("I don't know you")
}

