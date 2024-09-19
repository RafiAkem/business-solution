import React from "react";
import styled from "styled-components";
import ButtonLayanan from "@/components/ui/ButtonLayanan";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  Icon: React.ElementType;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  onClick,
  Icon,
}) => {
  return (
    <StyledWrapper onClick={onClick}>
      <div className="card">
        <div className="content">
          <div className="icon-container">
            <Icon className="text-5xl text-white mb-4" />
          </div>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <ButtonLayanan text={buttonText} />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 20px 1px;
    margin: 10px 0;
    text-align: center;
    position: relative;
    cursor: pointer;
    box-shadow: 0 10px 15px -3px rgba(33, 150, 243, 0.4),
      0 4px 6px -4px rgba(33, 150, 243, 0.4);
    border-radius: 10px;
    background-color: #6b6ecc;
    background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);
  }

  .content {
    padding: 20px;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .content .title {
    font-weight: 800;
    text-transform: uppercase;
    color: white;
    margin-top: 10px;
    font-size: 25px;
    letter-spacing: 1px;
    white-space: pre-line;
  }

  .content .description {
    color: rgba(255, 255, 255, 0.6);
    margin-top: 10px;
    font-size: 15px;
  }

  button {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: none;
    outline: none;
    color: rgb(255 255 255);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    padding: 0.75rem 1.5rem;
    background-color: rgb(33 150 243);
    border-radius: 0.5rem;
    width: 90%;
    text-shadow: 0px 4px 18px #2c3442;
  }
`;

export default Card;
