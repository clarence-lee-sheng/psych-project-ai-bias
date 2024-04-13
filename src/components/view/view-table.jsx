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

export default function ViewTable({data}){
    return(
        <div>
            <Table>
                <TableCaption>Survey Results</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>UUID</TableHead>
                        <TableHead>Commitment Check</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Proficiency</TableHead>
                        <TableHead>Trust</TableHead>
                        <TableHead>Danger</TableHead>
                        <TableHead>Frequency</TableHead>
                        <TableHead>Results</TableHead>
                        <TableHead>Age</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data.map((d, i) => (
                            <TableRow key={i}>
                                <TableCell>{d.uuid}</TableCell>
                                <TableCell>{d.commitment_check}</TableCell>
                                <TableCell>{d.email}</TableCell>
                                <TableCell>{d.gender}</TableCell>
                                <TableCell>{d.proficiency}</TableCell>
                                <TableCell>{d.trust}</TableCell>
                                <TableCell>{d.danger}</TableCell>
                                <TableCell>{d.frequency}</TableCell>
                                <TableCell>{d.results}</TableCell>
                                <TableCell>{d.age}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}