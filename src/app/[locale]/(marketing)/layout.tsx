import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <>
      {props.children}
    </>
  );
}
