import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { apiArticleMsg, apiArticleItem } from "../api";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [items, setItems] = useState([]);
  const [msgitems, setMsgitems] = useState({});

  //after click button excute this function
  async function postData() {
    let articleMsg = {
      title: "測試0809",
      content: "測試",
    };

    try {
      // get
      const { data: items } = await apiArticleItem();
      // post
      const { data: msg } = await apiArticleMsg(articleMsg);
      setItems(items);
      setMsgitems(msg);
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
      </Form>
      {items.map((res) => (
        <div>{res.createdAt}</div>
      ))}
      <hr />

      <span>post回傳:{JSON.stringify(msgitems)}</span>
    </>
  );
};

export default Create;
