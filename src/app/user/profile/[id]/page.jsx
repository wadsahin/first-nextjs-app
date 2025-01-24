
const MyProfile = async ({params}) => {
  const userId = (await params)
  console.log(userId)
  return (
    <div>
      MyProfile
    </div>
  );
};

export default MyProfile;