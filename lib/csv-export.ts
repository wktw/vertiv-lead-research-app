type CsvRecord = Record<string, string | number | null>;

export function toCsv(records: CsvRecord[]): string {
  if (records.length === 0) return "";
  const headers = Object.keys(records[0]);
  const escape = (value: string | number | null) => {
    const cell = value === null ? "" : String(value);
    return `"${cell.replaceAll('"', '""')}"`;
  };
  const rows = records.map((row) => headers.map((h) => escape(row[h] ?? "")).join(","));
  return [headers.join(","), ...rows].join("\n");
}
