import { NextRequest ,NextResponse} from "next/server";
// import {db} from '@vercel/postgres';
export function GET(request:NextRequest){
    return NextResponse.json({
        msg:"api km kr rhe ha"
    })
}