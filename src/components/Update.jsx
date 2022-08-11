import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { putApiFakeData } from "../api";
import { Link } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [id, setID] = useState(null);
  const [fakeDates, setFakeDates] = useState({});

  const updateAPIData = () => {
    axios.put(`https://62f1f364b1098f150807dadd.mockapi.io/fakeData/${id}`, {
      name,
      password,
      role,
    });

    setFakeDates({
      name,
      password,
      role,
    });
  };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("name"));
    setPassword(localStorage.getItem("password"));
    setRole(localStorage.getItem("role"));
  }, []);

  console.log("after update", {
    name,
    password,
    role,
  });

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="遊戲名稱"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="請輸入密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>權限</label>
          <input
            placeholder="請輸入權限"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" onClick={updateAPIData}>
          更新
        </Button>
        <Link to="/read">
          <Button type="submit">回上列表</Button>
        </Link>
      </Form>
      <div>fakeData PUT回傳:{JSON.stringify(fakeDates)}</div>
    </div>
  );
};

export default Update;
