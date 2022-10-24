import { doGet } from '../auth/news'
import { newsUrl, apiKey, topStoriesUrl } from '../constant/apiConstant'
import { pageLoading } from '../reducers/pageReducer'


// import { setTableLoading } from '../../../store/reducers/page.reducer'
// import {checkValidationToken} from '../../../utils/errorHandler'

export const getList = async (page, limit, dispatch, search, categories) => {

  let result = { list: undefined, initiate: undefined, ok: false }

  const url = `${newsUrl}api_token=${apiKey}`
  const params = { page, limit, search, categories }
  dispatch(pageLoading(true))


  try {
    const response = await doGet(url, params)

    if (response) {
      dispatch(pageLoading(false))
      result.ok = true
      result.initiate = response.data.meta
      result.list = response.data.data


    }
  } catch (error) {
    console.log(error);
    dispatch(pageLoading(false))

    // checkValidationToken(error, token, refresh_token, dispatch)
    // waiting component toast
  }
  return result
}


export const getTopStories = async (page, limit, dispatch, search, categories) => {
  let result = { list: undefined, initiate: undefined, ok: false }
  
  try {
    const url = `${topStoriesUrl}api_token=${apiKey}`
    const params = { page, limit, search, categories }
    dispatch(pageLoading(true))
    const response = await doGet(url, params)
    let dummy = true;
    if (dummy) {
      let datas = getDataDummyForDev();
      dispatch(pageLoading(false))
      result.ok = true
      result.initiate = datas.meta
      result.list = datas.data
      return result;
    }

    if (response) {
      dispatch(pageLoading(false))
      result.ok = true
      result.initiate = response.data.meta
      result.list = response.data.data
    }
    return result;
  } catch (error) {
    console.log("check")
    console.log(error);
    dispatch(pageLoading(false));
    let dummy = true;
    if (dummy) {
      let datas = getDataDummyForDev();
      dispatch(pageLoading(false))
      result.ok = true
      result.initiate = datas.meta
      result.list = datas.data
    }
    return result
  }
}

function getDataDummyForDev(){
  return {
    "meta": {
      "found": 67099404,
      "returned": 10,
      "limit": 10,
      "page": 1
    },
    "data": [
      {
        "uuid": "e65038f0-03e5-4a45-8aa2-d73fc60242a8",
        "title": "“신당역 사건 되풀이 우려”…구속영장 기각률 5년간 증가 추세",
        "description": "살인·강간 등 강력범죄에 대한 법원 구속영장 기각률이 매년 증가 추세인 것으로 조사됐다.   22일 국회 행정안전위원회 ...",
        "keywords": "헤럴드경제, 헤경, heraldcorp, 경제지, 신문, 뉴스, 보도, 속보, 정치, 경제, 사회, 국제, 문화, 사설, 컬럼, News, Newspaper, Korea, South Korea, Rep.Korea",
        "snippet": "정우택 국민의힘 의원 경찰청 자료 분석\n\n전주환도 구속영장 기각, 결국 살인까지\n\n구속 수사 원칙으로 영장 신청 이뤄져...",
        "url": "https://biz.heraldcorp.com/view.php?ud=20221021000653",
        "image_url": "https://res.heraldm.com/content/image/2022/10/21/20221021000686_p.jpg",
        "language": "ko",
        "published_at": "2022-10-22T09:01:44.000000Z",
        "source": "biz.heraldcorp.com",
        "categories": [
          "general"
        ],
        "relevance_score": null
      },
      {
        "uuid": "7cac0792-3c49-46b5-9a5c-5943d94754e6",
        "title": "한동훈, 차기 총선·전대 차출설 끊이지 않는 이유 [정치쫌!]",
        "description": "2024년 총선을 1년 6개월 가량 남겨뒀지만 정치권에선 벌써부터 한동훈 법무부 장관의 총선 출마 가능성을 놓고 갑론을박?...",
        "keywords": "헤럴드경제, 헤경, heraldcorp, 경제지, 신문, 뉴스, 보도, 속보, 정치, 경제, 사회, 국제, 문화, 사설, 컬럼, News, Newspaper, Korea, South Korea, Rep.Korea",
        "snippet": "친윤 중심 ‘한동훈 차출설’ 군불 때기\n\n유상범 “尹 지지 40% 넘으면 가능”\n\n이준석 대체 인물 부재…유승민 존재감\n\n?...",
        "url": "https://biz.heraldcorp.com/view.php?ud=20221021000651",
        "image_url": "https://res.heraldm.com/content/image/2022/10/06/20221006000649_p.jpg",
        "language": "ko",
        "published_at": "2022-10-22T09:01:38.000000Z",
        "source": "biz.heraldcorp.com",
        "categories": [
          "general"
        ],
        "relevance_score": null
      },
      {
        "uuid": "157c376d-ae42-4e03-8ab7-0134b80dcc5b",
        "title": "‘예비 고3’, 대입준비 어떻게 해야 하나",
        "description": "2023학년도 대학수학능력시험(수능)을 약 한달 앞두고, ‘예비 고3’인 고2 학생들은 서서히 본격적인 대입준비를 시작하?...",
        "keywords": "헤럴드경제, 헤경, heraldcorp, 경제지, 신문, 뉴스, 보도, 속보, 정치, 경제, 사회, 국제, 문화, 사설, 컬럼, News, Newspaper, Korea, South Korea, Rep.Korea",
        "snippet": "본격적인 대입준비 앞서 자신의 위치 파악해야\n\n모의고사 성적 토대로 정시ㆍ수시 전략 수립\n\n관심대학 전형방법 미리 ?...",
        "url": "https://biz.heraldcorp.com/view.php?ud=20221021000650",
        "image_url": "https://res.heraldm.com/content/image/2022/10/21/20221021000679_p.jpg",
        "language": "ko",
        "published_at": "2022-10-22T09:01:35.000000Z",
        "source": "biz.heraldcorp.com",
        "categories": [
          "general"
        ],
        "relevance_score": null
      },
      {
        "uuid": "6be2cde5-06cc-48e2-9f86-46b8cc416fe2",
        "title": "[아하! 우리말] 마스크 언제 벗는데? 올해 맞대?",
        "description": "철수 : 가을이 깊어지니 밖으로 자꾸 나가고 싶지? 실외 마스크는 벗었는데, 실내는 언제쯤 벗는데? 영희 : 응. 요즘은 마?...",
        "keywords": "헤럴드경제, 헤경, heraldcorp, 경제지, 신문, 뉴스, 보도, 속보, 정치, 경제, 사회, 국제, 문화, 사설, 컬럼, News, Newspaper, Korea, South Korea, Rep.Korea",
        "snippet": "[123RF]\n\n[헤럴드경제=조현아 기자] 철수 : 가을이 깊어지니 밖으로 자꾸 나가고 싶지? 실외 마스크는 벗었는데, 실내는 언?...",
        "url": "https://biz.heraldcorp.com/view.php?ud=20221022000017",
        "image_url": "https://res.heraldm.com/content/image/2022/10/22/20221022000028_p.jpg",
        "language": "ko",
        "published_at": "2022-10-22T09:01:35.000000Z",
        "source": "biz.heraldcorp.com",
        "categories": [
          "general"
        ],
        "relevance_score": null
      },
      {
        "uuid": "cf756637-4482-4eb2-8337-b493b9a57242",
        "title": "'전기차라서 드럼브레이크 문제없어요'는 누굴위한 말인가요? : 클리앙",
        "description": "드럼브레이크의 장점1 : 단일제동력이 강하다 드럼브레이크의 장점2 : 저렴하다 드럼브레이크의 단점1 : 열배출이 안되어...",
        "keywords": "",
        "snippet": "\n\n\n\n드럼브레이크의 장점1 : 단일제동력이 강하다\n\n드럼브레이크의 장점2 : 저렴하다\n\n\n\n\n\n드럼브레이크의 단점1 : 열배출이...",
        "url": "https://www.clien.net/service/board/cm_car/17651784",
        "image_url": "https://www.clien.net/service/image/favicon.ico",
        "language": "ko",
        "published_at": "2022-10-22T09:01:21.000000Z",
        "source": "clien.net",
        "categories": [
          "tech"
        ],
        "relevance_score": null
      },
      {
        "uuid": "ed7de70d-e8c6-484e-aa22-11e88167ddfd",
        "title": "Di Canio: “Lazio, mentalità sbagliata. Serviva un vice Immobile”",
        "description": "L’ex attaccante biancoceleste critica la scelta della società di non aver preso una punta centrale per sostituire il bomber",
        "keywords": "",
        "snippet": "ROMA - Lazio senza Ciro Immobile sino a gennaio. L’infortunio muscolare gli farà saltare tutte le restanti 7 partite da qui sino alla sosta. E Sarri è pront...",
        "url": "https://www.corrieredellosport.it/news/calcio/serie-a/lazio/2022/10/22-98802652/di_canio_lazio_mentalita_sbagliata_serviva_un_vice_immobile_",
        "image_url": "https://cdn.corrieredellosport.it/images/2022/10/22/090122334-139ca1da-ff1b-41ff-b309-bb69692d611d.jpg",
        "language": "it",
        "published_at": "2022-10-22T09:01:12.000000Z",
        "source": "corrieredellosport.it",
        "categories": [
          "sports"
        ],
        "relevance_score": null
      },
      {
        "uuid": "23ec9cc2-1bac-42ae-aab6-e6be4d239ccc",
        "title": "Juventus, Locatelli: \"E' cambiato il nostro atteggiamento, siamo più uniti\"",
        "description": "Le ultime in casa Juventus con le dichiarazioni di Locatelli dopo la vittoria  contro l'Empoli.",
        "keywords": "Serie A, fanta, Fantacalcio, Calcio",
        "snippet": "Juventus: le parole di Locatelli\n\n\"Stai ritrovando continuità? Sono felice della gara di questa sera, quest'anno so che le aspettative su di me sono alzate, vo...",
        "url": "https://www.fantacalcio.it/news/calcio-italia/22_10_2022/juventus-locatelli-intervista-432984",
        "image_url": "https://content.fantacalcio.it/web/img/large/locatelli-696c538b-5938-498c-9e33-b497f4893dac.jpg",
        "language": "it",
        "published_at": "2022-10-22T09:01:10.000000Z",
        "source": "fantacalcio.it",
        "categories": [
          "sports"
        ],
        "relevance_score": null
      },
      {
        "uuid": "0e5084cf-4e70-4a60-9cee-b40355b69558",
        "title": "あの頃がいっぱい~AKB48ミュージックビデオ集~ COMPLETE BOX (2017.10.04) (BDISO)",
        "description": "AKB48 - あの頃がいっぱい~AKB48ミュージックビデオ集~ COMPLETE BOX",
        "keywords": "",
        "snippet": "",
        "url": "https://jpmdblog.com/tv-show-akb48-あの頃がいっぱいakb48ミュージックビデオ集-complete-box-3/",
        "image_url": "https://i.imgur.com/g2l5jdf.jpg",
        "language": "en",
        "published_at": "2022-10-22T09:01:08.000000Z",
        "source": "jpmdblog.com",
        "categories": [
          "entertainment"
        ],
        "relevance_score": null
      },
      {
        "uuid": "c86b7678-7df3-4ec5-8cc2-2b7ae03ba621",
        "title": "Stolpersteine in Rhina: \"Antisemitismus hat heute viele Ausprägungen\"",
        "description": "In Haunetal-Rhina (Landkreis Hersfeld-Rotenburg) wurden am Freitagnachmittag Stolpersteine verlegt, die an das Schicksal ehemaliger jüdischer Mitbürger erinne...",
        "keywords": "Nachrichten, Fulda, Hessen, Alsfeld, Osthessen, News, Bad Hersfeld, Lauterbach, Neuhof, Flieden, news",
        "snippet": "Bei der Stolpersteinverlegung in Rhina wurde an das Schicksal ehemaliger Bürgerinnen und Bürger aus dem Ortsteil der Marktgemeinde Haunetal erinnert - Fotos: ...",
        "url": "https://osthessen-news.de/n11716659/stolpersteine-in-rhina-antisemitismus-hat-heute-viele-auspragungen.html",
        "image_url": "https://osthessen-news.de/favicon.ico",
        "language": "de",
        "published_at": "2022-10-22T09:01:00.000000Z",
        "source": "osthessen-news.de",
        "categories": [
          "general"
        ],
        "relevance_score": null
      },
      {
        "uuid": "1fd7afd8-556e-4361-b92c-a97db659dc32",
        "title": "Great Spaces: Classical and Modern Luxury Meet in Michigan Home",
        "description": "In this Great Spaces edition, read an overview of a European-style mansion on sale in the American Midwest.",
        "keywords": "",
        "snippet": "Property highlights:\n\nLocation: Rochester, Michigan\n\nListing price: $11,500,000\n\nFeatures: The 22-acre property is home to a gorgeous European-style mansion tha...",
        "url": "https://www.rismedia.com/2022/10/22/great-spaces-classical-modern-luxury-meet-michigan-home/",
        "image_url": "https://www.rismedia.com/wp-content/uploads/2022/10/Oct22_GS_Featured_Image.jpg",
        "language": "en",
        "published_at": "2022-10-22T09:00:53.000000Z",
        "source": "rismedia.com",
        "categories": [],
        "relevance_score": null
      }
    ]

  }
}
