import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    console.log("POST request received");

    console.log(request);

    let body = await request.json();
    console.log("Request body:", body);

    return NextResponse.json(
        {
            message: "Happy customer "+body.name+"!"
        }
    )
}
