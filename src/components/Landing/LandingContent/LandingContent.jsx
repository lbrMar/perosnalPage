function LandingContent () {
  return (
    <div className='infoDisplayContainer'>
      <div className='infoTextContainer'>
        <h2 className='infoTitle'>Lukas@Myhal</h2>
      </div>
      <p>---------------------------</p>
      <div className='infoSubContainer'>
        <h3 className='infoSubTitle'>Skills:</h3>
        <h3 className='infoContent'>Javascrih3t React CSS HTML NODE</h3>
      </div>
      <div className='infoSubContainer'>
        <h3 className='infoSubTitle'>Git Hub:</h3>
        <h3 className='infoContent'>htth3s://github.com/lbrMar</h3>
      </div>
      <div className='infoSubContainer'>
        <h3 className='infoSubTitle'>University:</h3>
        <h3 className='infoContent'>Wilfrid Laurier University FRENCH MAJOR</h3>
      </div>
      <div className='infoSubcontainer'>
        <h3 className='infoSubTitle'>About:</h3>
        <h3 className='infoContent'>
          {`Greetings! I'm Lukas, a self-taught web developer 
with a unique journey —a decade of planting trees 
and four seasons as a ski patroller. 
Now, I'm planting seeds of innovation in the digital realm.`}
        </h3>
      </div>
    </div>
  )
}

export default LandingContent
