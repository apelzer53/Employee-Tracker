/*this file will handle tasks associated with pulling an appointment
    from local storage and putting it on the index.html page */
const apptArray = [];

function sortByTime(){
    // console.log("appointments: " + JSON.stringify(apptArray));
    // console.log("------------------------------------------");
    for(let i = 0; i < apptArray.length; i++){
        console.log(apptArray[i].dayAndTime.toLocaleString());
    }
}


apptArray.push(createAppointment(
    createOwner('John', '456-123-5632'),
    createPet('Sam', 'Great Dane', 2),
    createService('full wash', 'wash'),
    createDayAndTime('2024-04-05')
));

apptArray.push(createAppointment(
    createOwner('Jane', '123-455-6354'),
    createPet('Buddy', 'lab', 7),
    createService('nail trim', 'nails'),
    createDayAndTime(new Date())
));


for(let i = 0; i < apptArray.length; i++){
    console.log("appointment " + (i + 1) + ": \n" + "owner:" +  JSON.stringify(apptArray[i].owner) + '\n pet: ' + JSON.stringify(apptArray[i].pet)
    + " \n service: " + JSON.stringify(apptArray[i].service) + " \n date and time: " + JSON.stringify(apptArray[i].dayAndTime));
    console.log("------------------------------------------");
}

sortByTime();