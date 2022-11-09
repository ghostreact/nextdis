import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function create(req, res) {
  const { username, password, email } = req.body;
  const result = await prisma.user.create({
    data: {
      username: username,
      password: password,
      email: email,
    },
  });
  res.status(200).json(result);
  console.log(result);

  // const {name, userid} = req.body
  // const createData = await prisma.profile.create({
  //   data:{
  //     name : name,
  //    // userid:userid
  //   }
  // })
  // console.log(createData);
  // res.status(200).json(createData)
}
