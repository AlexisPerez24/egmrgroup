import { generateClientTokenFromReadWriteToken } from "@vercel/blob/client";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED = ["egmr", "evta", "dedicated"];

export async function POST(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json({ error: "ADMIN_PASSWORD no configurada en el servidor" }, { status: 500 });
  }
  if (password !== adminPassword) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  let division: string | null = null;
  try {
    const body = await req.json();
    division = body.division ?? null;
  } catch {
    return NextResponse.json({ error: "Petición inválida" }, { status: 400 });
  }

  if (!division || !ALLOWED.includes(division)) {
    return NextResponse.json({ error: "División inválida" }, { status: 400 });
  }

  try {
    const clientToken = await generateClientTokenFromReadWriteToken({
      pathname: `catalogos/${division}.pdf`,
      addRandomSuffix: false,
      allowOverwrite: true,
      validUntil: Date.now() + 5 * 60 * 1000, // 5 min
    });
    return NextResponse.json({ clientToken });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error generando token de subida";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
