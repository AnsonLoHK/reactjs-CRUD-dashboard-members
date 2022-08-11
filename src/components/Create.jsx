import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { apiArticleMsg, apiArticleItem, apiFakeData } from "../api";
import { Link } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [items, setItems] = useState([]);
  const [msgitems, setMsgitems] = useState({});
  const [fakeDates, setFakeDates] = useState({});

  // 用途 fakeData
  async function postData() {
    let fakeData = {
      name,
      password,
      role,
    };

    try {
      // post
      const { data: fake } = await apiFakeData(fakeData);
      setFakeDates(fake);
    } catch (err) {
      console.error(err);
    }
  }

  //多個api集中管理 用途 blogs (五星)
  async function apiTest() {
    let articleMsg = {
      title: "配飲料",
      content: "測試",
    };

    try {
      // post
      const { data: msg } = await apiArticleMsg(articleMsg);
      setMsgitems(msg);
      // get
      const { data: items } = await apiArticleItem();
      setItems(items);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="遊戲名稱"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="請輸入密碼"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>權限</label>
          <input
            placeholder="請輸入權限"
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Field>

        <Button onClick={postData} type="submit">
          Submit
        </Button>
        <Link to="/read">
          <Button type="submit">前往列表</Button>
        </Link>

        {/* <Button onClick={apiTest} type="submit">
          apiTest
        </Button> */}
      </Form>
      {/* <div>
        BLOGS GET:
        {items.map((res, index) => (
          <div key={index}>{res.title}</div>
        ))}
      </div> */}
      <hr />
      {/* <span>BLOGS POST回傳:{JSON.stringify(msgitems)}</span> */}
      <hr />
      <div>fakeData post回傳:{JSON.stringify(fakeDates)}</div>
    </>
  );
};

export default Create;
