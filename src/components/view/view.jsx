"use client"
import { useEffect, useState } from "react"
import ViewTable from "@/components/view/view-table"

function arrayToCsvRow(array) {
    return array.map(value => {
        if (Array.isArray(value)) {
            return JSON.stringify(value);
        } else {
            return value.toString();
        }
    }).join(',');
}

function objectsToCsv(data) {
    const headers = Object.keys(data[0]).map(header => `"${header}"`);
    // const rows = data.map(obj => headers.map(header => obj[header]));
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].results)
        data[i].results = data[i].results.replaceAll("{","[").replaceAll("}","]")
    }
    const csvRows = [headers.join(','),  ...data.map((row) =>
    Object.values(row)
      .map((value) => `"${value}"`)
      .join(',')
  )];
    return csvRows.join('\n');
}

function exportToCsv(data) {
    const csvContent = objectsToCsv(data);

    // Create a blob with the CSV content
    const csvBlob = new Blob([csvContent], { type: 'text/csv' });

    // Create a temporary URL for the blob
    const csvUrl = URL.createObjectURL(csvBlob);

    // Create a link element
    const link = document.createElement('a');
    link.href = csvUrl;
    link.setAttribute('download', 'data.csv');

    // Append the link to the body and click it
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the temporary URL and link
    URL.revokeObjectURL(csvUrl);
    document.body.removeChild(link);
}

export default function View(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("/api/getIATResult",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache"
            }
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.allData.rows)
            setData(data.allData.rows)
        })
    }, [])  
    return (
        <div>
            <h1>View Page</h1>
            <ViewTable data={data}/>
            <button onClick={() => exportToCsv(data)}>Export to CSV</button>
        </div>
    )
}