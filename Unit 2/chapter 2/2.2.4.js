let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName); 
    arrow()
  }
};
user.sayHi();

