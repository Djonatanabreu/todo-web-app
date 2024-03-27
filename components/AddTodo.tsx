"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "./Form/Button";
import { Form } from "./Form/Form";
import { Input } from "./Form/Input";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const currency = (value: string) => {
    const string = value.toString();

    if (string.replace(/\D/g, "") !== "")
      return (parseInt(string.replace(/\D/g, ""), 10) / 100).toLocaleString(
        "pt-BR",
        {
          minimumFractionDigits: 2,
        }
      );

    return "0,00";
  };

  const currencyAllPlatforms = (value: string) => {
    if (typeof value === "number") {
      const [currency, cents] = (value / 100).toFixed(2).toString().split(".");

      return `R$ ${currency.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${cents}`;
    }

    return "R$ 0,00";
  };

  const onHandleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    console.log(value);

    setValue(currency(value));
  };

  console.log(value);

  return (
    <Form>
      <div>
        <Input
          inputMode='numeric'
          style={{ color: "red" }}
          value={value}
          onChange={onHandleChange}
        />
        <Button>Confirm</Button>
      </div>
    </Form>
  );
};
