import ContentLoader from "react-content-loader"

const PlaylistsLoader = () =>  (
    <ContentLoader 
      speed={2}
      width={200}
      height={150}
      viewBox="0 0 200 150"
      backgroundColor="#d9d9d9"
      foregroundColor="#efb810"
    >
      <circle cx="30" cy="20" r="6" /> 
      <rect x="45" y="15" rx="5" ry="5" width="110" height="10" /> 
      <circle cx="30" cy="50" r="6" /> 
      <rect x="45" y="45" rx="5" ry="5" width="110" height="10" /> 
      <circle cx="30" cy="80" r="6" /> 
      <rect x="45" y="75" rx="5" ry="5" width="110" height="10" /> 
      <circle cx="30" cy="110" r="6" /> 
      <rect x="45" y="105" rx="5" ry="5" width="110" height="10" />
    </ContentLoader>
  )

export default PlaylistsLoader