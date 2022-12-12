import ContentLoader from "react-content-loader"

const TrackLoader = () => (
  <ContentLoader 
    speed={2}
    width={220}
    height={250}
    viewBox="0 0 180 250"
    backgroundColor="#efb810"
    foregroundColor="#d9d9d9"
  >
    <rect x="18" y="20" rx="15" ry="15" width="150" height="150" /> 
    <rect x="18" y="185" rx="3" ry="3" width="108" height="8" /> 
    <rect x="18" y="205" rx="3" ry="3" width="72" height="8" /> 
  </ContentLoader>
)

export default TrackLoader