import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { set } from "react-hook-form"

export default function Instructions({items, setState}) {
    return(
        <div>
            <div> You will use the &apos;E&apos; and &apos;I&apos; computer keys to categorize items into groups as fast as you can. These are the four groups and the items that belong to each:</div>
            <Table>
                <TableCaption>Categories and their items</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Category</TableHead>
                        <TableHead>Items</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Good</TableCell>
                        <TableCell>
                                {items.good.join(", ")}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bad</TableCell>
                        <TableCell>
                            {
                                items.bad.join(", ")
                            }
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Human</TableCell>
                        <TableCell className="flex flex-row"> 
                            {
                                items.human.map((item, i) => (
                                    <img src={item} key={i} className="w-20 h-20"/>
                                ))
                            }
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>AI</TableCell>
                        <TableCell className="flex flex-row">
                            {
                                items.ai.map((item, i) => (
                                    <img src={item} key
                                    ={i} className="h-20 "/>
                                ))
                            }
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div>There are seven parts. The instructions change for each part. Pay attention!</div>
            <Button onClick={()=>setState("testInstructions")}>Next</Button>
        </div>
    )
    }