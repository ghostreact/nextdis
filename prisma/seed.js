import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();


// const fakerUser = () => ({
//   username: faker.name.firstName(),
//   password: faker.internet.password(),
//   email: faker.internet.email(),
//   phone : faker.phone.number()
// });

const fakerReport = () => ({
  title : faker.finance.accountName,
  content : faker.lorem.paragraph,
  //profileID: faker.finance.pin
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
  const fakerRound = 50;
  console.log("Seeding...");
  for (let i = 0; i < fakerRound; i++) {
    await prisma.report.create({
      data: fakerReport(),
    });
  }
}

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });


