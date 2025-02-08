import { useIntl } from "react-intl";
import { useState, useEffect } from 'react';
import InputBase from '@mui/material/InputBase';
import { CiSearch } from "react-icons/ci";
import { Box, Button, ButtonProps, Card, IconButton, Paper, styled, Typography } from "@mui/material";
import { AiOutlineStar } from "react-icons/ai";
import { Table, TableProps } from "antd";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import svgExport from './icons/svgexport.svg'
import svgdown from './icons/svgdown.svg'
import svgup from './icons/svgup.svg'
import svgcoin from './icons/svgcoin.svg'
import svgstars from './icons/svgstars.svg'
import kinedown from './icons/kinedown.svg'
import kineup from './icons/kineup.svg'


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
const Explore = () => {

  const intl = useIntl()
  const [selectTab, setSelectTab] = useState('whole')
  const [selectTime, setSelectTime] = useState('24h')
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

  const [followList, setFollowList] = useState<any>([]) 

  const onSelectClick = (value: string) => {
    setSelectTab(value)
  }

  const onSelectTime = (value: string) => {
    setSelectTime(value)
  }

  const stablecoinsList: DataType[] = [
    {
      assets: 'USDT',
      symbol: 'Tether USD',
      price: '0.9999',
      change: '-0.02',
      market: '1414亿'
    },
    {
      assets: 'USDC',
      symbol: 'USDC',
      price: '1.00',
      change: '-0.01',
      market: '553.1亿'
    },
  ]

  const newlyList: DataType[] = [
    {
      assets: 'ACX',
      symbol: 'Across Protocol',
      price: '0.3144',
      change: '-2.16',
      market: '1.4亿'
    },
    {
      assets: 'ACT',
      symbol: 'Act I The AI Prophecy',
      price: '0.1815',
      change: '-6.86',
      market: '1.7亿'
    },
  ]

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
    },
    {
      assets: 'USDC',
      symbol: 'USDC',
      price: '1.00',
      change: '-0.01',
      market: '553.1亿'
    },
    {
      assets: 'DOGE',
      symbol: 'Dogecoin',
      price: '0.2588',
      change: '-2.57',
      market: '382亿'
    },
    {
      assets: 'ADA',
      symbol: 'Cardano',
      price: '0.7473',
      change: '-1.06',
      market: '267.7亿'
    },
    {
      assets: 'TRX',
      symbol: 'TRON',
      price: '0.2271',
      change: '0.94',
      market: '195.2亿'
    },
    {
      assets: 'WBTC',
      symbol: 'Wrapped Bitcoin',
      price: '98,326.30',
      change: '-0.40',
      market: '126.4亿'
    },
    {
      assets: 'ACX',
      symbol: 'Across Protocol',
      price: '0.3144',
      change: '-2.16',
      market: '1.4亿'
    },
    {
      assets: 'ACT',
      symbol: 'Act I The AI Prophecy',
      price: '0.1815',
      change: '-6.86',
      market: '1.7亿'
    },
  ]

  const onStar = (name: string) => {
    const updateStar = selectStar.map(star => {
      if (star.name == name) {
        return {...star, select: !star.select}
      }
      return star
    })
    setSelectStar(updateStar)
  }

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
          <Typography variant="body1" sx={{ color: '#000', fontWeight: 600, fontSize: '16px', lineHeight: '20px' }}  >
            US${record.price}
          </Typography>
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

  useEffect(() => {
    const newStar = selectStar.filter(item => item.select)
    console.log('newStar', newStar)
    let list = []
    let stable = []
    let newly = []

    if (selectTab == 'stablecoins') {
      for (let i = 0 ; i < newStar.length ; i++) {
        const newList = stablecoinsList.filter(item => item.assets == newStar[i].name)
        stable.push(newList[0])
      }
    } else if (selectTab == 'newly-listed') {
      for (let i = 0 ; i < newStar.length ; i++) {
        const newList = newlyList.filter(item => item.assets == newStar[i].name)
        newly.push(newList[0])
      }
    } else {
      for (let i = 0 ; i < newStar.length ; i++) {
        const newList = dataList.filter(item => item.assets == newStar[i].name)
        list.push(newList[0])
      }
    }
    const newLists = [...new Set([...list, ...stable, ...newly])]

    setFollowList(newLists)

  }, [selectStar])

  
  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
     <div style={{ color: '#7132f5', fontSize: '40px' }}>
      {intl.formatMessage({id: 'explore'})}
     </div>
     <div>
     <Paper
      component="form"
      sx={{ p: '5px', display: 'flex', alignItems: 'center', width: 300, borderRadius: '10px' }}
    >
      <IconButton sx={{ p: '5px' }} aria-label="menu">
       <CiSearch size={35}/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={intl.formatMessage({id: 'search-text'})}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
     </div>
     </div>
     <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
       <TabButton style={{ backgroundColor: selectTab == 'whole' ? '#fff' : 'transparent', borderRadius: '15px', padding: '8px 15px'}} onClick={() => onSelectClick('whole')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={svgExport}/>
          <span style={{ color: '#000', paddingLeft: '8px' }}>
            {intl.formatMessage({id: 'whole'})}
          </span>
        </div>
       </TabButton>
       <TabButton style={{ backgroundColor: selectTab == 'follow-list' ? '#fff' : 'transparent', borderRadius: '15px', padding: '8px 15px'}} onClick={() => onSelectClick('follow-list')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AiOutlineStar size={20} color="#000"/>
          <span style={{ color: '#000', paddingLeft: '8px' }}>
            {intl.formatMessage({id: 'follow-list'})}
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
      selectTab == 'whole' ? (
        <>
          <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <span style={{ color: '#000', fontSize: '20px' }}>
            {intl.formatMessage({id: 'all-cryptocurrencies'})}
          </span>
          <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
            {dataList.length} 资产
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == '24h'? '#ededef': 'transparent', color: selectTime == '24h' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('24h')}>
            {intl.formatMessage({id: '24h'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-week'? '#ededef': 'transparent', color: selectTime == 'one-week' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-week')}>
            {intl.formatMessage({id: 'one-week'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-month'? '#ededef': 'transparent', color: selectTime == 'one-month' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-month')}>
            {intl.formatMessage({id: 'one-month'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-year'? '#ededef': 'transparent', color: selectTime == 'one-year' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-year')}>
            {intl.formatMessage({id: 'one-year'})}
          </TabButton>

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
            selectTab == 'follow-list' ? (
              <>
                <Card style={{ width: '100%', padding: '30px 20px', borderRadius: '20px', marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <span style={{ color: '#000', fontSize: '20px' }}>
            {intl.formatMessage({id: 'follow-list'})}
          </span>
          <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
            {followList.length} 资产
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == '24h'? '#ededef': 'transparent', color: selectTime == '24h' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('24h')}>
            {intl.formatMessage({id: '24h'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-week'? '#ededef': 'transparent', color: selectTime == 'one-week' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-week')}>
            {intl.formatMessage({id: 'one-week'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-month'? '#ededef': 'transparent', color: selectTime == 'one-month' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-month')}>
            {intl.formatMessage({id: 'one-month'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-year'? '#ededef': 'transparent', color: selectTime == 'one-year' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-year')}>
            {intl.formatMessage({id: 'one-year'})}
          </TabButton>

        </div>

        
      </div>
      <Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
        <Table columns={columns} dataSource={followList} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
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
          <span style={{ color: '#000', fontSize: '20px' }}>
            {intl.formatMessage({id: 'increase-in-price'})}
          </span>
          <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
            {dataList.filter(item => Number(item.change) >= 0).length} 资产
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == '24h'? '#ededef': 'transparent', color: selectTime == '24h' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('24h')}>
            {intl.formatMessage({id: '24h'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-week'? '#ededef': 'transparent', color: selectTime == 'one-week' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-week')}>
            {intl.formatMessage({id: 'one-week'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-month'? '#ededef': 'transparent', color: selectTime == 'one-month' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-month')}>
            {intl.formatMessage({id: 'one-month'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-year'? '#ededef': 'transparent', color: selectTime == 'one-year' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-year')}>
            {intl.formatMessage({id: 'one-year'})}
          </TabButton>

        </div>

        
      </div>
      <Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
        <Table columns={columns} dataSource={dataList.filter(item => Number(item.change) >= 0).sort((a,b) => Number(b.change) - Number(a.change))} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
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
          <span style={{ color: '#000', fontSize: '20px' }}>
            {intl.formatMessage({id: 'decline'})}
          </span>
          <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
          {dataList.filter(item => Number(item.change) < 0).length} 资产
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == '24h'? '#ededef': 'transparent', color: selectTime == '24h' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('24h')}>
            {intl.formatMessage({id: '24h'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-week'? '#ededef': 'transparent', color: selectTime == 'one-week' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-week')}>
            {intl.formatMessage({id: 'one-week'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-month'? '#ededef': 'transparent', color: selectTime == 'one-month' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-month')}>
            {intl.formatMessage({id: 'one-month'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-year'? '#ededef': 'transparent', color: selectTime == 'one-year' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-year')}>
            {intl.formatMessage({id: 'one-year'})}
          </TabButton>

        </div>

        
      </div>
      <Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
        <Table columns={columns} dataSource={dataList.filter(item => Number(item.change) < 0)} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
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
          <span style={{ color: '#000', fontSize: '20px' }}>
            {intl.formatMessage({id: 'stablecoins'})}
          </span>
          <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
            {followList.length} 资产
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == '24h'? '#ededef': 'transparent', color: selectTime == '24h' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('24h')}>
            {intl.formatMessage({id: '24h'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-week'? '#ededef': 'transparent', color: selectTime == 'one-week' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-week')}>
            {intl.formatMessage({id: 'one-week'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-month'? '#ededef': 'transparent', color: selectTime == 'one-month' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-month')}>
            {intl.formatMessage({id: 'one-month'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-year'? '#ededef': 'transparent', color: selectTime == 'one-year' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-year')}>
            {intl.formatMessage({id: 'one-year'})}
          </TabButton>

        </div>

        
      </div>
      <Box sx={{ '& .ant-table-wrapper tfoot>tr>td': { padding: '10px' }, '& .ant-table-wrapper .ant-table-tbody >tr >td': { borderTop: '0.5px solid rgba(192, 192, 192, 0.5) ', padding: '10px 10px' }, '& .ant-table-wrapper .ant-table': { borderRadius: '20px' }, '& .ant-table-wrapper .ant-table-cell': { padding: '10px' }, '& .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': { paddingLeft: 1 }, '& .ant-table-wrapper .ant-table-tbody .ant-table-row >.ant-table-cell-row-hover': { backgroundColor: '#F6F6F6', cursor: 'pointer' } }}>
        <Table columns={columns} dataSource={stablecoinsList} components={components} scroll={{ x: 815 }} pagination={{ hideOnSinglePage: true }}  />
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
          <span style={{ color: '#000', fontSize: '20px' }}>
            {intl.formatMessage({id: 'newly-listed'})}
          </span>
          <span style={{ color: '#7c7b8e', fontSize: '16px' }}>
            {newlyList.length} 资产
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == '24h'? '#ededef': 'transparent', color: selectTime == '24h' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('24h')}>
            {intl.formatMessage({id: '24h'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-week'? '#ededef': 'transparent', color: selectTime == 'one-week' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-week')}>
            {intl.formatMessage({id: 'one-week'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-month'? '#ededef': 'transparent', color: selectTime == 'one-month' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-month')}>
            {intl.formatMessage({id: 'one-month'})}
          </TabButton>
          <TabButton style={{ borderRadius: '15px', padding: '8px 15px', fontWeight: 700, background: selectTime == 'one-year'? '#ededef': 'transparent', color: selectTime == 'one-year' ? '#000' : '#adadb9' }} onClick={() => onSelectTime('one-year')}>
            {intl.formatMessage({id: 'one-year'})}
          </TabButton>

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
    </>
  )
}

export default Explore