import Navbar from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export default async function Layout({
  children,
  params: { locale },
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return <NextIntlClientProvider locale={locale} messages={messages}>
    
    <Navbar />

    {children}</NextIntlClientProvider>;
}
