-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Block" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "tag" TEXT
);
INSERT INTO "new_Block" ("code", "id", "tag", "title") SELECT "code", "id", "tag", "title" FROM "Block";
DROP TABLE "Block";
ALTER TABLE "new_Block" RENAME TO "Block";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
