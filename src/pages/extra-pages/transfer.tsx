import { useIntl } from 'react-intl'

const Transfer = () => {
  const intl = useIntl()
  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
     <div style={{ color: '#7132f5', fontSize: '40px' }}>
      {intl.formatMessage({id: 'transfer-account'})}
     </div>
     <div>
     </div>
     </div>
    </>
  )
}

export default Transfer