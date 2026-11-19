import { NextRequest, NextResponse } from "next/server";

export function GET() {
  console.log("GET request received");
}

export async function POST(request: NextRequest){
    console.log("POST request received");

    console.log(request);

    let body = await request.json();
    console.log("Request body:", body);

    return NextResponse.json(
        {
            message: "Happy "+body.age+"th Birthday "+body.name+"!"
        }
    )
}

export function PUT(){
    console.log("PUT request received");

    return NextResponse.json(
        {
            message: "Put request received successfully"
        }
    )
}

export function DELETE(){
    console.log("Delete request received");

    return NextResponse.json(
        {
            message:"Delete request received successfully"
        }
    )
}