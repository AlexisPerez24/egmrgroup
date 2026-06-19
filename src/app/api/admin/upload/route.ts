import { put } from "@vercel/blob";
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

  const form = await req.formData();
  const file = form.get("file") as File | null;
  const division = form.get("division") as string | null;

  if (!file || !division) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }
  if (!ALLOWED.includes(division)) {
    return NextResponse.json({ error: "División inválida" }, { status: 400 });
  }
  if (file.type !== "application/pdf") {
    return NextResponse.json({ error: "Solo se permiten archivos PDF" }, { status: 400 });
  }

  const blob = await put(`catalogos/${division}.pdf`, file, {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/pdf",
  });

  return NextResponse.json({ url: blob.url });
}
