import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const fakerUser = () => ({
  name: faker.name.firstName(),
  lastname: faker.name.lastName(),
  username: faker.name.firstName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
});

async function main() {
  const fakerRound = 100;
  console.log("Seeding...");
  for (let i = 0; i < fakerRound; i++) {
    await prisma.member.create({
      data: fakerUser(),
    });
  }
}

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
