;

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE IATResults (
        id SERIAL PRIMARY KEY,
        uuid UUID NOT NULL,
        commitment_check TEXT NOT NULL,
        age TEXT NOT NULL,
        gender TEXT NOT NULL,
        proficiency TEXT NOT NULL,
        trust TEXT NOT NULL,
        danger TEXT NOT NULL,
        frequency TEXT NOT NULL,
        results TEXT NOT NULL
    )`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}