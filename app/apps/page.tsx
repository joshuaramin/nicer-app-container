import type { Metadata } from "next";
import AppBrowser from "@/components/AppBrowser";

export const metadata: Metadata = { title: "All apps" };

export default function AppsPage() {
  return (
    <>
      <h1 className="h1">All apps</h1>
      <AppBrowser />
    </>
  );
}
