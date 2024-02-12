export const allUsers: any = [
  {
    name: "patient1",
    city: "city1",
    state: "mh",
    age: 25,
    password: "12345678",
    username: "patient1",
    mobilenumber: 123456789,
    email: "patient1@gamil.com",
    userType: 'patient'
  },
  {
    name: "patient2",
    city: "city2",
    state: "Up",
    age: 35,
    password: "12345678",
    username: "patient2",
    mobilenumber: 123456781,
    email: "patient2@gamil.com",
    userType: 'patient'
  },
  {
    name: "doctor1",
    city: "city1",
    state: "MH",
    age: 31,
    password: "12345678",
    username: "doctor1",
    speciality: "Heart",
    mobilenumber: 123456783,
    email: "doctor1@gamil.com",
    userType: 'doctor'
  },
  {
    name: "admin",
    password: "12345678",
    username: "admin",
    mobilenumber: 123456784,
    email: "admin@gamil.com",
    userType: 'admin'
  },
];

export const logedInUser = (username: string, password: string) => {
    console.log('username',username)
  return new Promise((res, rej) => {
    return setTimeout(() => {
     
     
        // const userIndex = allUsers.findIndex((user: any) => user.username === username && user.password === password);
        // if (userIndex > -1) {
        //   res({ code: 200, data: allUsers[userIndex], msg: "user found" });
        // } else {
        //   rej({ code: 401, msg: "user not found" });
        // }
     
      // error codes => 200, 201, 400, 401, 500
        const user = allUsers.filter((user: any) => {
        if (user.username === username && user.password === password) {
          return user;
        }
      });

      if (user.length > 0) {
        res({ code: 200, data: user[0], msg: "user found" });
      } else {
        rej({ code: 401, msg: "user not found" });
      }
    }, 500);
  });
};
