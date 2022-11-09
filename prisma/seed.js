import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();


// const fakerUser = () => ({
//   username: faker.name.firstName(),
//   password: faker.internet.password(),
//   email: faker.internet.email(),
// });

const fakerProfile = () => ({
  name : faker.name.firstName(),
  userid : faker.internet.mac,
})

// async function main() {
//   const fakerRound = 100;
//   console.log("Seeding...");
//   for (let i = 0; i < fakerRound; i++) {
//     await prisma.User.create({
//       data: fakerUser(),
//     });
//   }
// }

async function main(){
  const fakerRound = 100;
  console.log("Seeding...");
  for (let i = 0; i < fakerRound; i++) {
    await prisma.profile.create({
      data: fakerProfile(),
    });
  }
}

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });


