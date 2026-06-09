import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

async function appendToSheet(row: string[]) {
  const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  if (!credentialsJson || !spreadsheetId) {
    throw new Error("Google Sheets не настроен");
  }

  const credentials = JSON.parse(credentialsJson);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, telegram, comment, waitingList } = body;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Имя обязательно" }, { status: 400 });
  }
  if (
    !telegram ||
    typeof telegram !== "string" ||
    telegram.trim().length === 0
  ) {
    return NextResponse.json({ error: "Telegram обязателен" }, { status: 400 });
  }

  const date = new Date().toLocaleString("ru-RU");

  await appendToSheet([
    name.trim(),
    telegram.trim(),
    comment?.trim() ?? "",
    waitingList ? "Да" : "Нет",
    date,
  ]);

  return NextResponse.json({ ok: true });
}
