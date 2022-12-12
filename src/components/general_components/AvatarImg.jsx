import Avatar from "boring-avatars"

const AvatarImg = ({ avatarId, size }) => {
  return (
        <Avatar 
            size={size}
            name={avatarId}
            variant="beam"
            colors={["#EFB810", "#F85858", "#00FFCD", "#0E6BA8", "#3D3D3D"]}
        />
  )
}

export default AvatarImg