import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function create(req, res) {
  const { name, username, password, email, description } = req.body;
  const result = await prisma.member.create({
    data: {
      name: name,

      username: username,
      password: password,
      email: email,
      description: description,
    },
  });
  res.status(200).json(result);
  console.log(result);
}
