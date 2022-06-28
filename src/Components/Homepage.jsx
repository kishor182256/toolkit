import React from 'react';
import { Typography,Statistic,Col,Row} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';


const {Title} = Typography;


const Homepage = () => {

  const {data,isFetching} = useGetCryptosQuery();
  

  const globalData = data?.data?.stats;
  console.log('Homepagedata', data,'isFetching', globalData);

  return (
    <>
      <Title level={2} className='heading'>Global Crypto App</Title>
      <Row>
        <Col span={12}><Statistic title='Total Currencies' value={globalData.total}/></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={globalData.totalExchanges}/></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalData.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalData.total24hVolume)}/></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalData.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptos in the World</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest News</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage