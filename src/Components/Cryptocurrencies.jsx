import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Row,Col,Card} from 'antd'
import { Link } from 'react-router-dom';
import millify from 'millify';




const Cryptocurrencies = ({simplified}) => {

  const count = simplified ?10:100;
  const {data,isFetching} = useGetCryptosQuery(count);
  const [crypto,setCrypto] = useState(data?.data?.coins)
  const [search,setSearch] = useState('')

  

  useEffect(() => {
       setCrypto(data?.data?.coins)
       const filteredData = data?.data?.coins.filter((item) => item.name.toLowerCase().includes(search));
       setCrypto(filteredData)
  },[data,search])
  if(isFetching) return 'Loading...'
  return (
    <>
      {!simplified && <div className='search-crypto'>
          <input placeholder='Crypto Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>}
    <Row gutter={[32,32]} className='crypto-card-container'>
        {
          crypto?.map((currencies)=>{
            return(
              <Col lg={6} sm={12} md={24} className='crypto-card' key={currencies.rank}>
                <Link to={`/crypto/${currencies.uuid}`}>
                  <Card title={`${currencies.rank} ${currencies.name}`} hoverable
                 extra={<img className='crypto-image' src={currencies.iconUrl}/>}>
                      <p>Price:{millify(currencies.price)}</p>
                      <p>Market Cap:{millify(currencies.marketCap)}</p>
                        <p>Change:{millify(currencies.change)}</p>
                  </Card>
                </Link>
              </Col>
            )
          })
        }
    </Row>
    </>
  )
}

export default Cryptocurrencies