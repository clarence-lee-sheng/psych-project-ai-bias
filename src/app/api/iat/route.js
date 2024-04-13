import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

function convertListofListsToString(listOfLists) {
    // Map each inner list to a string with curly braces and join them with commas
    const innerArrays = listOfLists.map(innerList => `{${innerList.join(',')}}`);

    // Join the inner arrays with commas and wrap the whole string with curly braces
    const resultString = `{${innerArrays.join(',')}}`;
    console.log("Result", resultString)
    return resultString;
}
export async function POST(request) {
    console.log("Request", request.body)
    const data = await request.json();
    console.log("Values", data)
    const posted = await sql`
      INSERT INTO IATResults (uuid, commitment_check, gender, proficiency, trust, danger, frequency, results, age, email)
      VALUES (
        ${data.uuid},
        ${data.commitmentCheck},
        ${data.gender},
        ${data.proficiency},
        ${data.trust},
        ${data.danger},
        ${data.frequency},
        ${convertListofListsToString(data.results)},
        ${data.age},
        ${data.email}
      );
    `
    return NextResponse.json({ posted }, { status: 200 });
}