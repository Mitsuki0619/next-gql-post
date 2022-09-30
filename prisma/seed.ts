import { prisma } from "../lib/prisma";

const main = async () => {
  await prisma.user.createMany({
    data: [
      { name: "Mitsuki", email: "mitsuki@example.com" },
      { name: "TestUser", email: "testuser@example.com" },
    ],
  });
  await prisma.task.createMany({
    data: [
      { title: "Hello", userId: 1 },
      { title: "World", userId: 2 },
    ],
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
