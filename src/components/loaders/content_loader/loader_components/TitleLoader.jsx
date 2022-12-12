import ContentLoader from "react-content-loader"

const TitleLoader = () => (
  <ContentLoader 
    speed={2}
    width={220}
    height={20}
    viewBox="0 0 180 20"
    backgroundColor="#efb810"
    foregroundColor="#d9d9d9"
  >
    <rect x="18" y="0" rx="10" ry="10" width="110" height="20" /> 
  </ContentLoader>
)

export default TitleLoader