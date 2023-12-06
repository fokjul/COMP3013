import db from "@/db";
import Link from "next/link";

export default async function Home() {
  const blocks = await db.block.findMany();
  const renderedBlocks = blocks.map(block => (
    <Link 
      href={`/blocks/${block.id}`} 
      key={block.id} 
      className="flex justify-between items-center p-2 border rounded"> 
        {block.title}
        <div>View</div>
    </Link>
  ))
  return (
    <>
    <div className="flex justify-between mt-4 mb-4">
      <h1 className="text-xl font-bold">Blocks</h1>
      <Link href="blocks/new" className="border p-2 rounded">New</Link>
    </div>
    <div className="flex flex-col gap-2">
      {renderedBlocks}
    </div>
      
    </>

    
  );
}