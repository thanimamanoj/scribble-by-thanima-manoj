import React, { useState } from "react";

import { Typography, Input } from "@bigbinary/neetoui/v2";

const Password = ({ create_password, setCreatePassword, setPassword }) => {
  const [style, setStyle] = useState({
    length: "text-red-700",
    letter_and_number: "text-red-700",
  });

  const password_validate = event => {
    const value = event.target.value;
    const min_six_char = new RegExp(`(?=.{6,})`);
    const number = new RegExp("(?=.*[0-9])");
    const lowercase = new RegExp("(?=.*[a-z])");
    const uppercase = new RegExp("(?=.*[A-Z])");

    min_six_char.test(value)
      ? setStyle(prev => ({ ...prev, length: "text-green-700" }))
      : setStyle(prev => ({ ...prev, length: "text-red-700" }));

    if (
      number.test(value) &&
      (lowercase.test(value) || uppercase.test(value))
    ) {
      setStyle(prev => ({ ...prev, letter_and_number: "text-green-700" }));
    } else {
      setStyle(prev => ({ ...prev, letter_and_number: "text-red-700" }));
    }
  };
  return (
    <div>
      <div className="flex mt-6">
        <input
          type="checkbox"
          checked={create_password}
          className="mt-1 mr-4 "
          onChange={() => setCreatePassword(prev => !prev)}
        />
        <Typography style="h4" className="">
          Password Protect Knowledge Base
        </Typography>
      </div>
      {create_password && (
        <div>
          <Input
            type="password"
            label="Password"
            onChange={e => setPassword(e.target.value)}
            onKeyUp={password_validate}
            className="mt-4"
          />
          <label className={style.length}>Have at least 6 characters</label>
          <br />
          <label className={style.letter_and_number}>
            Include at least 1 letter and 1 number
          </label>
        </div>
      )}
    </div>
  );
};

export default Password;
