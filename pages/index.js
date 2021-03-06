import React, { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      /* 1. api를 통해 접속한 유저의 정보를 가져오세요. */
      const fetchUserInfo = await fetch("/api/user");
      const userInfo = await fetchUserInfo.json();

      /* 2. 유저의 정보가 있다면, 메인피드화면(/feed) 로 이동하고 
      유저의 정보가 없다면, 유저 정보가 없습니다. 가 화면에 뜨게 해주세요. */
      userInfo ? router.push("/feed") : <div>유저 정보가 없습니다.</div>;
    } catch (e) {
      console.error(e);
    }
  }

  return <div></div>;
};

export default index;
