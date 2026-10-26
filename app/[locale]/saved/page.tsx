import type { Metadata } from "next";
import { SavedList } from "@/components/saved-list";

export const metadata: Metadata = { title: "生词本 · Echo" };

export default async function SavedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SavedList locale={locale} />;
}
