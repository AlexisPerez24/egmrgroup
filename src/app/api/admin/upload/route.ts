import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED = ["egmr", "evta", "dedicated"];

export async function POST(request: NextRequest): Promise<Response> {
  let body: HandleUploadBody;
  try {
    body = (await request.json()) as HandleUploadBody;
  } catch {
    return NextResponse.json({ error: "Petición inválida" }, { status: 400 });
  }

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (!adminPassword || clientPayload !== adminPassword) {
          throw new Error("Contraseña incorrecta");
        }
        const division = pathname.replace("catalogos/", "").replace(".pdf", "");
        if (!ALLOWED.includes(division)) {
          throw new Error("División inválida");
        }
        return {
          allowedContentTypes: ["application/pdf"],
          maximumSizeInBytes: 50 * 1024 * 1024, // 50 MB
          addRandomSuffix: false,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          allowOverwrite: true as any,
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("Catálogo subido:", blob.url);
      },
    });
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error al subir" },
      { status: 400 }
    );
  }
}
