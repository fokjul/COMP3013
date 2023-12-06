import Card from "@/components/Card";
import db from "@/db";


export default async function BlockShowPage({params} : any) {
    const blocks = await db.block.findMany();
    const blockToShow = blocks.find(block => (
        parseInt(params.id) == block.id && (block.title)
        ))
        const blockId = blockToShow ? blockToShow.id : '';
        const blockTitle = blockToShow ? blockToShow.title : '';
        const blockCode = blockToShow ? blockToShow.code : '';
    
   return (
    <div>
        <Card blockId={blockId} blockTitle={blockTitle} blockCode={blockCode} />
    </div>
   )

}