import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#efb810"
    foregroundColor="#d9d9d9"
  >
    <rect x="54" y="97" rx="3" ry="3" width="88" height="6" /> 
    <rect x="54" y="110" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="95" cy="48" r="42" />
  </ContentLoader>
)

export default MyLoader