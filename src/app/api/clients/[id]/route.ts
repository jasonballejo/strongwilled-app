import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";



export async function GET(request: NextRequest, { params } : { params: { id: string }}) {
    const userId = params.id;
    const user = await prisma.client.findUnique({
        where: { id: userId }
    });

    return NextResponse.json(user);
}

// Create a PUT and DELETE request

export async function PUT(request: NextRequest, { params } : { params: { id: string, email: string }}) {
    const userId = params.id;
    const userEmail = params.email;
    const user = await prisma.client.update({
        where: { id: userId },
        data: { name: userEmail }
    })

    return NextResponse.json(user);
}

export async function DELETE(request: NextRequest, { params } : { params: { id: string }}) {
    const userId = params.id;
    const user = await prisma.client.delete({
        where: { id: userId },
    })

    return NextResponse.json(user)
}
