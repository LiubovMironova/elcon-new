import express from "express";
import models from "./models/index"


const router = express.Router();

// router.get("/user", (req, res) => {
//   setTimeout(
//     () => res.send({
//       name: "Michael",
//       email: "mk@elbrusboot.camp"
//     }),
//     1000
//   );
// });

// router.get("/posts", (req, res) => {
//   setTimeout(
//     () => res.send([
//       { id: 1, title: "First Post", description: "The very best first post..." },
//       { id: 2, title: "Second Post", description: "Dirty post :(" }
//     ]),
//     1000
//   );
// });

// const usersArr = [
//   { login: "mike", name: "Michael Klishevich", password: "123" },
//   { login: "john", name: "John King", password: "456" }
// ];

// router.post("/login", (req, res) => {
//   const { login, password } = req.body;
//   const requestUser = login;
//   const requestPassword = password;
//   const currentUser = usersArr.filter(el => el.login === requestUser && el.password === requestPassword);

//   setTimeout(() => {
//     if (currentUser) {
//       res.send(currentUser);
//     } else {
//       res.status(401);
//       res.send("401 UNAUTHORIZED");
//     }
//   }, 1000);
// });

const services = ["помыть", "погладить", "прибить гвоздь", "йога", "зубной", "маникюр"]
// кто  Give(Can,Могу) Want(Хочу)
let users = [
  [['Вася'], [], []],
  [['Петя'], [], ["йога", "помыть"]],
  [['Маша'], [], ["прибить гвоздь", "йога"]],
]


router.post('/fetchAbout', /* async */ function (req, res) {

  console.log(JSON.stringify(req.body));

  const requestText = req.body.text;

  // await models.User.create({
  //     "about_me": requestText
  // })
  res.send();
})


router.get('/fetchServices', async function (req, res) {
//  const serviceList = await models.Service.readAll()
  // const serviceList = services;
  console.log(" WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW ")

  const serviceList = await models.service.readAll()
  console.log("serviceList = ", serviceList)
  res.send( serviceList);
})

router.post('/fetchUserArrayAbout', async function (req, res) {
  console.log(" !!!!!!!!!!!!!! ")
  console.log(JSON.stringify(req.body));
  const requestUser = req.body.user;
  const requestTag = req.body.tag;
  console.log(" requestUser = ", requestUser)


  const userWantList = await models.user_give_service.readAll(requestUser, requestTag )
  console.log(" userWantList= ", userWantList)
  res.send(userWantList)
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i][0][0] == requestUser) {
  //     console.log(" users[i] = ", users[i])
  //     res.send(users[i]);
    // }
  // }

})



router.post('/fetchWriteGive', async function (req, res) {

  console.log(JSON.stringify(req.body));

    console.log("WMWMWMWMWMWMWMWMMWWMMWMWMWM req.body = ", req.body) 

  const giveUser = req.body.user
  const giveServ = req.body.array
  const giveTag = req.body.tag
  // const requestAbogiveTagutGive = req.body.aboutGive;

  await models.user_give_service.change(giveUser,  giveServ, giveTag)
  res.send()
})

// router.post('/fetchSelectUsers', function (req, res) {

//   console.log(JSON.stringify(req.body));
//   console.log("fetchSelectUsers -req.body = ", req.body)
//   let userFromFront = req.body.user
//   let t = null;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i][0][0] == userFromFront) {
//       t = i;
//     }
//   }
//   console.log("t = ", t )
//   let usersToFront = [];
//   console.log("users.length = ", users.length )
//   for (let i = 0; i < users.length; i++) {
//     console.log(" users[i][2].length = ", users[i][2].length )
//     for (let k = 0; k < users[i][2].length; k++) {
//       console.log(" users[t][1].length = ", users[t][1].length )
//       for (let g = 0; g < users[t][1].length; g++) {
//         console.log("users[i][2][k] = ", users[i][2][k])
//         console.log(" users[t][1][g] = ", users[t][1][g])

//         if (users[i][2][k] == users[t][1][g]) {
//           usersToFront.push(users[i])
//         }
//       }
//     }
//   }
//   console.log(" usersToFront = ", usersToFront)

//   res.send(usersToFront)
// })

router.post('/fetchMeetings', async function (req, res) {

  console.log(JSON.stringify(req.body));

  const requestUser = req.body.user;
  const meetingListByUser = await models.Pairs.readByPerson(requestUser)
  res.send(meetingListByUser);
})



export default router;
