import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json({ error: "ADMIN_PASSWORD no configurada" }, { status: 500 });
  }
  if (password !== adminPassword) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
