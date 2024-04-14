-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "length" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Band" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "foundedAt" INTEGER,

    CONSTRAINT "Band_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupMember" (
    "id" SERIAL NOT NULL,
    "joined" DATE NOT NULL,
    "left" DATE,

    CONSTRAINT "GroupMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Musician" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "birthDate" DATE NOT NULL,

    CONSTRAINT "Musician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AlbumToGenre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToGenre_AB_unique" ON "_AlbumToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToGenre_B_index" ON "_AlbumToGenre"("B");

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumToGenre" ADD CONSTRAINT "_AlbumToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumToGenre" ADD CONSTRAINT "_AlbumToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
