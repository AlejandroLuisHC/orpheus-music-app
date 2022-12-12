import ContentLoader from "react-content-loader"

const TitleLoader = () => (
  <ContentLoader 
    speed={2}
    width={220}
    height={25}
    viewBox="0 0 220 25"
    backgroundColor="#efb810"
    foregroundColor="#d9d9d9"
  >
    <rect x="10" y="5" rx="10" ry="10" width="110" height="20" /> 
  </ContentLoader>
)

export default TitleLoader