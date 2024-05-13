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
class scheduleAppointment {
    constructor(doctorsDetails,patientsDetails,appointmentDate) {
        this.doctorsDetails=[];
        this.patientsDetails =[];
         this.appointmentDate= appointmentDate;
       }
       addPatientDetails(name, age, condition, preferences){
        const patientDetails= {
            name: name,
            age: age,
            condition: condition,
            preferences: preferences
        }
        this.patientsDetails.push(patientDetails)
       }
       addDoctors(name, skills, available=true){
        const doctordetails = {
            name: name,
            skills: skills
        }
        this.doctorsDetails.push(doctordetails)
        this.doctorsDetails.available.forEach(item => {
            if (doctorsDetails.available == true){
                console.log(`${patientDetails.name} is to consult ${doctorDetails.name} on ${this.appointmentDate}`)
            }
            else{
                console.log("Doctor is not available")
            }
        });
       }
    }
    const schedule = new Appointment()
    schedule.addPatientDetails("David joe",23, "Breathing difficulties", )
    schedule.addDoctors("Doctor Agnes", "General Doctor")
    console.log(schedule)