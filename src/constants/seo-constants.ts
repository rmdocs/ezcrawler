export const getURL = (): string => {
  const url =
    process?.env?.URL && process.env.URL !== ''
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : 'https://www.coderace.top'
  return url.includes('http') ? url : `https://${url}`
}

const DEFAULT_TITLE = ''
const DEFAULT_TITLE_TEMPLATE = 'EzCrawler | %s'
const DEFAULT_DESCRIPTION =
  'EzCrawler是一个爬虫案例平台，供爬虫爱好者和学习者使用不限流量，含有反爬内容以及APP爬虫等等限制措施...欢迎进站爬取'
const DEFAULT_CANONICAL = getURL()
const SITE_NAME = 'Nextjs Starter'
const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/preview.png`
const FAVICON_LINK = '/favicon.ico'

export const SEO = {
  DEFAULT_TITLE,
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  FAVICON_LINK,
}