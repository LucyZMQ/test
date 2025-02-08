import { Box, Button, ButtonProps, Card, IconButton, styled, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import authenticationIcon from './icons/authentication.webp'
import { useState } from 'react'
import buyIcon from './icons/buyIcon.svg'
import sellIcon from './icons/sellIcon.svg'
import transIcon from './icons/transIcon.svg'
import depositIcon from './icons/depositIcon.svg'
import drawingIcon from './icons/drawingIcon.svg'
import btcKine from './icons/btcKine.svg'
import ethKine from './icons/ethKine.svg'
import hotIcon from './icons/hotIcon.svg'
import svgdown from './icons/svgdown.svg'
import svgup from './icons/svgup.svg'
import svgcoin from './icons/svgcoin.svg'
import svgstars from './icons/svgstars.svg'
import { Table, TableProps } from 'antd'
import kinedown from './icons/kinedown.svg'
import kineup from './icons/kineup.svg'
import { FaRegStar, FaStar } from 'react-icons/fa'



const TabButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#000',
  boxShadow: 'none',
  borderRadius: '15px',
  padding: '8px 15px',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#000',
  },
  '&:after': {
    boxShadow: 'none'
  },
}));
type DataType = {
  assets: string;
  price: string
  change: string;
  market: string
  symbol: string
}

// 定义要覆盖默认的 table 背景元素的组件
const components = {
  table: (props: any) => {
    const { style } = props;
    const customStyle = {
      ...style,
      backgroundColor: "#fff", // 设置表格的背景颜色
      borderRadius: '10px'

    };
    return <table {...props} style={customStyle} />;
  },
  header: {
    // 自定义头部行组件
    wrapper: (props: any) => (
      <thead style={{ color: '#9b9b9b', fontSize: '13px', borderBottom: '1px solid #f0f0f0' }}>
        {props.children}
      </thead>
    ),
  },
};

const Home = () => {
  const [selectTime, setSelectTime] = useState('one-week')
  function getTimeOfDay() {
    const now = new Date()
    const hours = now.getHours()
    if (hours < 12) {
      return 'morning'
    } else if (hours < 18) {
      return 'afternoon'
    } else {
      return 'night'
    }
  }
  const intl = useIntl()

  const onClickSelectTime = (value: string) => {
    setSelectTime(value)
  }

  const dataList: DataType[] = [
    {
      assets: 'BTC',
      symbol: 'Bitcoin',
      price: '97,246.68',
      change: '-0.88',
      market: '1.9万亿'
    },
    {
      assets: 'ETH',
      symbol: 'Ethereum',
      price: '2,806.88',
      change: '2.60',
      market: '3375亿'
    },
    {
      assets: 'USDT',
      symbol: 'Tether USD',
      price: '0.9999',
      change: '-0.02',
      market: '1414亿'
    },
    {
      assets: 'XRP',
      symbol: 'XRP',
      price: '2.42',
      change: '-3.92',
      market: '1391.9亿'
    },
    {
      assets: 'SOL',
      symbol: 'Solana',
      price: '200.05',
      change: '-3.53',
      market: '973亿'
    }
  ]

  const upList: DataType[] = [
    {
      assets: 'CSM',
      symbol: 'Crust Shadow',
      price: '0.004289',
      change: '42.12',
      market: ''
    },
    {
      assets: 'AVT',
      symbol: 'Aventus',
      price: '',
      change: '40.17',
      market: '2873.3万'
    },
    {
      assets: 'BLZ',
      symbol: 'Bluzelle',
      price: '0.04809',
      change: '15.40',
      market: '2227.3万'
    },
    {
      assets: 'ROOK',
      symbol: 'ROOK',
      price: '0.75',
      change: '13.16',
      market: '55.5万'
    },
    {
      assets: 'HNT',
      symbol: 'Helium',
      price: '3.50',
      change: '10.27',
      market: '6.3亿'
    }
  ]

  const downList: DataType[] = [
    {
      assets: 'KINT',
      symbol: 'Kintsugi',
      price: '0.4425',
      change: '-25.66',
      market: '122.2万'
    },
    {
      assets: 'FWOG',
      symbol: 'Fwog',
      price: '0.06365',
      change: '-23.63',
      market: '6251.3万'
    },
    {
      assets: 'DRV',
      symbol: 'Derive',
      price: '0.0719',
      change: '-19.14',
      market: '3962.8万'
    },
    {
      assets: 'SIGMA',
      symbol: 'Sigma',
      price: '0.02136',
      change: '-16.99',
      market: '1940.9万'
    },
    {
      assets: 'GST',
      symbol: 'Green Satoshi Token',
      price: '0.0139',
      change: '-15.15',
      market: '1587.1万'
    }
  ]

  const coinsList: DataType[] = [
    {
      assets: 'USDT',
      symbol: 'Tether USD',
      price: '1.00',
      change: '-0.01',
      market: '1413.9亿'
    },
    {
      assets: 'USDC',
      symbol: 'USDC',
      price: '0.9999',
      change: '0.01',
      market: '557.5亿'
    },
    {
      assets: 'USDS',
      symbol: 'USDS',
      price: '1.05',
      change: '0.02',
      market: '79.4亿'
    },
    {
      assets: 'DAI',
      symbol: 'Dai',
      price: '1.00',
      change: '0.02',
      market: '35.1亿'
    },
    {
      assets: 'PYUSD',
      symbol: 'PayPal USD',
      price: '1.00',
      change: '0.01',
      market: '5.7亿'
    }
  ]
  const newlyList: DataType[] = [
    {
      assets: 'ACX',
      symbol: 'Across Protocol',
      price: '0.3266',
      change: '-0.57',
      market: '1.4亿'
    },
    {
      assets: 'ACT',
      symbol: 'Act I The AI Prophecy',
      price: '0.1895',
      change: '-1.32',
      market: '1.8亿'
    },
    {
      assets: 'BERA',
      symbol: 'Berachain',
      price: '7.69',
      change: '-4.80',
      market: '8亿'
    },
    {
      assets: 'BIO',
      symbol: 'Bio Protocol',
      price: '0.1357',
      change: '-9.82',
      market: '2.2亿'
    },
    {
      assets: 'CLV',
      symbol: 'Clover Finance',
      price: '0.0445',
      change: '-4.11',
      market: '5977.2万'
    }
  ]
  const [selectTab, setSelectTab] = useState('hot')

  const onSelectClick = (value: string) => {
    setSelectTab(value)
  }

  const [selectStar, setSelectStar] = useState([
    {name: 'BTC', select: true},
    {name: 'ETH', select: true},
    {name: 'USDT', select: false},
    {name: 'XRP', select: false},
    {name: 'SOL', select: false},
    {name: 'USDC', select: false},
    {name: 'DOGE', select: false},
    {name: 'ADA', select: false},
    {name: 'TRX', select: false},
    {name: 'WBTC', select: false},
    {name: 'ACX', select: false},
    {name: 'ACT', select: false},
  ])

  const columns: TableProps<DataType>['columns'] = [
    {
      title: intl.formatMessage({id: 'assets'}),
      dataIndex: 'assets',
      key: 'assets',
      width: '500px',
      align: 'start',
      render: (_, record) => (
        <>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          {/* <TokenColorIcon size={30} name={record.assets}/> */}
          <img src={`https://assets.kraken.com/marketing/web/icons-uni-webp/s_${record.assets.toLowerCase()}.webp?i=kds`} style={{ width: '30px' }}/>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
          <Typography variant="body1" sx={{ color: '#000', fontWeight: 600, fontSize: '16px', lineHeight: '20px' }}  >
            {record.symbol}
          </Typography>
          <Typography variant="body1" sx={{ color: '#73767f', fontWeight: 600, fontSize: '12px', lineHeight: '18px' }}  >
            {record.assets}
          </Typography>
          </div>
          </div>
        </>
      ),
    },
    {
      title: intl.formatMessage({id: 'price'}),
      dataIndex: 'price',
      align: 'start',
      key: 'price',
      render: (_, record) => (
        <>
          {
            record.price.length == 0 ? (
              <>
               <Box style={{background: '#ededf0', borderRadius: '15px', padding: '5px 10px', color: '#4d485e', fontSize: '16px', width: 'fit-content'}}>
                不可用
               </Box>
              </>
            ) : (
              <>
               <Typography variant="body1" sx={{ color: '#000', fontWeight: 600, fontSize: '16px', lineHeight: '20px' }}  >
            US${record.price}
          </Typography>
              </>
            )
          }
        </>
      ),
    },
    {
      title: `${intl.formatMessage({id: 'change'})}(${intl.formatMessage({id: selectTime})})`,
      dataIndex: 'change',
      width: '150px',
      key: 'chenge',
      align: 'end',
      render: (_, record) => (
        <>
        {
          Number(record.change) >= 0 ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={kineup} style={{ width: '20px' }}/>
              <Typography variant="body1" sx={{ color: Number(record.change) >= 0 ? '#58bd7d' : '#d33535', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginLeft: '8px' }}  >
            {`${record.change}%`}
          </Typography>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={kinedown} style={{ width: '20px' }}/>
              <Typography variant="body1" sx={{ color: Number(record.change) >= 0 ? '#58bd7d' : '#d33535', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginLeft: '8px' }}  >
            {`${Math.abs(Number(record.change))}%`}
          </Typography>
            </div>

          )
        }
          
        </>
      )

    },
    {
      title: intl.formatMessage({id: 'market-value'}),
      key: 'market',
      dataIndex: 'market',
      align: 'center',
      render: (_, record) => (
        <>
          <Typography variant="body1" sx={{ color: '#000', fontWeight: 600, fontSize: '16px', lineHeight: '20px' }}  >
            US${record.market}
          </Typography>
        </>
      ),
    },
    {
      title: '',
      key: 'buy',
      dataIndex: 'buy',
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <>
        <TabButton style={{ color: '#6a3ed0', background: '#ece1fe'}}>
          {intl.formatMessage({id: 'purchase'})}
        </TabButton>
        </>
      ),
    },
    {
      title: '',
      key: 'star',
      dataIndex: 'star',
      align: 'center',
      render: (_, record) => (
        <>
         <IconButton onClick={() => onStar(record.assets)} style={{padding: 0}}>
          {selectStar.filter(item => item.name == record.assets)[0]?.select ? <FaStar size={30} color="#e9b000"/> : <FaRegStar size={30}/>  }
         </IconButton>
        </>
      )
    }
  ];

  const onStar = (name: string) => {
    const updateStar = selectStar.map(star => {
      if (star.name == name) {
        return {...star, select: !star.select}
      }
      return star
    })
    setSelectStar(updateStar)
  }
  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
     <div style={{ color: '#7132f5', fontSize: '40px' }}>
      {intl.formatMessage({id: getTimeOfDay()})}!
     </div>
     <div>
     </div>
     </div>
     <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '20px' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <img src={authenticationIcon} style={{ width: '116px'}}/>
        <Typography variant="body1" sx={{ color: '#2b1463', fontWeight: 600, fontSize: '20px', lineHeight: '20px', marginTop: '20px' }}  >
            {intl.formatMessage({id: 'complete_certification'})}
          </Typography>
          <Typography variant="body1" sx={{ color: '#6e6882', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '10px' }}  >
            {intl.formatMessage({id: 'authentication_information'})}
          </Typography>
          <TabButton style={{background: '#5e2bc8', color: '#fff', marginTop: '20px'}}>
          {intl.formatMessage({id: 'complete_certification'})}
          </TabButton>


      </div>

     </Card>
     <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Typography variant="body1" sx={{ color: '#8c879b', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '10px', textDecoration: 'underline', textDecorationStyle: 'dashed' }}  >
            {intl.formatMessage({id: 'portfolio_value'})}
          </Typography>
          <Typography variant="body1" sx={{ color: '#6e6882', fontWeight: 600, fontSize: '38px', lineHeight: '20px', marginTop: '10px' }}  >
            US$<span style={{ color: '#2b1463' }}>0.00</span>
          </Typography>

      </div>
          <Box style={{ background: '#ededf0', borderRadius: '15px', padding: '5px', display: 'flex', alignItems: 'center' }}>
            <TabButton style={{ color: selectTime == 'one-week' ? '#2b1463' : '#746e87', background: selectTime == 'one-week' ? '#fff' : 'transparent', borderRadius: '10px', padding: '4px 10px' }} onClick={() => {onClickSelectTime('one-week')}}>
              {intl.formatMessage({id: 'one-week'})}
            </TabButton>
            <TabButton style={{ color: selectTime == 'one-month' ? '#2b1463' : '#746e87', background: selectTime == 'one-month' ? '#fff' : 'transparent', borderRadius: '10px', padding: '4px 10px' }} onClick={() => {onClickSelectTime('one-month')}}>
              {intl.formatMessage({id: 'one-month'})}
            </TabButton>
            <TabButton style={{ color: selectTime == 'three_month' ? '#2b1463' : '#746e87', background: selectTime == 'three_month' ? '#fff' : 'transparent', borderRadius: '10px', padding: '4px 10px' }} onClick={() => {onClickSelectTime('three_month')}}>
              {intl.formatMessage({id: 'three_month'})}
            </TabButton>
            <TabButton style={{ color: selectTime == 'six_month' ? '#2b1463' : '#746e87', background: selectTime == 'six_month' ? '#fff' : 'transparent', borderRadius: '10px', padding: '4px 10px' }} onClick={() => {onClickSelectTime('six_month')}}>
              {intl.formatMessage({id: 'six_month'})}
            </TabButton>
            <TabButton style={{ color: selectTime == 'one-year' ? '#2b1463' : '#746e87', background: selectTime == 'one-year' ? '#fff' : 'transparent', borderRadius: '10px', padding: '4px 10px' }} onClick={() => {onClickSelectTime('one-year')}}>
              {intl.formatMessage({id: 'one-year'})}
            </TabButton>
            <TabButton style={{ color: selectTime == 'whole' ? '#2b1463' : '#746e87', background: selectTime == 'whole' ? '#fff' : 'transparent', borderRadius: '10px', padding: '4px 10px' }} onClick={() => {onClickSelectTime('whole')}}>
              {intl.formatMessage({id: 'whole'})}
            </TabButton>
          </Box>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton style={{ borderRadius: '50px', width: '50px', height: '50px', background: '#5e2bc8' }}>
          <img src={buyIcon}/>
        </IconButton>
        <Typography variant="body1" sx={{ color: '#824bf6', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '10px' }}  >
            {intl.formatMessage({id: 'buy'})}
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '40px' }}>
        <IconButton style={{ borderRadius: '50px', width: '50px', height: '50px', background: '#5e2bc8' }}>
          <img src={sellIcon}/>
        </IconButton>
        <Typography variant="body1" sx={{ color: '#824bf6', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '10px' }}  >
            {intl.formatMessage({id: 'sell'})}
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '40px' }}>
        <IconButton style={{ borderRadius: '50px', width: '50px', height: '50px', background: '#5e2bc8' }}>
          <img src={transIcon}/>
        </IconButton>
        <Typography variant="body1" sx={{ color: '#824bf6', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '10px' }}  >
            {intl.formatMessage({id: 'transformation'})}
          </Typography>
        </div>
        
        
        <div style={{ height: '2.5rem', width: '1px', borderLeft: '1px solid #6e68823d', margin: '0 40px'}}>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton style={{ borderRadius: '50px', width: '50px', height: '50px', background: '#f4f3f5' }}>
          <img src={depositIcon}/>
        </IconButton>
        <Typography variant="body1" sx={{ color: '#6e6882', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '10px' }}  >
            {intl.formatMessage({id: 'deposit'})}
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '40px' }}>
        <IconButton style={{ borderRadius: '50px', width: '50px', height: '50px', background: '#f4f3f5' }}>
          <img src={drawingIcon}/>
        </IconButton>
        <Typography variant="body1" sx={{ color: '#6e6882', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '10px' }}  >
            {intl.formatMessage({id: 'drawing'})}
          </Typography>
        </div>
      </div>
     </Card>
     <Typography variant="body1" sx={{ color: '#2b1463', fontWeight: 600, fontSize: '20px', lineHeight: '20px', marginTop: '50px' }}  >
            {intl.formatMessage({id: 'follow-list'})}
          </Typography>

          <div style={{ display: 'flex', alignItems: 'center'}}>
          <Card style={{ padding: '20px 0px', borderRadius: '20px', marginTop: '20px', width: 'fit-content' }}>
        <div style={{ display: 'flex', alignItems: 'center', margin: '0 20px 10px 20px' }}>
          <img src='https://assets.kraken.com/marketing/web/icons-uni-webp/s_btc.webp?i=kds' style={{ width: '32px' }}/>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
          <Typography variant="body1" sx={{ color: '#2b1463', fontWeight: 600, fontSize: '20px', lineHeight: '20px' }}  >
            Bitcoin
          </Typography>
          <Typography variant="body1" sx={{ color: '#c4c2cd', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '5px' }}  >
            BTC
          </Typography>
          </div>
          </div>
          <img src={btcKine} style={{ width: '100%' }}/>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 20px 0px 20px' }}>
          <Typography variant="body1" sx={{ color: '#2b1463', fontWeight: 600, fontSize: '20px', lineHeight: '20px' }}  >
            US$96,809.32
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '20px'}}>
            <img src={kinedown}/>
            <Typography variant="body1" sx={{ color: '#d42c51', fontWeight: 600, fontSize: '16px', lineHeight: '20px' }}  >
            1.28%
          </Typography>

          </div>

          </div>

      </Card>
      <Card style={{ padding: '20px 0px', borderRadius: '20px', marginTop: '20px', width: 'fit-content', marginLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', margin: '0 20px 10px 20px' }}>
          <img src='https://assets.kraken.com/marketing/web/icons-uni-webp/s_eth.webp?i=kds' style={{ width: '32px' }}/>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
          <Typography variant="body1" sx={{ color: '#2b1463', fontWeight: 600, fontSize: '20px', lineHeight: '20px' }}  >
            Ethereum
          </Typography>
          <Typography variant="body1" sx={{ color: '#c4c2cd', fontWeight: 600, fontSize: '16px', lineHeight: '20px', marginTop: '5px' }}  >
            ETH
          </Typography>
          </div>
          </div>
          <img src={ethKine} style={{ width: '100%' }}/>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 20px 0px 20px' }}>
          <Typography variant="body1" sx={{ color: '#2b1463', fontWeight: 600, fontSize: '20px', lineHeight: '20px' }}  >
            US$2,720.05
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '20px'}}>
            <img src={kinedown}/>
            <Typography variant="body1" sx={{ color: '#d42c51', fontWeight: 600, fontSize: '16px', lineHeight: '20px' }}  >
            4.24%
          </Typography>

          </div>

          </div>

      </Card>


          </div>
          <Typography variant="body1" sx={{ color: '#2b1463', fontWeight: 600, fontSize: '20px', lineHeight: '20px', marginTop: '50px' }}  >
            {intl.formatMessage({id: 'market'})}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
       <TabButton style={{ backgroundColor: selectTab == 'hot' ? '#fff' : 'transparent', borderRadius: '15px', padding: '8px 15px'}} onClick={() => onSelectClick('hot')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={hotIcon}/>
          <span style={{ color: '#000', paddingLeft: '8px' }}>
            {intl.formatMessage({id: 'hot'})}
          </span>
        </div>
       </TabButton>
       <TabButton style={{ backgroundColor: selectTab == 'increase' ? '#fff' : 'transparent', borderRadius: '15px', padding: '8px 15px'}} onClick={() => onSelectClick('increase')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={svgup}/>
          <span style={{ color: '#000', paddingLeft: '8px' }}>
            {intl.formatMessage({id: 'increase-in-price'})}
          </span>
        </div>
       </TabButton>
       <TabButton style={{ backgroundColor: selectTab == 'decline' ? '#fff' : 'transparent', borderRadius: '15px', padding: '8px 15px'}} onClick={() => onSelectClick('decline')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={svgdown}/>
          <span style={{ color: '#000', paddingLeft: '8px' }}>
            {intl.formatMessage({id: 'decline'})}
          </span>
        </div>
       </TabButton>
       <TabButton style={{ backgroundColor: selectTab == 'stablecoins' ? '#fff' : 'transparent', borderRadius: '15px', padding: '8px 15px'}} onClick={() => onSelectClick('stablecoins')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={svgcoin}/>
          <span style={{ color: '#000', paddingLeft: '8px' }}>
            {intl.formatMessage({id: 'stablecoins'})}
          </span>
        </div>
       </TabButton>
       <TabButton style={{ backgroundColor: selectTab == 'newly-listed' ? '#fff' : 'transparent', borderRadius: '15px', padding: '8px 15px'}} onClick={() => onSelectClick('newly-listed')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={svgstars}/>
          <span style={{ color: '#000', paddingLeft: '8px' }}>
            {intl.formatMessage({id: 'newly-listed'})}
          </span>
        </div>
       </TabButton>
     </div>
     {
      selectTab == 'hot' ? (
        <>
          <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
            资产
          </span>
        </div>
      </div>
      <Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
        <Table columns={columns} dataSource={dataList} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
      </Box>

     </Card>
        </>
      ) : (
        <>
         {
          selectTab == 'increase' ? (
            <>
              <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '20px' }}>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
  <div style={{ display: 'flex', flexDirection: 'column'}}>
    <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
     资产
    </span>
  </div>
</div>
<Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
  <Table columns={columns} dataSource={upList} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
</Box>

</Card>
            </>
          ) : (
            <>
              {
                selectTab == 'decline' ? (
                  <>
                    <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '20px' }}>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
  <div style={{ display: 'flex', flexDirection: 'column'}}>
    <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
    资产
    </span>
  </div>
</div>
<Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
  <Table columns={columns} dataSource={downList} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
</Box>

</Card>
                  </>
                ) : (
                  <>
                   {
                    selectTab == 'stablecoins' ? (
                      <>
                        <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '20px' }}>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
  <div style={{ display: 'flex', flexDirection: 'column'}}>
    <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
      资产
    </span>
  </div>
</div>
<Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
  <Table columns={columns} dataSource={coinsList} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
</Box>

</Card>
                      </>
                    ) : (
                      <>
                       {
                        selectTab == 'newly-listed' ? (
                          <>
                            <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '20px' }}>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
  <div style={{ display: 'flex', flexDirection: 'column'}}>
    <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
      资产
    </span>
  </div>
</div>
<Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
  <Table columns={columns} dataSource={newlyList} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
</Box>

</Card>
                          </>
                        ) : (
                          <></>
                        )
                       }
                      </>
                    )
                   }
                  </>
                )
              }
            </>
          )
         }
        </>
      )
     }
      
     
    </>
  )
}

export default Home