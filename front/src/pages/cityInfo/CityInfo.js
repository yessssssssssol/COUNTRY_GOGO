import React, { useState, useContext, useRef } from 'react';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/btn/CommonButton';
import WeatherChart from '../../components/charts/WeatherChart';
import Bigmac from '../../components/charts/Bigmac';
import RadarChart from '../../components/charts/RadarChart';
import KakaoShareButton from '../../components/KakaoShare';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import * as Api from '../../api';
import './style.css';
import { ResultContext, userContext } from '../../App';

const CityInfo = () => {
  const [name, setName] = useState('명탐정');
  const [idx, setIdx] = useState(0);
  const {
    resultCountries,
    setResultCountries,
    resultHPIRank,
    setResultHPIRank,
    resultAmount,
    setResultAmount,
    resultBigmacPrice,
    setResultBigmacPrice,
  } = useContext(ResultContext);
  const { user } = useContext(userContext);
  console.log(user);
  const cardRef = useRef();
  const onDownloadBtn = () => {
    const card = cardRef.current;
    domtoimage.toBlob(card).then((blob) => {
      saveAs(blob, 'card.jpg');
    });
  };

  const flagUrl1st = `https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${resultCountries[0].Ab}-flag.gif`;
  const flagUrl2nd = `https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${resultCountries[1].Ab}-flag.gif`;
  const flagUrl3rd = `https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${resultCountries[2].Ab}-flag.gif`;

  const handleClick = async (e) => {
    setIdx(e.target.name);

    const country = resultCountries[e.target.name].Country;
    const city = resultCountries[e.target.name].City;
    const rank = await Api.get(`country/rank/${country}`);
    const amount = await Api.get(`country/one/${city}`);
    const bigmacPrice = await Api.get(`country/price/${country}`);
    console.log(rank);
    setResultHPIRank(rank.data);
    setResultAmount(amount.data);

    window.scrollTo({
      top: 450,
      behavior: 'smooth',
    });
  };

  const handleSaveCountry = () => {
    // 뱃지로 저장하는 코드 들어올 자리
  };

  return (
    <div className="container flex-col p-2.5">
      <Nav />
      {true ? (
        <div>
          <span className="flex text-xl lg:text-3xl font-irop">
            {name}님께{' '}
            {resultCountries[idx].Country === resultCountries[idx].City ? (
              <p className="inputCity text-xl lg:text-3xl font-fred mx-2">
                {resultCountries[idx].Country}
              </p>
            ) : (
              <p className="inputCity text-xl lg:text-3xl font-fred mx-2">
                {resultCountries[idx].Country}-{resultCountries[idx].City}
              </p>
            )}
            을(를) 추천합니다.
          </span>
        </div>
      ) : (
        <></>
      )}
      <div>
        <div className='flex m-28 mx-auto justify-center'>
          <img
            className='absolute w-96'
            src='/imgs/victoryStand.png'
            alt='시상대'
          />
          <img
            name="1"
            className="w-28 h-28 rounded-full relative flagHover cursor-pointer shadow-xl"
            style={{ left: '-20px', top: '-40px' }}
            src={flagUrl2nd}
            alt='2등 국기'
            onClick={handleClick}
            title={
              resultCountries[1].Country === resultCountries[1].City
                ? resultCountries[1].Country
                : `${resultCountries[1].Country}-${resultCountries[1].City}`
            }
          />
          <img
            name="0"
            className="w-28 h-28 rounded-full relative flagHover cursor-pointer shadow-xl"
            style={{ left: '-5px', top: '-75px' }}
            src={flagUrl1st}
            alt='1등 국기'
            onClick={handleClick}
            title={
              resultCountries[0].Country === resultCountries[0].City
                ? resultCountries[0].Country
                : `${resultCountries[0].Country}-${resultCountries[0].City}`
            }
          />
          <img
            name="2"
            className="w-28 h-28 rounded-full relative flagHover cursor-pointer shadow-xl"
            style={{ left: '0px', top: '-20px' }}
            src={flagUrl3rd}
            alt='3등 국기'
            onClick={handleClick}
            title={
              resultCountries[2].Country === resultCountries[2].City
                ? resultCountries[2].Country
                : `${resultCountries[2].Country}-${resultCountries[2].City}`
            }
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* 삼항연산자 false 자리에 쿠키 확인 조건 넣으면 됨 */}
        <div
          className={
            'flex justify-center items-center mb-3 lg:basis-1/2' +
            (false ? ' blur-sm' : '')
          }
        >
          <WeatherChart resultAmount={resultAmount} />
        </div>
        <div
          className={
            'flex justify-center items-center lg:basis-1/2' +
            (false ? ' blur-sm' : '')
          }
        >
          <HPIChart resultAmount={resultAmount} />
        </div>
      </div>
      <div className={'flex flex-col lg:flex-row' + (false ? ' blur-sm' : '')}>
        <div className="lg:basis-1/2 flex justify-center">
          <Bigmac resultAmount={resultAmount} />
        </div>
        <div className='lg:basis-1/2 flex justify-center'>
          <RadarChart resultAmount={resultAmount} />
        </div>
      </div>
      ;
      <div className="flex space-x-4 justify-end">
        <Button text="저장하기" type="main" onClick={handleSaveCountry} />

        <Button className="downBtn" text="다운로드" onClick={onDownloadBtn} />
        <KakaoShareButton />
      </div>
    </div>
  );
};

export default CityInfo;
