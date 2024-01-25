import IGHeader from 'components/IGHeader'
import IGContainer from 'components/IGContainer'
import IGUser from 'components/IGUser';
import IGStory from './components/IGStory';
import IGPost from './components/IGPost';
import IGProfile from './components/IGProfile';
import { useGetIGPostsQuery } from "services/homeServices";
import Loading from "components/Loading";

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all");
  // console.log('data', data)
  // console.log('isLoading', isLoading)

  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })}
    </>
  );
};


const Home: React.FC = () => {
  return (<>
    <IGHeader />
    <IGContainer>
      <div className='flex lg:justify-center'>
        {/* 左側部分，w-full:手機板寬度100%，超過1024就縮為600px */}
        <div className='w-full lg:w-[600px]'>
          <IGStory />
          <IGPostList />
        </div>
        {/* 右側部分，手機板就隱藏右邊好友列，超過1024就有寬度424並以block顯示出來 */}
        <div className="hidden lg:block lg:w-[424px]">
          <IGProfile />
        </div>

      </div>
    </IGContainer>
  </>)
};

export default Home;
