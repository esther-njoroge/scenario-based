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