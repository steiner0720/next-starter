import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import useSwr, { mutate } from 'swr'
import { Button } from '@mui/material'
import styles from '../styles/Home.module.css'

const { container, footer, description, code } = styles

const Home: NextPage = () => {
  const { t } = useTranslation('common')
  const { locale, route, asPath, push } = useRouter()
  const { data } = useSwr('home')

  const switchLang = locale === 'en-US' ? 'zh-Hant' : 'en-US'

  const handleChange = (count: number) => mutate('home', { ...data, count }, false)
  return (
    <div className={container}>
      <p className={description}>
        Current Language: <code className={code}>{t(locale || '')}</code>
      </p>
      <Button variant="contained" onClick={() => push(route, asPath, { locale: switchLang })}>
        Change Language to {t(switchLang || '')}
      </Button>
      <div>
        <span style={{ marginRight: '12px' }}>{data.count} (from gloabal state)</span>
        <Button onClick={() => handleChange(data.count + 1)} style={{ marginRight: '12px' }}>
          Increase
        </Button>
        <Button onClick={() => handleChange(data.count - 1)} style={{ marginRight: '12px' }}>
          decrease
        </Button>
      </div>
    </div>
  )
}

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home
