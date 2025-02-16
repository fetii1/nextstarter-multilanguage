import { useTranslations } from 'next-intl'
import HeaderSection from 'src/components/sections/HeaderSection'
import { mergeMetaData } from 'src/utils/seo'

export default function Page() {
  const t = useTranslations('Home')
  return (
    <>
      <HeaderSection />
      <section className="container mx-auto">
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </section>
    </>
  )
}

export const metadata = mergeMetaData({
  title: 'Home - Next Starter',
  openGraph: {
    title: 'Home - Next Starter',
  },
})
