import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import { A } from '@/components'
export default function Home(): JSX.Element {
  const transition = 'color 0.15s ease, border-color 0.15s ease'
  return (
    <>
      <NextSeo title="Home" />
      <head>
        
        <script src="https://hm.baidu.com/hm.js?e44e38a9ae45d291407e66b225483b45"></script>
        <script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1280819073&web_id=1280819073"></script>
      </head>
      <div className="flex flex-col items-center justify-center min-h-screen px-2 py-0">
        <main className="flex flex-col items-center justify-center flex-5 px-20 py-0">
          <h1 className="m-0 text-center leading-[15rem] text-[4rem]">
            欢迎来到{' '}
            <A
              className="text-[#0070f3]"
            >
              EZCrawler
            </A>
          </h1>
          <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center max-w-[800px] mt-2' style={{fontSize:'45px',color:"rgb(56,70,127)"}}>
            <h1>爬虫案例列表</h1>
          </div>
          <p>——————————&gt;</p> <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center"><a target={'_blank'} href='https://github.com/rmdocs/spider-code-examples'><button id="answer" type='button' style={{color:'rgb(233,165,164)',
                transition,
                flexBasis: '45%',
        }}>查看案例爬虫代码</button></a></div>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center max-w-[800px] mt-12">
            <A
              href="https://music.api.coderace.top/"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"#96e6a1"}}>API-Spider-1 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                根据API页面给出的文档可用条件进行爬虫编写！爬取网易云音乐免费音乐歌单...<br/>
              </p>
              <br/>
                <p className="text-xl leading-[1.875rem]" style={{color:"#d57eeb"}}>
               无频率限制反爬虫等措施
              </p>
            </A>

            <A
              href="https://img.api.coderace.top/"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"#6db6ff"}}>API-Spider-2 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                 根据API页面给出的文档可用条件进行爬虫编写！爬取API链接对应跳转页面的图片！
              </p>
              <br/>
              <p className="text-xl leading-[1.875rem]" style={{color:"#d37eab"}}>
               无频率限制反爬虫等措施
              </p>
            </A>
            
            <A
              href="https://gh.api.coderace.top/"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"rgb(30,59,240)"}}>API-Spider-3 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                 根据本API域名访问Github仓库给出的README可用条件进行爬虫编写！爬取API链接对应github用户的账号信息！
              </p>
              <br/>
              <p className="text-xl leading-[1.875rem]" style={{color:"#d57eeb"}}>
               Github官方可能会有频率限定
              </p>
            </A>
            
             <A
              href="https://ws1.ezcrawler.cn"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"rgb(30,59,240)"}}>WebSocket-01 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                 WebSocket聊天室爬虫，请自行在聊天框中发送1-5条消息进行爬取！
              </p>
              <br/>
              <p className="text-xl leading-[1.875rem]" style={{color:"#dc0020"}}>
               请不要过多爬取否则可能面临改案例停用的风险！
              </p>
            </A>
            <A
              href="https://ssr1.ezcrawler.cn"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"rgb(30,59,240)"}}>SSR-01 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                 SSR新闻网站，首页共有4大类，最新消息默认加载10页，其余均为5页
              </p>
              <br/>
              <p className="text-xl leading-[1.875rem]" style={{color:"#a6c0fe"}}>
               有AJAX点击式加载，页码栏中页码会自动增添。
              </p>
            </A>
            <A
              href="https://proxypool.scrape.center/random"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"rgb(30,59,240)"}}>Tool-01 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                 爬虫代理池，借用scrape案例网站的爬虫代理池。可随时使用，比较稳定，对方使用Kubernetes集群部署！
              </p>
              </A>
                         <A
              href="https://login1.ezcrawler.cn/"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"rgb(30,59,240)"}}>login-01 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                 登录案例对接session cookie登录，session中使用token生成的方式！可以用来做模拟登录练习！
              </p>
              </A>
              <A
              href="https://captcha1.ezcrawler.cn/"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"#96e6a1"}}>Captcha-01 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                拖动验证码，DragCaptcha，困难，可以尝试，建议训练模型
              </p>
              <br/>
                <p className="text-xl leading-[1.875rem]" style={{color:"#d57eeb"}}>
               模型训练加持可能破解成功
              </p>
            </A>
            <A
              href="https://ssr2.ezcrawler.cn/"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl" style={{color:"#6db6ff"}}>SSR-02 &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                 Bitcoin实时行情数据，每分每秒都在刷新，抓取对应时间节点的数据！包含数据走势图！
              </p>
              <br/>
              <p className="text-xl leading-[1.875rem]" style={{color:"#d37eab"}}>
               实时数据更新/Websocket
              </p>
            </A>
    <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center max-w-[800px] mt-12' style={{fontSize:'35px',color:"#64b3f4"}}>
            <h2>其余案例正在加快编写中....</h2>
            
          </div>
          </div>
        </main>

        <footer className="w-full h-[60px] border border-[#eaeaea] flex justify-center items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            The website run on{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="ml-1 h-[1em]" />&nbsp;&nbsp;&nbsp;||
            &nbsp;Powered By&nbsp; {''}<a href='https://www.ezcrawler.cn'>EZCrawler Team</a>
          
          </a>
          </footer>
          <footer className="w-full h-[30px] border border-[#eaeaea] flex justify-center items-center">
            <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
            <span id="busuanzi_container_site_pv">本站项目列表总访问量<span id="busuanzi_value_site_pv"></span>次</span>
            </footer>
      </div>
    </>
  )
}

Home.layoutProps = {
  Layout: (props: unknown) => (
    <div className="border-l-8 border-blue-700" {...props} />
  ),
}
