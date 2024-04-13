
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        // Pull all data from the 'IATResults' table
        const allData = await sql`SELECT * FROM IATResults;`;
        console.log("All data:", allData);

        return NextResponse.json({ allData }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Failed to pull data from the database" }, { status: 500 });
    }
}
