import { faker } from "@faker-js/faker";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function create(req, res) {
  const result = await prisma.member.create({
    data: {
      name: faker.name.firstName,
      lastname: faker.name.lastName,
      username: faker.name.middleName,
      password: faker.internet.password,
      email: faker.internet.email,
      // name: "A",
      // lastname: "BB",
      // username: "AA",
      // password:"1111",
      // email: "A.gmail.com",
    },
  });
  res.status(200).json(result);
}
