class App {
    constructor() {
        this.followers = {};
    }
    addUsers(user) {
        this.followers[user] = [];
    }
    addFollowers(user, follower) {
        this.followers[user].push(follower);
    }
    gainFollowers(user) {
        return this.followers[user] || [];
    }
}

const app = new App();
app.addUsers("user1");
app.addUsers("user2");
app.addFollowers("user1", "user2", "user3");
app.addFollowers("user1", "user3");
app.addFollowers("user2", "user1");
console.log(app.gainFollowers("user1"));  
console.log(app.gainFollowers("user2"));  
console.log(app.gainFollowers("user3"));  



// Develop a system for scheduling appointments at a healthcare facility. Consider factors like doctor availability, patient preferences, and appointment reminders.
// class scheduleAppointment {
//     constructor(patientsDetails,doctorsDetails,appointDate) {
//         this.doctorsDetails=[];
//         this.patientsDetails =[];
//          this.appointDate= appointDate;
//        }
//        addPatientDetails(name, age, condition, preferences){
//         const patientDetails= {
//             name: name,
//             age: age,
//             condition: condition,
//             preferences: preferences
//         }
//         this.patientsDetails.push(patientDetails)
//        }
//        addDoctors(name, skills, available=true){
//         const doctordetails = {
//             name: name,
//             skills: skills
//         }
//         this.addDoctors(name,this.appointDate,time,skills)
//         time: time
//         if(this.appointDate.includes(time)){
//             console.log(`${patientDetails.name} is to consult ${doctorDetails.name} on ${this.appointDate}`)
//         }
//         else{
//             console.log(`Doctor not available`);
//         }

               
    //     this.doctorsDetails.push(doctordetails)
    //     this.doctorsDetails.available.forEach(item => {
    //         if (doctorsDetails.available == true){
    //             console.log(`${patientDetails.name} is to consult ${doctorDetails.name} on ${this.appointDate}`)
    //         }
    //         else{
    //             console.log("Doctor is not available at the moment")
    //         }
    //     });
    //    }
    // }
    // const book = new scheduleAppointment()
    // book.addPatientDetails("David joe",23, "Breathing difficulties", )
    // book.addDoctors("Doctor Agnes", "General Doctor", "Tuesday 9:30am")
    // console.log(book)



    class DisasterRecovery{
        constructor() {
            this.situations = {};
        }
        addSituation(location, situation) {
            if (!this.situations[location]) {
                this.situations[location] = [];
            }
            this.situations[location].push(situation);
        }
        attendToSituation(location) {
            return this.situations[location];
        }
    }

    const disaster = new DisasterRecovery();
    disaster.addSituation("Nairobi", "Flood");
    disaster.addSituation("Marsabit", " Drought");
    console.log(disaster.attendToSituation("Nairobi"));
    console.log(disaster.attendToSituation("Marsabit")); 
    console.log()







  



















