import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";



export async function GET(request: NextRequest, { params } : { params: { id: string }}) {
    const userId = params.id;
    const user = await prisma.client.findUnique({
        where: { id: userId }
    });

    return NextResponse.json(user);
}

interface UpdateClientPayload {
    name: string
    phone_number: string;
    email: string;
}

export async function PUT(request: NextRequest, { params } : { params: { id: string, email: string }}) {
    const userId = params.id;
    const payload: UpdateClientPayload = await request.json();
    const updateClient = await prisma.client.update({ 
        where: { id: userId },
        data: payload
    })

    return NextResponse.json(updateClient);
}

export async function DELETE(request: NextRequest, { params } : { params: { id: string }}) {
    const userId = params.id;
    const user = await prisma.client.delete({
        where: { id: userId },
    })

    return NextResponse.json(user)
}
