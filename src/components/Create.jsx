import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { apiArticleMsg, apiArticleItem, apiFakeData } from "../api";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [items, setItems] = useState([]);
  const [msgitems, setMsgitems] = useState({});
  const [fakeDates, setFakeDates] = useState({});

  // 用途 fakeData
  async function postData() {
    let fakeData = {
      firstName,
      lastName,
      checkbox,
    };

    try {
      // post
      const { data: fake } = await apiFakeData(fakeData);
      setFakeDates(fake);
    } catch (err) {
      console.error(err);
    }
  }

  //多個api集中管理 用途 blogs
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
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>

        <Button onClick={apiTest} type="submit">
          apiTest
        </Button>
      </Form>
      <div>
        BLOGS GET:
        {items.map((res, index) => (
          <div key={index}>{res.title}</div>
        ))}
      </div>
      <hr />
      <span>BLOGS POST回傳:{JSON.stringify(msgitems)}</span>
      <hr />
      <div>fakeData post回傳:{JSON.stringify(fakeDates)}</div>
    </>
  );
};

export default Create;
