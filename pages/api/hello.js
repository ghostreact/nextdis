// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const getdata = await prisma.user.findMany({
    include: { report: true },
  });
  // res.status(200).json({ name: 'John Doe' })
  console.log(getdata);
  res.status(200).json(getdata);
}
