import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Button = styled.button`
  background-color: #4CAF50; 
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin-right:5px;

  &:hover {
    background-color: #45a049;
  }
`;

export const Subtitle = styled.h2`
  color: #555;
`;

export const Result = styled.p`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;