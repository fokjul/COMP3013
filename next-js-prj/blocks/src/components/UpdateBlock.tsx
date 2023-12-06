'use server'

import db from "@/db";

async function updateBlock({ id, title, code }:any) {
    console.log("Received data for update:", { id, title, code });
    const updatedBlock = await db.block.update({
        where: { id },
        data: { title, code }
    });
    return updatedBlock;
}

export default updateBlock