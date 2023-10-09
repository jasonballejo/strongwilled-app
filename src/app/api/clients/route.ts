import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";


interface NewClientPayload {
    name: string
    phone_number: string;
    email: string;
}


export async function POST(
    request: NextRequest,
    response: NextResponse
) {
    const payload: NewClientPayload = await request.json()
    const newClient = await prisma.client.create({ data: payload })
    
    return NextResponse.json(newClient);
}