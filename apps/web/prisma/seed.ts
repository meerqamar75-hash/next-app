import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const electronics = await prisma.category.create({
    data: { name: 'Electronics' },
  });

  const accessories = await prisma.category.create({
    data: { name: 'Accessories' },
  });

  await prisma.product.createMany({
    data: [
      { name: 'Headphones', price: 79.99, categoryId: electronics.id },
      { name: 'Mechanical Keyboard', price: 129.99, categoryId: electronics.id },
      { name: 'Wireless Mouse', price: 49.99, categoryId: electronics.id },
      { name: 'Mousepad', price: 19.99, categoryId: accessories.id },
      { name: 'USB-C Cable', price: 9.99, categoryId: accessories.id },
    ],
  });

  console.log('Seeded database successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
