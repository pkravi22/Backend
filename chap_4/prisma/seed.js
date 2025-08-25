const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Seed some card data
  const card1 = await prisma.card.create({
    data: {
      title: "Gold Membership",
      description: "Access to premium features",
      price: 99.99,
    },
  });

  const card2 = await prisma.card.create({
    data: {
      title: "Silver Membership",
      description: "Access to basic features",
      price: 49.99,
    },
  });

  console.log("Cards seeded:", { card1, card2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
