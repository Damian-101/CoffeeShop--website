import "../scss/loadingscreen.scss";



const errPage = () => {
  document.getElementsByClassName("loadingscreen")[0].style.display = "none"
  return(
    <div>Hello world</div>
  )
}
// errPage()

const loadingScreen = () => {
  return (
      <div className="loadingscreen">
        <div className="loadingio-spinner-rolling-41td33w7vp1">
          <div className="ldio-zpph7eoltp">
            <div></div>
          </div>
        </div>
      </div>
  );
}

const errScreen = () => {
  return(
    <div className="err-page">
      <h1 className="err-msg">Couldn't Connect To The Server</h1>
    </div>
  )
}

const LoadingScreen = (props) => {
  const fetchErr = props.fetchErr
  console.log(props)

  return(
    <>
    {
      fetchErr ? errScreen() : loadingScreen()
    }
    </>
  )
};

export default LoadingScreen;
