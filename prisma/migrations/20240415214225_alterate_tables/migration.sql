/*
  Warnings:

  - Changed the type of `joined` on the `GroupMember` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "GroupMember" DROP COLUMN "joined",
ADD COLUMN     "joined" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Musician" ALTER COLUMN "birthDate" DROP NOT NULL;
