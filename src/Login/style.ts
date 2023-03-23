import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  width: 50%;
  margin: auto;
  border-radius: 7px;
  box-shadow: 4px 0px 20px #ccc;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }

  input {
    padding: 10px;
  }

  input[type='submit'] {
    background-color: orangered;
    align-self: center;
    outline: none;
    border: none;
    color: #fff;
    padding: 15px 30px;
    border-radius: 10px;
    font-weight: 700;
  }

`