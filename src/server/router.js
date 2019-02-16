import express from "express";

const router = express.Router();

router.get("/user", (req, res) => {
  setTimeout(
    () => res.send({
      name: "Michael",
      email: "mk@elbrusboot.camp"
    }),
    1000
  );
});

router.get("/posts", (req, res) => {
  setTimeout(
    () => res.send([
      { id: 1, title: "First Post", description: "The very best first post..." },
      { id: 2, title: "Second Post", description: "Dirty post :(" }
    ]),
    1000
  );
});

const usersArr = [
  { login: "mike", name: "Michael Klishevich", password: "123" },
  { login: "john", name: "John King", password: "456" }
];

router.post("/login", (req, res) => {
  const { login, password } = req.body;
  const requestUser = login;
  const requestPassword = password;
  const currentUser = usersArr.filter(el => el.login === requestUser && el.password === requestPassword);

  setTimeout(() => {
    if (currentUser) {
      res.send(currentUser);
    } else {
      res.status(401);
      res.send("401 UNAUTHORIZED");
    }
  }, 1000);
});

export default router;
