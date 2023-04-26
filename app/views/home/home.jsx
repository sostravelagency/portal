import get_post from "@/app/api/get_post";
import Header from "@/app/component/Header";
import { Grid } from "@mui/material";
import { Image } from "antd";
import moment from "moment";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Truncate = dynamic(import('react-truncate'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })

const HomePage = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await get_post();
      return setPostData(result);
    })();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <br />
      <div style={{ padding: 10, fontSize: 24 }}>New post</div>
      <Grid container style={{ width: "100%" }}>
        {postData?.map((item, key) => (
          <Grid
            key={key}
            item
            xs={3}
            padding={3}
            style={{ display: "flex", gap: 10 }}
          >
            <Image
              alt={""}
              src={item?.image}
              style={{ width: "100%", aspectRatio: 2 / 3, objectFit: "cover" }}
            />
            <div>
              <div>{item?.title || "Untitled"}</div>
              <br />
              <br />
              <div>{moment(item?.time_created)?.format("DD-MM-YYYY")}</div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
