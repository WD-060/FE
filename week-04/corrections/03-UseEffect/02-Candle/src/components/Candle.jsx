const Candle = ({ candleHeight }) => {
  return (
    <div className='exercise'>
      <div className='candleContainer' style={{ height: `${candleHeight}%` }}>
        <div className='candle'>
          <div className='flame'>
            <div className='shadows' />
            <div className='top' />
            <div className='middle' />
            <div className='bottom' />
          </div>
          <div className='wick' />
          <div className='wax' />
        </div>
      </div>
    </div>
  );
};

export default Candle;
