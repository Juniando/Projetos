CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "public"."Post" (
    
    "id" SERIAL NOT NULL,
    "idCreator" INTEGER NOT NULL,
    "image" TEXT,
    "snacks" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "linkRepo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_idCreator_fkey" FOREIGN KEY ("idCreator") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
